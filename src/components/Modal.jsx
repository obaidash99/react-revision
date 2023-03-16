import { useNavigate } from 'react-router-dom';

import classes from './Modal.module.css';

function Modal({ children }) {
	const navigate = useNavigate();

	function closeHandler() {
		navigate('..'); // like in cd command, it is to the back directory
	}
	return (
		<>
			<div className={classes.backdrop} onClick={closeHandler} />
			<dialog open className={classes.modal}>
				{children}
			</dialog>
		</>
	);
}

export default Modal;
