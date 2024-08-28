import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import './utils/I18n';

import RoutesIndex from "./components/routes";
import MouseFollower from './components/MouseFollower';

import frFlag from './assets/ico/fr-flag.svg';
import ukFlag from './assets/ico/uk-flag.svg';

const App: React.FC = () => {
	const { i18n } = useTranslation();
	const currentLanguage = i18n.language;

	const toggleLanguage = () => {
		const newLanguage = currentLanguage === 'en' ? 'fr' : 'en';
		i18n.changeLanguage(newLanguage);
	};

	const fadeInVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				duration: 2,
				ease: "easeOut"
			}
		}
	};

	return (
		<motion.div
			initial="hidden"
			animate="visible"
			variants={fadeInVariants}
		>
			<Router>
				<MouseFollower />
				<RoutesIndex />
				<div className="language-switcher">
					<button onClick={toggleLanguage} aria-label="Change Language">
						<img
							src={currentLanguage === 'en' ? frFlag : ukFlag}
							alt={currentLanguage === 'en' ? 'Passer en Français' : 'Switch to English'}
						/>
					</button>
				</div>
			</Router>
		</motion.div>
	);
}

export default App;