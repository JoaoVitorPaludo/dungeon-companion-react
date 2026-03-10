import * as S from "./styles";
interface BadgeProps {
  children?: React.ReactNode;
  color?: string;
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
}
export function BadgeComponent({
  children,
  color,
  variant = "primary",
  size = "medium",
}: BadgeProps) {
  return (
    <S.Badge variant={variant} style={{ backgroundColor: color }} size={size}>
      {children}
    </S.Badge>
  );
}
