import React, { useContext, createContext } from "react";

const ThemeContext = createContext("light");

// Môže byť aj takýto Context: (celkové globálne nastavenia)
/* const useContext = createContext({
    name: "David",
    id: "123",
    profilePicture: ".."
}) */

function ThemeContextProvider({ children }) {
  return <ThemeContext.Provider value="light">{children}</ThemeContext.Provider>;
}

export {ThemeContext, ThemeContextProvider};