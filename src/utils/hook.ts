import { useContext, useMemo } from "react";
import DragContext from "../store/DragContext";
import styles from "../foundation/molecules/card/Card.module.scss";

export const useCardClass = (index: number) => {
    const {
        state: { dragOverCard, draggingCard },
    } = useContext(DragContext);

    const cardClass = useMemo(() => {
        return `${styles["card"]} ${dragOverCard === index && draggingCard !== index && styles["card-hover-over"]} ${draggingCard === index && styles["card-leaving"]}`;
    }, [dragOverCard, draggingCard, index]);

    return cardClass;
};