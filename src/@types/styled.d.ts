import "@emotion/react";
import { darkTheme } from "../styles/themes/default";

type ThemeType = typeof darkTheme;

declare module "@emotion/react" {
  export interface Theme extends ThemeType {}
}
