import { BrowserRouter as Router } from 'react-router-dom';
import RoutesIndex from "./components/routes";

import MouseFollower from './components/MouseFollower';

function App() {
	return (
		<Router>
			<MouseFollower />
			<RoutesIndex />
		</Router>
	);
}

export default App;