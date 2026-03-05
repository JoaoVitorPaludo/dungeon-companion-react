import styled from "@emotion/styled";

type BadgeProps = {
  variant: "rarity" | "category";
};
export const Badge = styled.span<BadgeProps>`
  background-color: ${(props) =>
    props.variant === "rarity"
      ? props.theme["green-500"] + "20"
      : props.theme.secondary};
  color: ${(props) =>
    props.variant === "rarity"
      ? props.theme["green-500"]
      : props.theme.foreground};
  padding: 0.4rem 0.8rem;
  border-radius: 0.5rem;
  font-size: 0.9rem;
  font-weight: 600;
  border: 1px solid
    ${(props) =>
      props.variant === "rarity"
        ? props.theme["green-500"]
        : props.theme.border};
`;
