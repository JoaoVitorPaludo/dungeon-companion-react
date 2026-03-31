import * as S from "./styles";
interface BadgeProps {
  children?: React.ReactNode;
  color?: string;
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  onClick?: () => void;
}
export function BadgeComponent({
  children,
  color,
  variant = "primary",
  size = "medium",
  onClick,
}: BadgeProps) {
  return (
    <S.Badge
      variant={variant}
      style={{ backgroundColor: color }}
      size={size}
      onClick={onClick}
    >
      {children}
    </S.Badge>
  );
}
