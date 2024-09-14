declare global {
    interface Document {
        startViewTransition(callback: () => void): void;
    }
}

export type ICardData = {
    type: string;
    title: string;
    position: number;
};

export interface ICardProps extends ICardData {
    index: number;
}

export type ICardImageProps = {
    image: string;
    alt: string;
};

type IActionType =
    | "SET_DRAGGING_CARD"
    | "SET_DRAGGING_OVER"
    | "SET_DRAG_COMPLETE"
    | "CANCEL_OPERATIONS";

export type IInitialState = {
    draggingCard: number | null;
    dragOverCard: number | null;
    isDragComplete: boolean;
};

export type IDispatchAction = {
    type: IActionType;
    payload?: any;
};

export type IContext = {
    state: IInitialState;
    dispatch: React.Dispatch<IDispatchAction>;
};

export type DragProviderProps = {
    children: React.ReactNode;
};

export interface ModalProps extends ICardProps {
    open: boolean;
    isClose: () => void;
}
