import React, { useState } from "react";

// Img
import bot from "../../../../assets/img/projects/chatbot/chatbot-ico.jpg";
import send from "../../../../assets/icons/paper-plane.svg";

const Chatbot = () => {
	const [userMessage, setUserMessage] = useState("");
	const [suggestions, setSuggestions] = useState(true);
	const [error, setError] = useState(false);

	// Interactions
	const questions = [
		// basic
		/* 0 */ ["hey", "coucou", "hello", "bonjour", "bien bonjour", "bonsoir", "bien bonsoir", "hi", "salut", "bonjou", "onjour", "ello", "chalu"],
		/* 1 */ ["comment ca va", "ca va", "comment vas tu", "tu vas bien", "tu vas comment", "tout va bien", "what's up", "va"],
		/* 2 */ ["tu es bot", "bot", "robot", "tes bot", "tes robot", "tu es robot", "es tu robot", "t es bot", "t es robot"],
		/* 3 */ ["bien", "super", "cool", "je vais bien", "chouette", "content", "happy", "très bien", "génial"],
		/* 4 */ ["bof", "triste", "fatigué", "mal", "pas bien", "malheureux", "sad", "je vais mal", "je me sens triste"],
		/* 5 */ ["raconte moi histoire", "raconte moi blague", "raconte truc", "raconte", "dis", "parles"],
		/* 6 */ ["merci", "merci beaucoup", "parfait"],
		/* 7 */ ["au revoir", "bye", "a la prochaine", "revoir", "ciao", "bonne journée", "bonne soirée"],

		// medium
		/* 8 */ ["alexis", "alexis ferrandis", "ferrandis", "qui est alexis", "qui est alexis ferrandis", "alexi", "ferrandi", "ferrandis alexis"],
		/* 9 */ ["a quoi tu sers", "a quoi sers tu", "tu sais faire quoi", "que sais tu faire", "quel est ton but", "pourquoi tu existes", "tu sers a quoi", "que fais tu", "tu fais quoi"],
	];

	const answers = [
		// basic
		/* 0 */ ["Hello !", "Salut !", "Bienvenue !", "Bonjour !", "Bonsoir !", "Bienvenue, comment puis-je me rendre utile ?", "Bonjour, comment allez vous ?"],
		/* 1 */ ["Je vais bien, et vous?", "Ca va, je suis encore en train d'apprendre.", "Plutôt très bien.", "Mon émotion est positive.", "Mes circuits indiquent : OK."],
		/* 2 */ ["En quelque sorte.", "C'est un bien grand mot.", "On peut dire ca oui.", "Un quoi ? Je suis un humain, j'aime faire des choses humaines comme boire de l'eau.", "Robots, humains, ne sommes-nous pas tous pareils au fond ?"],
		/* 3 */ ["Ca me fait plaisir alors !", "Tant mieux.", "Tout cela est parfait."],
		/* 4 */ ["Bien alors... Comment ca se fait?", "Il ne faut pas, la vie est pleine de surprise!", "Cela me chagrine.", "J'espère que vous vous porterez mieux."],
		/* 5 */ ["A propos de quoi?", "Il était une fois...", "Quelle est la différence entre un robot et du ketchup ? <br/>Il n’y en a pas : Ils sont tous les deux automates."],
		/* 6 */ ["Content d'avoir pu aider.", "Pas de problème.", "Ca me fait plaisir."],
		/* 7 */ ["A la prochaine.", "Au revoir.", "C'était un plaisir."],

		// medium
		/* 8 */ ["Alexis est mon créateur.", "Alexis est un développeur web.", "Vous êtes bien sur le portfolio de Alexis Ferrandis."],
		/* 9 */ ["Je suis un robot communicatif.", "Je suis principalement là pour vous aider.", "Je suis là pour répondre à vos question."],
	];

	// Message verification
	const handleSubmit = () => {
		const chatArea = document.getElementById("chatArea");
		userMessage.replace(/[^\w\s\d]/gi, "");
		const messageDOM = `<div class="user box"><p>${userMessage}</p></div>`;
		if (userMessage.length < 24 && userMessage.length >= 3) {
			chatArea.innerHTML += messageDOM;
			setUserMessage("");
			setError(false);
			handleMessage(userMessage);
			chatArea.scrollTo(0, 10000);
		} else {
			setError(true);
		}
	};

	// Simple suggestion handler
	const handleSuggestion = (e) => {
		setSuggestions(false);
		const chatArea = document.getElementById("chatArea");
		const messageDOM = `<div class="user box"><p >${e.target.innerHTML}</p></div>`;
		chatArea.innerHTML += messageDOM;
		setError(false);
		handleMessage(e.target.innerHTML);
		chatArea.scrollTo(0, 10000);
	};

	// Chatbot logic
	const handleMessage = (msg) => {
		let botAnswer = "";
		msg = msg.toLocaleLowerCase();
		msg = msg.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, "");
		msg = msg.replace(/ un /g, " ").replace(/ une /g, " ").replace(/ le /g, " ").replace(/ la /g, " "); /*to continue*/

		if (interactions(questions, answers, msg)) {
			botAnswer = interactions(questions, answers, msg);
		} else {
			botAnswer = "Désolé je ne suis pas assez bien programmé pour le moment 😔";
		}

		setTimeout(() => {
			const chatArea = document.getElementById("chatArea");
			let botMsgDOM = `<div class="bot box"><img src=${bot} alt="T.bot" /><div className="msg-display"><p>` + botAnswer + `</p></div></div>`;
			chatArea.innerHTML += botMsgDOM;
			chatArea.scrollTo(0, 10000);
		}, Math.floor(Math.random() * (500 - 100)) + 100);
	};

	// Check in db
	const interactions = (questions, answers, msg) => {
		let i;
		for (let x = 0; x < questions.length; x++) {
			for (let y = 0; y < answers.length; y++) {
				if (questions[x][y] === msg) {
					let items = answers[x];
					i = items[Math.floor(Math.random() * items.length)];
				}
			}
		}
		return i;
	};

	// press enter push
	const handleEnter = (e) => {
		if (e.key === "Enter") {
			handleSubmit();
		}
	};

	return (
		<div className="chatbot-content">
			<div id="chatArea">
				<div className="bot box">
					<img src={bot} alt="T.bot" />
					<div className="msg-display">
						<p>
							Bonjour, je suis T.bot.
							<br />
							Chatbot à votre service.
						</p>
					</div>
				</div>
			</div>
			<div className="suggestions">
				{suggestions && (
					<>
						<button onClick={handleSuggestion}>Hello</button>
						<button onClick={handleSuggestion}>Comment ca va?</button>
					</>
				)}
			</div>

			<div className="text-input">
				{error && <p className="error">message incorrect</p>}
				<input name="userMessage" type="text" placeholder="Message" value={userMessage} onChange={(e) => setUserMessage(e.target.value)} onKeyDown={handleEnter} />
				<button type="button" onClick={handleSubmit}>
					<img src={send} alt="envoyer" />
				</button>
			</div>
		</div>
	);
};

export default Chatbot;
