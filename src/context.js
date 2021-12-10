import { createContext } from "react";
const themes = {
  light: {
    name: "light",
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    name: "dark",
    foreground: "#ffffff",
    background: "#222222",
  },
};
const ThemeContext = createContext({
  theme: themes.dark,
  toggleTheme: () => {},
});
ThemeContext.displayName = "MyThemeContext";

export { ThemeContext, themes };
