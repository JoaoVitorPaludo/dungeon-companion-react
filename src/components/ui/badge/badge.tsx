import * as S from "./styles";
interface BadgeProps {
  children?: React.ReactNode;
  color?: string;
  variant?: "rarity" | "category";
}
export function BadgeComponent({
  children,
  color,
  variant = "category",
}: BadgeProps) {
  return (
    <S.Badge variant={variant} style={{ backgroundColor: color }}>
      {children}
    </S.Badge>
  );
}
