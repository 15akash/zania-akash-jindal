import { useContext, useCallback } from "react";
import DragContext from "../../../store/DragContext";
import { ICardProps } from "../../../models/model";
import { useCardClass, useCatImage } from "../../../utils/hook";

const Card = ({ type, title, position, index }: ICardProps) => {
    const {
        state: { draggingCard, dragOverCard },
        dispatch,
    } = useContext(DragContext);

    const cardClass = useCardClass(index);
    const catImage = useCatImage(position);

    const dragEndHandler = useCallback(() => {
        if (dragOverCard !== draggingCard) {
            dispatch({ type: "SET_DRAG_COMPLETE", payload: true });
        }
    }, [dragOverCard, draggingCard, dispatch]);

    return (
        <div
            draggable="true"
            onDragStart={() =>
                dispatch({ type: "SET_DRAGGING_CARD", payload: index })
            }
            onDragEnd={dragEndHandler}
            onDragOver={(e) => {
                e.preventDefault();
                dispatch({ type: "SET_DRAGGING_OVER", payload: index });
            }}
            className={cardClass}
            style={{ viewTransitionName: `card-${index}` }}
        >
            <p>{title}</p>
            <img src={catImage} alt="cat" />
        </div>
    );
};

export default Card;
