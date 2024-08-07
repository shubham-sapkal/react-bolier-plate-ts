import { useContext } from "react";
import { GlobalContext } from "./GlobalContext"

const useGlobalContext = () => {
    return useContext(GlobalContext);
}

export default useGlobalContext;