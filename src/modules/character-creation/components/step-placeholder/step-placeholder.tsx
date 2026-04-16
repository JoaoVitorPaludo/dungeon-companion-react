import * as S from "./step-placeholder.styles";
import type { StepPlaceholderProps } from "./step-placeholder.types";

export function StepPlaceholder({
  title,
  description,
}: StepPlaceholderProps) {
  return (
    <S.StepPlaceholderContainer>
      <S.StepPlaceholderTitle>{title}</S.StepPlaceholderTitle>
      <S.StepPlaceholderDescription>{description}</S.StepPlaceholderDescription>
    </S.StepPlaceholderContainer>
  );
}
