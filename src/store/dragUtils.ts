import { IDispatchAction, IInitialState } from "../models/data.model";

export const dragReducer = (state: IInitialState, action: IDispatchAction) => {
    switch (action.type) {
        case "SET_DRAGGING_CARD":
            return { ...state, draggingCard: action.payload };
        case "SET_DRAGGING_OVER":
            return { ...state, dragOverCard: action.payload };
        case "SET_DRAG_COMPLETE":
            return { ...state, isDragComplete: action.payload };
        case "CANCEL_OPERATIONS":
            return {
                isDragComplete: false,
                draggingCard: null,
                dragOverCard: null,
            };
        default:
            return state;
    }
};
