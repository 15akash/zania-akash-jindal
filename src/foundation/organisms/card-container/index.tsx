import { useContext, useEffect, useState } from "react";
import data from "../../../utils/data.json";
import Card from "../../molecules/card";
import styles from "./CardContainer.module.scss";
import { ICardData } from "../../../models/model";
import DragContext from "../../../store/DragContext";
import { swapElements } from "../../../utils/common-utils";
import { flushSync } from "react-dom";

const CardContainer = () => {
    const [cards, setCards] = useState<ICardData[]>([]);

    const {
        state: { draggingCard, dragOverCard, isDragComplete },
        dispatch,
    } = useContext(DragContext);

    useEffect(() => {
        setCards([...data.data]);
    }, []);

    useEffect(() => {
        if (isDragComplete) {
            const cardsAfterSwapping = swapElements(
                cards,
                dragOverCard as number,
                draggingCard as number
            );
            dispatch({ type: "CANCEL_OPERATIONS" });
            document.startViewTransition(() => {
                flushSync(() => {
                    setCards([...cardsAfterSwapping]);
                });
            });
        }
    }, [cards, isDragComplete, dragOverCard, draggingCard, dispatch]);

    return (
        <div className={styles["card-container"]}>
            {cards.map((card: ICardData, index: number) => (
                <Card {...card} index={index} key={card.type} />
            ))}
        </div>
    );
};

export default CardContainer;
