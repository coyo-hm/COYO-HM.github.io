import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";

interface ThemeContextPropsType {
  isDarkTheme: boolean;
  setIsDarkTheme: Dispatch<SetStateAction<boolean>>;
}

export const ThemeContext = createContext<ThemeContextPropsType | null>(null);

interface ThemeProviderType {
  children: any;
}

const ThemeProvider = ({ children }: ThemeProviderType) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setIsDarkTheme(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkTheme(false);
      document.documentElement.classList.remove("dark");
    }
    // return () => localStorage.removeItem("theme");
  }, []);

  return (
    <ThemeContext.Provider value={{ isDarkTheme, setIsDarkTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
