import { ThemeProvider } from "@emotion/react";
import { GlobalStyles } from "../styles/global";
import { defaultTheme } from "../styles/themes/default";
import { Routes } from "./routes/routes";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  );
}
