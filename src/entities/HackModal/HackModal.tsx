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
			<p>В этом топике я хочу вкратце поделиться с вами моим первым значимым успехом на сцене соревновательной
				разработки.</p>
			<p>Приглашение поучаствовать мне пришло от чудесного дизайнера Валерии, с которой мы однажды уже
				учавствовали в хакатоне. Я со скрежетом согласился, ведь на носу была сессия и переход на новое место
				работы, однако соревновательного духа очень не хватало. </p>
			<p>Вместе с командой мы сошлись на мнении, что интересенее всего будет взять задачу Аэрофлота <a
				href="https://leaders2023.innoagency.ru/task_13">&quot;Рекомендательный сервис динамического
				прогнозирования спроса на авиарейсы&quot;.</a></p>
			<p>18 мая началась первая стадия разработки и продлилась она до 28 числа. За 10 дней нам было необходимо
				выдать демку, которая выделялась бы среди других 43 решений. По всем заветам agile методологии я завел
				скрам доску (на которую совсем вскоре мы перестали обращать внимание из-за нехватки времени). Так вышло,
				что в процессе первых созвонов я взял на себя роль тимлида, которая закрепилась за мной до конца
				хакатона. На деле я так и хотел, но ранее с ребятами мы уже договорились о другом распредении ролей.</p>
			<p>Вместе с тем, как я начал не только разрабатывать, но и вести проект и контролировать команду в процессе
				разработки, у меня появилось гораздо больше мотивации и рвения выиграть этот хакатон. Безусловно даже в
				процессе я осознавал, что моментами ошибаюсь, но выносил это на поля и шел дальше как ни в чем не
				бывало.</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam architecto assumenda cupiditate
				deserunt, distinctio expedita in incidunt maiores minima, minus molestiae molestias quisquam ratione
				recusandae sunt ullam, vitae voluptate voluptatem?</p>
			<img src={hackathonImg} className={styles.picture} alt="demo" />

		</Modal>
	) : (<></>);
};

export default HackModal;
