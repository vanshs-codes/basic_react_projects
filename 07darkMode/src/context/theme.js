import { createContext, useContext } from "react";

export const themeContext = createContext({
    themeMode: "light",
    switchTheme: () => {}
});

export const ThemeProvider = themeContext.Provider;

export default function useTheme () {
    return useContext(themeContext);
};