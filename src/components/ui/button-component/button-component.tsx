import * as S from "./button-component.styles";
import type { ButtonComponentProps } from "./button-component.types";

export function ButtonComponent({
  children,
  variant = "primary",
  ...props
}: ButtonComponentProps) {
  return (
    <S.ButtonComponentElement variant={variant} {...props}>
      {children}
    </S.ButtonComponentElement>
  );
}
