import { useState } from 'react';

import Modal from './Modal';
import Post from './Post';
import NewPost from './NewPost';
import classes from './PostsList.module.css';

function PostsList() {
	const [modaIsVisible, setModaIsVisible] = useState(true);
	const [enteredBody, setEnteredBody] = useState('');
	const [enteredAuthor, setEnteredAuthor] = useState('');

	function hideModalHnadler() {
		setModaIsVisible(false);
	}

	function BodyChangeHandler(event) {
		setEnteredBody(event.target.value);
	}

	function AuthorChangeHandler(event) {
		setEnteredAuthor(event.target.value);
	}

	return (
		<>
			{modaIsVisible && (
				<Modal onClose={hideModalHnadler}>
					<NewPost
						onBodyChange={BodyChangeHandler}
						onAuthorChange={AuthorChangeHandler}
					/>
				</Modal>
			)}
			<ul className={classes.posts}>
				<Post author={enteredAuthor} body={enteredBody} />
				<Post author="Obaida" body="Hellooo!" />
			</ul>
		</>
	);
}

export default PostsList;
