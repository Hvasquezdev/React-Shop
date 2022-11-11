import React, { createContext } from "react";
import useInitialState from "../hooks/useInitialState";

const AppContext = createContext();

function AppProvider({ children }) {
  const state = useInitialState();

  return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
}

export { AppContext, AppProvider };
