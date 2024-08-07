import { createContext } from "react";


// TODO: Define context value here
export const GlobalContext = createContext({

})

export const GlobalContextProvider = ({children}) => {

    // TODO: Define All Context States Here


    // TODO: Define Value Type for Context
    const value = {

    }

    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )

}