import React, { FC } from "react";
import { ModalProps } from "../../../models/model";
import styles from "./Modal.module.scss";
import { useCatImage } from "../../../utils/hook";

const Modal: FC<ModalProps> = (props: ModalProps) => {
    const catImage = useCatImage(props.position);
    return (
        <div className={styles["modal"]}>
            <div className={styles["modal--container"]}>
                <div className={styles["modal--container--header"]}>
                    <h3>{props.title}</h3>
                    <button onClick={props.isClose}>X</button>
                </div>
                <div className={styles["modal--container--body"]}>
                    <img src={catImage} alt="cat" />
                </div>
            </div>
        </div>
    );
};

export default Modal;
