import React from "react";
import styles from "./HackModal.module.scss";
import Modal from "../../widgets/Modal/Modal";
import hackathonImg from "../../shared/img/hackathon.jpg";

export interface EventModalProps {
	opened: boolean;
	onClose: () => void;
}

const HackModal: React.FC<EventModalProps> = ({ opened, onClose }: EventModalProps) => {

	return opened ? (
		<Modal onClose={onClose} className={styles.wrapper}>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam architecto assumenda cupiditate
				deserunt, distinctio expedita in incidunt maiores minima, minus molestiae molestias quisquam ratione
				recusandae sunt ullam, vitae voluptate voluptatem?</p>
			<img src={hackathonImg} className={styles.picture} alt="hack" />
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam architecto assumenda cupiditate
				deserunt, distinctio expedita in incidunt maiores minima, minus molestiae molestias quisquam ratione
				recusandae sunt ullam, vitae voluptate voluptatem?</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam architecto assumenda cupiditate
				deserunt, distinctio expedita in incidunt maiores minima, minus molestiae molestias quisquam ratione
				recusandae sunt ullam, vitae voluptate voluptatem?</p>
		</Modal>
	) : (<></>);
};

export default HackModal;
