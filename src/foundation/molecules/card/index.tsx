import { useContext, useCallback, useState, lazy, Suspense } from "react";
import DragContext from "../../../store/DragContext";
import { ICardProps } from "../../../models/model";
import { useCardClass, useCatImage } from "../../../utils/hook";

const Modal = lazy(() => import("../../organisms/modal"));

const Card = (props: ICardProps) => {
    const { type, title, position, index } = props;
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

    const [isModalOpen, setIsModalOpen] = useState<string | null>(null);

    return (
        <>
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
                onClick={() => setIsModalOpen(type)}
            >
                <p>{title}</p>
                <img src={catImage} alt="cat" />
            </div>
            {isModalOpen && (
                <Suspense>
                    <Modal
                        {...props}
                        open={Boolean(type)}
                        isClose={() => setIsModalOpen(null)}
                    />
                </Suspense>
            )}
        </>
    );
};

export default Card;
