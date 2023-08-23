import { PropsWithChildren, useState } from "react";
import { ThemeProvider } from "styled-components";
import { createContext } from "react";
import checkTheme from "./helper/checkTheme";

// eslint-disable-next-line react-refresh/only-export-components
export enum COLOR_TYPES {
  // Theme based colors
  PRIMARY_BACKGROUND = "PRIMARY_BACKGROUND",
  SECONDARY_BACKGROUND = "SECONDARY_BACKGROUND",
  SECONDARY_TEXT = "SECONDARY_TEXT",
  PRIMARY_TEXT = "PRIMARY_TEXT",
  MAIN_COLOR = "MAIN_COLOR",
}

export type Theme = Record<COLOR_TYPES, string>;

const darkTheme: Theme = {
  [COLOR_TYPES.PRIMARY_BACKGROUND]: "#2E3139",
  [COLOR_TYPES.SECONDARY_BACKGROUND]: "#22252D",
  [COLOR_TYPES.PRIMARY_TEXT]: "#fefefe",
  [COLOR_TYPES.SECONDARY_TEXT]: "#4E535F",
  [COLOR_TYPES.MAIN_COLOR]: "#38B432",
};

const lightTheme: Theme = {
  [COLOR_TYPES.PRIMARY_BACKGROUND]: "#FFFFFF",
  [COLOR_TYPES.SECONDARY_BACKGROUND]: "#F0F3F2",
  [COLOR_TYPES.SECONDARY_TEXT]: "#5C6C75",
  [COLOR_TYPES.PRIMARY_TEXT]: "#000000",
  [COLOR_TYPES.MAIN_COLOR]: "#38B432",
};

const theme = {
  dark: darkTheme,
  light: lightTheme,
};

type ThemeContextType = {
  mode: string;
  setMode: React.Dispatch<React.SetStateAction<string>>;
};

export const ThemeContext = createContext<ThemeContextType>({
  mode: checkTheme(),
  setMode() {},
});

export const ThemeBuilder = (props: PropsWithChildren) => {
  const [mode, setMode] = useState<string>(checkTheme());

  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      <ThemeProvider theme={mode === "dark" ? theme.dark : theme.light}>
        {props.children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
