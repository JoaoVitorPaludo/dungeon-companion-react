import styled from "@emotion/styled";

type BadgeProps = {
  variant: "primary" | "secondary";
  size?: "small" | "medium" | "large";
};
export const Badge = styled.span<BadgeProps>`
  display: flex;
  align-items: center;
  background-color: ${(props) =>
    props.variant === "primary"
      ? props.theme["green-500"] + "20"
      : props.theme.secondary};
  color: ${(props) =>
    props.variant === "primary"
      ? props.theme["green-500"]
      : props.theme.foreground};
  height: ${(props) => {
    switch (props.size) {
      case "small":
        return "2.5rem";
      case "medium":
        return "3rem";
      case "large":
        return "3.5rem";
      default:
        return "3rem";
    }
  }};
  padding: ${(props) => {
    switch (props.size) {
      case "small":
        return "0.2rem 0.6rem";
      case "medium":
        return "0.4rem 0.8rem";
      case "large":
        return "0.6rem 1rem";
      default:
        return "0.4rem 0.8rem";
    }
  }}!important;
  font-size: ${(props) => {
    switch (props.size) {
      case "small":
        return "0.8rem";
      case "medium":
        return "1rem";
      case "large":
        return "1.2rem";
      default:
        return "1rem";
    }
  }} !important;
  border-radius: 0.5rem;
  font-weight: 600;
  border: 1px solid
    ${(props) =>
      props.variant === "primary"
        ? props.theme["green-500"]
        : props.theme.border};
`;
