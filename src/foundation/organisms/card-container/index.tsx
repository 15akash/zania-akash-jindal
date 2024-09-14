import { useContext, useEffect, useState } from "react";
import data from "../../../utils/data.json";
import Card from "../../molecules/card";
import styles from "./CardContainer.module.scss";
import { ICardData } from "../../../models/data.model";
import DragContext from "../../../store/DragContext";
import { swapElements } from "../../../utils/common-utils";

const CardContainer = () => {
    const [cards, setCards] = useState<ICardData[]>([]);

    const {
        state: { draggingCard, dragOverCard, dragCompleteCard },
        dispatch,
    } = useContext(DragContext);

    useEffect(() => {
        setCards([...data.data]);
    }, []);

    useEffect(() => {
        if (dragCompleteCard) {
            const cardsAfterSwapping = swapElements(
                cards,
                dragOverCard as number,
                draggingCard as number
            );
            setCards(cardsAfterSwapping);
            dispatch({ type: "CANCEL_OPERATIONS" });
        }
    }, [cards, dragCompleteCard, dragOverCard, draggingCard, dispatch]);

    return (
        <div className={styles["card-container"]}>
            {cards.map((card: ICardData, index: number) => (
                <div key={card.type} style={{ position: "relative" }}>
                    <Card {...card} index={index} />
                </div>
            ))}
        </div>
    );
};

export default CardContainer;
