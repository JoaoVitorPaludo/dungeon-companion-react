import styled from "@emotion/styled";
import { Tooltip } from "@radix-ui/themes";

export const TooltipContainer = styled(Tooltip)`
  &&& {
    background: ${(props) => props.theme.foreground} !important;
  }

  [data-theme="dark"] &&& {
    background: ${(props) => props.theme.foreground} !important;
  }

  /* Sobrescreve qualquer estilo do tema Radix */
  [data-radix-tooltip-content] {
    background: ${(props) => props.theme.foreground} !important;
  }
`;
