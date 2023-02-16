import { useContext } from "react";
import { ThemeContext } from "@contexts/ThemeContext";

const useTheme = () => {
  const themeProps = useContext(ThemeContext);
  if (!themeProps) {
    throw new Error("NO THEME");
  }
  return themeProps;
};

export default useTheme;
