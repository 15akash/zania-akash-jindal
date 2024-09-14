import { useContext, useCallback } from "react";
import DragContext from "../../../store/DragContext";
import { ICardProps } from "../../../models/data.model";
import { useCardClass } from "../../../utils/hook";

const Card = ({ type, title, position, index }: ICardProps) => {
    const {
        state: { draggingCard, dragOverCard },
        dispatch,
    } = useContext(DragContext);

    const cardClass = useCardClass(index);

    const dragEndHandler = useCallback(() => {
        if (dragOverCard !== draggingCard) {
            dispatch({ type: "SET_DRAG_COMPLETE", payload: true });
        }
    }, [dragOverCard, draggingCard, dispatch]);
    return (
        <div
            draggable="true"
            onDragStart={(e) => {
                dispatch({ type: "SET_DRAGGING_CARD", payload: index });
            }}
            onDragEnd={dragEndHandler}
            onDragOver={(e) =>
                dispatch({ type: "SET_DRAGGING_OVER", payload: index })
            }
            className={cardClass}
        >
            <p>{title}</p>
        </div>
    );
};

export default Card;
