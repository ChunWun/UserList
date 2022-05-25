import Card from "./Card.js";
import Button from "../Element/Button.js";
import styles from "./ErrorModal.module.css";
import React from "react";
import ReactDOM from 'react-dom';

const BackDrop = (props) => {
	return <div className={styles.backdrop} />
}

const Modal = (props) => {
	return (
		<Card className={styles.modal}>
			<div>
				<header className={styles.header}>
					<h2>{props.title}</h2>
				</header>
				<div className={styles.content}>
					<p>{props.content}</p>
				</div>
				<footer className={styles.actions}>
					<Button onClick={props.onConfirm}>Confirm</Button>
				</footer>
			</div>
		</Card>
	);
}

const ErrorModal = (props) => {
	return (
		<React.Fragment>
			{ReactDOM.createPortal(
				<BackDrop />,
				document.getElementById('backdrop-root')
			)}
			{ReactDOM.createPortal(
				<Modal title={props.title} content={props.content} onConfirm={props.onConfirm} />,
				document.getElementById('overlay-root')
			)}
		</React.Fragment>
	);
}

export default ErrorModal;