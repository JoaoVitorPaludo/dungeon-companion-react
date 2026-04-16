import * as S from "./stepp-component.styles";
import type { SteppComponentProps } from "./stepp-component.types";

export function SteppComponent({
  activeStep,
  steps,
}: SteppComponentProps) {
  return (
    <S.SteppComponentContainer aria-label="Etapas da criação de personagem">
      <S.SteppComponentList>
        {steps.map((step) => (
          <S.SteppComponentItem
            isActive={step.id === activeStep}
            isDone={step.id < activeStep}
            key={step.id}
          >
            <S.SteppComponentIndex>{String(step.id).padStart(2, "0")}</S.SteppComponentIndex>
            <S.SteppComponentLabel>{step.label}</S.SteppComponentLabel>
          </S.SteppComponentItem>
        ))}
      </S.SteppComponentList>
    </S.SteppComponentContainer>
  );
}
