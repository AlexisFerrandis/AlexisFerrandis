<?php
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

function cleanInput($data) {
    return htmlspecialchars(stripslashes(trim($data)));
}

function validateEmail($email) {
    return filter_var($email, FILTER_VALIDATE_EMAIL);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = isset($_POST["name"]) ? cleanInput($_POST["name"]) : '';
    $company = isset($_POST["company"]) ? cleanInput($_POST["company"]) : '';
    $email = isset($_POST["email"]) ? cleanInput($_POST["email"]) : '';
    $message = isset($_POST["message"]) ? cleanInput($_POST["message"]) : '';

    $errors = [];

    if (empty($name)) {
        $errors[] = "Le nom est requis.";
    }

    if (empty($email) || !validateEmail($email)) {
        $errors[] = "Une adresse email valide est requise.";
    }

    if (empty($message)) {
        $errors[] = "Le message est requis.";
    }

    if (count($errors) === 0) {
        $to = "alexisferrandis@protonmail.com";  
        $subject = "Nouveau message de votre portfolio";
        $headers = "From: " . $email . "\r\n" .
                   "Reply-To: " . $email . "\r\n" .
                   "MIME-Version: 1.0" . "\r\n" .
                   "Content-Type: text/html; charset=UTF-8" . "\r\n";

        $body = "<h2>Nouveau message de contact</h2>
                 <p><strong>Nom:</strong> {$name}</p>
                 <p><strong>Entreprise:</strong> {$company}</p>
                 <p><strong>Email:</strong> {$email}</p>
                 <p><strong>Message:</strong><br>{$message}</p>";

        $headers = preg_replace('/\n/', '', $headers);
        $headers = preg_replace('/\r/', '', $headers);

        $success = mail($to, $subject, $body, $headers);

        if ($success) {
            echo json_encode(["status" => "success", "message" => "Email envoyé avec succès!"]);
        } else {
            echo json_encode(["status" => "error", "message" => "L'envoi de l'email a échoué."]);
        }
    } else {
        echo json_encode(["status" => "error", "message" => implode(" ", $errors)]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Méthode de requête invalide."]);
}
?>