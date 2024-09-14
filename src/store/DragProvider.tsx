import { Reducer, useCallback, useMemo, useReducer } from "react";
import DragContext, { defaultState } from "./DragContext";
import {
    IDispatchAction,
    DragProviderProps,
    IInitialState,
} from "../models/model";
import { dragReducer } from "./dragUtils";

const DragProvider = (props: DragProviderProps) => {
    const initReducer = useCallback(() => defaultState, []);

    const [state, dispatch] = useReducer<
        Reducer<IInitialState, IDispatchAction>,
        IInitialState
    >(dragReducer, defaultState, initReducer);

    const contextValue = useMemo(
        () => ({ state, dispatch }),
        [state, dispatch]
    );
    return (
        <DragContext.Provider value={contextValue}>
            {props.children}
        </DragContext.Provider>
    );
};

export default DragProvider;
