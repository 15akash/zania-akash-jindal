import React from "react";
import { IContext, IDispatchAction, IInitialState } from "../models/data.model";

export const defaultState: IInitialState = {
    draggingCard: null,
    dragOverCard: null,
    dragCompleteCard: false,
};

const context: IContext = {
    state: defaultState,
    dispatch: (item: IDispatchAction) => {},
};

const DragContext = React.createContext(context);

export default DragContext;
