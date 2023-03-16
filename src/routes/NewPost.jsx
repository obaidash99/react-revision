import { useState } from 'react';
import Modal from '../components/Modal';

import classes from './NewPost.module.css';

function NewPost({ onCancel, onAddPost }) {
	const [enteredBody, setEnteredBody] = useState('');
	const [enteredAuthor, setEnteredAuthor] = useState('');

	function BodyChangeHandler(event) {
		setEnteredBody(event.target.value);
	}

	function AuthorChangeHandler(event) {
		setEnteredAuthor(event.target.value);
	}

	function submitHnadler(e) {
		e.preventDefault();
		const postData = {
			body: enteredBody,
			author: enteredAuthor,
		};
		onAddPost(postData);
		onCancel();
	}

	return (
		<Modal>
			<form className={classes.form} onSubmit={submitHnadler}>
				<p>
					<label htmlFor="body">Text</label>
					<textarea id="body" required rows={3} onChange={BodyChangeHandler} />
				</p>
				<p>
					<label htmlFor="name">Your name</label>
					<input type="text" id="name" required onChange={AuthorChangeHandler} />
				</p>
				<p className={classes.actions}>
					<button type="button" onClick={onCancel}>
						Cancel
					</button>
					<button>Submit</button>
				</p>
			</form>
		</Modal>
	);
}

export default NewPost;
