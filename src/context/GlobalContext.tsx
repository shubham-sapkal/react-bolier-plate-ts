import { createContext, FC } from "react";
import { IContextPropsType } from "./interfaces";


// TODO: Define Of All Context Type Here
interface IGlobalContextType {

}

// TODO: Define context value here
export const GlobalContext = createContext<IGlobalContextType>({

})

export const GlobalContextProvider: FC<IContextPropsType> = ({children}) => {

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