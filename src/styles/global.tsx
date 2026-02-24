import { Global, css } from "@emotion/react";

export const GlobalStyles = () => (
  <Global
    styles={(theme) => css`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        body {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
            "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
            "Helvetica Neue", sans-serif;
          /* background: ${theme.backgroundGradient}; */
          background: ${theme.backgroundGradient} !important;
        }
        .dark {
          background: ${theme.backgroundGradient} !important;
        }
        .light {
          background: ${theme.backgroundGradient} !important;
        }
      }
    `}
  />
);
