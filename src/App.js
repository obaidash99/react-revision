import { useState } from 'react';
import './App.css';

import MainHeader from './components/MainHeader';
import PostsList from './components/PostsList';
function App() {
	const [modaIsVisible, setModaIsVisible] = useState(false);

	function showModalHnadler() {
		setModaIsVisible(true);
	}

	function hideModalHnadler() {
		setModaIsVisible(false);
	}

	return (
		<>
			<MainHeader onCreatePost={showModalHnadler} />
			<main>
				<PostsList isPosting={modaIsVisible} onStopPosting={hideModalHnadler} />
			</main>
		</>
	);
}

export default App;
