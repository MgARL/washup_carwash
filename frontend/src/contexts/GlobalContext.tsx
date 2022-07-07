import { Dispatch, SetStateAction, createContext } from "react";

interface GlobalContext{
    setLoggedIn? : Dispatch<SetStateAction<boolean>> 
}

export const GlobalContext = createContext<GlobalContext>({})