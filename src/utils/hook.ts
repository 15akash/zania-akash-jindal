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

export const useCatImage = (position: number) => {
    const catImages = useMemo(
        () => [
            require("../assets/cat-1.jpg"),
            require("../assets/cat-2.jpg"),
            require("../assets/cat-3.webp"),
            require("../assets/cat-4.jpg"),
            require("../assets/cat-5.jpg"),
        ],
        []
    );

    return catImages[position];
};
