import { BrowserRouter as Router } from 'react-router-dom';
import RoutesIndex from "./components/routes";
import MouseFollower from './components/MouseFollower';
import { motion } from 'framer-motion';

function App() {
	const fadeInVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				duration: 1,
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
			</Router>
		</motion.div>
	);
}

export default App;