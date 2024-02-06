import { useContext, useReducer, createContext } from "react";
const initstate = {
  selectedtype: 0,
};
const _reducer = (state: any, action: { type: any; payload: any }) => {
  switch (action.type) {
    case "Edit":
      return {
        ...state,
        selectedtype : action.payload
      };
    default:
      return state;
  }
};
export const appflow_Handller = createContext<any | undefined>(undefined);
const AppflowContextProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(_reducer, initstate);
  return (
    <appflow_Handller.Provider value={{ state, dispatch }}>
      {children}
    </appflow_Handller.Provider>
  );
};
export default AppflowContextProvider;
