import { ThemeProvider } from "@emotion/react";
import { GlobalStyles } from "../styles/global";
import { darkTheme, lightTheme } from "../styles/themes/default";
import { Routes } from "./routes/routes";
import { Theme } from "@radix-ui/themes";
import { useAppStore } from "../store/use-app-store/use-app-store";

export function App() {
  const { theme } = useAppStore();

  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Theme appearance={theme === "dark" ? "dark" : "light"}>
        <Routes />
      </Theme>
    </ThemeProvider>
  );
}
