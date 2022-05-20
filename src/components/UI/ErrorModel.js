import Card from "./Card.js";
import Button from "../Element/Button.js";
import styles from "./ErrorModel.module.css";

const ErrorModel = (props) => {
	return (
		<div className={styles.backdrop}>
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
		</div>
	);
}

export default ErrorModel;