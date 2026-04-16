import styled from "@emotion/styled";
import type { ButtonComponentProps } from "./button-component.types";

export const ButtonComponentElement = styled.button<
  Pick<ButtonComponentProps, "variant">
>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  min-height: 2.75rem;
  padding: 0.65rem 1.1rem;
  border-radius: 0.4rem;
  border: 1px solid
    ${(props) =>
      props.variant === "primary"
        ? props.theme["primary-text-color"]
        : props.theme.border};
  background-color: ${(props) =>
    props.variant === "primary"
      ? props.theme["primary-text-color"]
      : props.theme.surface};
  color: ${(props) =>
    props.variant === "primary" ? props.theme.surface : props.theme.foreground};
  font-size: 0.92rem;
  font-weight: 600;
  letter-spacing: 0.01em;
  line-height: 1.2;
  cursor: pointer;
  transition:
    background-color 150ms ease,
    border-color 150ms ease,
    color 150ms ease,
    transform 150ms ease;

  &:hover {
    background-color: ${(props) =>
      props.variant === "primary"
        ? props.theme.foreground
        : props.theme["muted-background"]};
  }

  &:active {
    transform: scale(0.98);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:focus-visible {
    outline: 2px solid ${(props) => props.theme["green-500"]};
    outline-offset: 2px;
  }
`;
