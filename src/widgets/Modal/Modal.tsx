import React, { HTMLProps, MouseEventHandler, useCallback, useRef } from "react";
import { useEffect, useState } from "react";
import Portal, { createContainer } from "../Portal/Portal";
import styles from "./Modal.module.scss";
import {ReactComponent as CloseSvg} from "../../shared/img/close.svg";
import cx from "classnames";

const MODAL_CONTAINER_ID = "modal-container-id";

interface ModalProps extends HTMLProps<HTMLDivElement> {
	onClose?: () => void;
	children: React.ReactNode;
	className?: string;
}
const Modal = ({ onClose, children, className }: ModalProps) => {
	const [isMounted, setMounted] = useState(false);
	const rootRef = useRef<HTMLDivElement>(null);

	const handleClose: MouseEventHandler<HTMLButtonElement> =
		useCallback(() => {
			onClose?.();
		}, [onClose]);

	useEffect(() => {
		createContainer({ id: MODAL_CONTAINER_ID });
		setMounted(true);
	}, []);

	useEffect(() => {
		const handleWrapperClick = (event: MouseEvent) => {
			const { target } = event;

			if (target instanceof Node && rootRef.current === target) {
				onClose?.();
			}
		};
		const handleEscapePress = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				onClose?.();
			}
		};

		window.addEventListener("click", handleWrapperClick);
		window.addEventListener("keydown", handleEscapePress);
		document.documentElement.style.overflow = "hidden";

		return () => {
			window.removeEventListener("click", handleWrapperClick);
			window.removeEventListener("keydown", handleEscapePress);
			document.documentElement.style.overflow = "";
		};
	}, [onClose]);

	return (
		isMounted
			? (
				<Portal id={MODAL_CONTAINER_ID}>
					<div className={styles.wrap} ref={rootRef} data-testid="wrap">
						<div className={cx(styles.content, className)}>
							<button
								type="button"
								className={styles.closeButton}
								onClick={handleClose}
								data-testid="on-close-button"
							>
								<CloseSvg/>
							</button>
							{children}
						</div>
					</div>
				</Portal>
			)
			: null
	);
};

export default Modal;