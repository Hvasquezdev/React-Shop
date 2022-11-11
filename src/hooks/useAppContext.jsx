import React from "react";
import { AppContext } from "../context/appContext";

function useAppContext() {
  return React.useContext(AppContext);
}

export default useAppContext;
