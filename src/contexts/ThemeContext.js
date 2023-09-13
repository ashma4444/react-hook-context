import { createContext, useContext, useState } from "react";

const ThemeContext = createContext(null);

export default function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState("light-theme");

  const toggleTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
    return theme;
  };

  return (
    <>
      {/* ThemeContext vitra wrap vako sabai children le ThemeContext.Provider ko value use garna paucha  */}
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    </>
  );
}

// globally repeated function lai custom hook banaune
export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context)
    throw new Error("Theme context should be called inside context provider");
  return context;
};
