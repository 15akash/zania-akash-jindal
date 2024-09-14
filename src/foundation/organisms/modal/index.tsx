import { FC, useEffect } from "react";
import { ModalProps } from "../../../models/model";
import styles from "./Modal.module.scss";
import { useCatImage } from "../../../utils/hook";
import CardImage from "../../molecules/card-image";

const Modal: FC<ModalProps> = (props: ModalProps) => {
    const catImage = useCatImage(props.position);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                props.isClose();
            }
        };
        window.addEventListener("keydown", handleKeyDown);

        // Cleanup function to remove the event listener when the component unmounts
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className={styles["modal"]}>
            <div className={styles["modal--container"]}>
                <div className={styles["modal--container--header"]}>
                    <h3>{props.title}</h3>
                    <button onClick={props.isClose}>X</button>
                </div>
                <div className={styles["modal--container--body"]}>
                    <CardImage image={catImage} alt={props.type} />
                </div>
            </div>
        </div>
    );
};

export default Modal;
