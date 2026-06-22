import { createContext, useContext, useReducer } from "react";

const SettingsContext = createContext();

const initialState = {
  theme: "light",
  view: "grid",
  category: "",
};
function settingsReducer(state, action) {
  switch (action.type) {
    case "TOGGLE_THEME":
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light",
      };

    case "SET_GRID":
      return {
        ...state,
        view: "grid",
      };

    case "SET_LIST":
      return {
        ...state,
        view: "list",
      };

    case "SET_CATEGORY":
      return {
        ...state,
        category: action.payload,
      };
    default:
      return state;
  }
}

export function SettingsProvider({ children }) {
  const [state, dispatch] = useReducer(settingsReducer, initialState);

  return (
    <SettingsContext.Provider value={{ state, dispatch }}>
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  return useContext(SettingsContext);
}
