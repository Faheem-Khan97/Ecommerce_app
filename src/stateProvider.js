import React, { useContext, useReducer} from "react";


export const GlobalStateContext = React.createContext();

export const GlobalStateProvider = ({reducer, initialState, children}) => (
    <GlobalStateContext.Provider value={useReducer(reducer, initialState)}  >
        {children}
    </GlobalStateContext.Provider>
)


export const useStateValue = () => useContext(GlobalStateContext)