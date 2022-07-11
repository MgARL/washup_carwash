import { Dispatch, SetStateAction, createContext } from "react";

interface GlobalContext {
  setLoggedIn?: Dispatch<SetStateAction<boolean>>;
  selectedServices?: any;
  setSelectedServices?: Dispatch<SetStateAction<any>>;
  selectedVehicles?: any;
  setSelectedVehicles?: Dispatch<SetStateAction<any>>;
  date?: Date | null;
  setDate?: Dispatch<SetStateAction<Date | null>>;
  time?: string;
  setTime?: Dispatch<SetStateAction<string>>;
}

export const GlobalContext = createContext<GlobalContext>({});
