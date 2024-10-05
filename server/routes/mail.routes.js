const router = require("express").Router();
const nodemailer = require("nodemailer");
const Joi = require("joi");
const rateLimit = require("express-rate-limit");


const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5, // Limite chaque IP à 5 requêtes par 15 minutes
    message: "Trop de requêtes provenant de cette IP, veuillez réessayer plus tard."
});
const schema = Joi.object({
    name: Joi.string().min(1).max(50).required(),
    email: Joi.string().email().required(),
    company: Joi.string().allow('').optional(),
    message: Joi.string().min(1).max(1000).required()
});


router.post("/send-email", limiter, async (req, res) => {
    console.log(req.body);

    const { name, email, company, message } = req.body;

    const { error } = schema.validate({ name, email, company, message });
    if (error) return res.status(400).send(`Invalid input data: ${error.details[0].message}`);

    console.log("On mail route");


    let transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: true, // true pour port 465, false pour port 587
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });

    const mailOptions = {
        from: `${process.env.SMTP_USER}`,
        to: `${process.env.SMTP_DEST}`,
        subject: `Message de ${name} - ${company}`,
        text: message,
        replyTo: email,
        attachments: []
    };
    console.log("Mail is ready...");

    // Envoyer l'e-mail
    try {
        await transporter.sendMail(mailOptions);
        console.log("Mail sent");
        res.status(200).json({ status: "success", message: "Email envoyé avec succès" });
    } catch (error) {
        console.error("Erreur lors de l'envoi de l'e-mail : ", error);
        res.status(500).send("Erreur lors de l'envoi de l'e-mail");
    }
});

module.exports = router;