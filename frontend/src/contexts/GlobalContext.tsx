import { createContext } from "react";

import { GlobalContextInterface } from "../interfaces_types/interfaces";

export const GlobalContext = createContext<GlobalContextInterface>({
  date: null,
});
