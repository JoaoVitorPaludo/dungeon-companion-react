import { useTranslation } from "react-i18next";
import * as S from "./classes-step.styles";
import type { ClassesStepProps } from "./classes-step.types";

function resolveClassName(
  translatedName: string,
  fallbackName: string,
  classIndex: string,
): string {
  if (translatedName === classIndex) {
    return fallbackName;
  }

  return translatedName;
}

export function ClassesStep({
  classes,
  classDetail,
  selectedClassIndex,
  classCardContentMap,
  defaultClassCardContent,
  isLoadingStepTwo,
  hasStepTwoError,
  handleSelectClass,
}: ClassesStepProps) {
  const { t } = useTranslation("classes");

  return (
    <S.StepContentSection>
      {isLoadingStepTwo && !hasStepTwoError ? (
        <S.StepStateCard>Carregando classes...</S.StepStateCard>
      ) : null}

      {hasStepTwoError ? (
        <S.StepStateCard role="alert">
          Nao foi possivel carregar os dados de classe. Tente novamente.
        </S.StepStateCard>
      ) : null}

      {!isLoadingStepTwo && classes.length === 0 && !hasStepTwoError ? (
        <S.StepStateCard>Nenhuma classe disponivel no momento.</S.StepStateCard>
      ) : null}

      <S.ClassCardsGrid>
        {classes.map((classItem) => {
          const classCardContent =
            classCardContentMap[classItem.index] ?? defaultClassCardContent;
          const translatedClassName = resolveClassName(
            t(classItem.index),
            classItem.name,
            classItem.index,
          );

          return (
            <S.ClassCardButton
              isSelected={selectedClassIndex === classItem.index}
              key={classItem.index}
              onClick={() => handleSelectClass(classItem.index)}
              type="button"
            >
              <S.ClassCardImageWrapper>
                <S.ClassCardImage
                  alt={`Ilustracao da classe ${translatedClassName}`}
                  loading="lazy"
                  src={classCardContent.imageSrc}
                />
              </S.ClassCardImageWrapper>
              <S.ClassCardTitle>{translatedClassName}</S.ClassCardTitle>
              <S.ClassCardSubtitle>{classCardContent.subtitle}</S.ClassCardSubtitle>
            </S.ClassCardButton>
          );
        })}
      </S.ClassCardsGrid>

      {classDetail ? (
        <S.SelectedInfoPanel>
          <S.SelectedInfoHeader>
            <S.SelectedInfoTitle>
              {resolveClassName(t(classDetail.index), classDetail.name, classDetail.index)}
            </S.SelectedInfoTitle>
            <S.SelectedInfoDescription>
              {(classCardContentMap[classDetail.index] ?? defaultClassCardContent).subtitle}
            </S.SelectedInfoDescription>
          </S.SelectedInfoHeader>

          <S.SelectedQuickFactsGrid>
            <S.SelectedQuickFactCard>
              <S.SelectedQuickFactLabel>Dado de vida</S.SelectedQuickFactLabel>
              <S.SelectedQuickFactValue>1d{classDetail.hit_die}</S.SelectedQuickFactValue>
            </S.SelectedQuickFactCard>
            <S.SelectedQuickFactCard>
              <S.SelectedQuickFactLabel>Resistencias</S.SelectedQuickFactLabel>
              <S.SelectedQuickFactValue>
                {classDetail.saving_throws.length}
              </S.SelectedQuickFactValue>
            </S.SelectedQuickFactCard>
            <S.SelectedQuickFactCard>
              <S.SelectedQuickFactLabel>Proficiencias</S.SelectedQuickFactLabel>
              <S.SelectedQuickFactValue>
                {classDetail.proficiencies.length}
              </S.SelectedQuickFactValue>
            </S.SelectedQuickFactCard>
            <S.SelectedQuickFactCard>
              <S.SelectedQuickFactLabel>Subclasses</S.SelectedQuickFactLabel>
              <S.SelectedQuickFactValue>{classDetail.subclasses.length}</S.SelectedQuickFactValue>
            </S.SelectedQuickFactCard>
          </S.SelectedQuickFactsGrid>

          <S.SelectedInfoColumns>
            <S.SelectedInfoSection>
              <S.SelectedInfoSectionTitle>Testes de resistencia</S.SelectedInfoSectionTitle>
              <S.SelectedInfoTagList>
                {classDetail.saving_throws.length === 0 ? (
                  <S.SelectedInfoTag>Nao informado</S.SelectedInfoTag>
                ) : (
                  classDetail.saving_throws.map((savingThrow) => (
                    <S.SelectedInfoTag key={savingThrow.index}>
                      {savingThrow.name}
                    </S.SelectedInfoTag>
                  ))
                )}
              </S.SelectedInfoTagList>
            </S.SelectedInfoSection>

            <S.SelectedInfoSection>
              <S.SelectedInfoSectionTitle>Proficiencias</S.SelectedInfoSectionTitle>
              <S.SelectedInfoTagList>
                {classDetail.proficiencies.length === 0 ? (
                  <S.SelectedInfoTag>Nao informado</S.SelectedInfoTag>
                ) : (
                  classDetail.proficiencies.map((proficiency) => (
                    <S.SelectedInfoTag key={proficiency.index}>
                      {proficiency.name}
                    </S.SelectedInfoTag>
                  ))
                )}
              </S.SelectedInfoTagList>
            </S.SelectedInfoSection>

            <S.SelectedInfoSection>
              <S.SelectedInfoSectionTitle>Escolhas de proficiencia</S.SelectedInfoSectionTitle>
              <S.SelectedInfoList>
                {classDetail.proficiency_choices.length === 0 ? (
                  <li>Nao informado</li>
                ) : (
                  classDetail.proficiency_choices.map(
                    (proficiencyChoice, index) => (
                      <li key={`${proficiencyChoice.desc}-${index}`}>
                        {proficiencyChoice.desc}
                      </li>
                    ),
                  )
                )}
              </S.SelectedInfoList>
            </S.SelectedInfoSection>

            <S.SelectedInfoSection>
              <S.SelectedInfoSectionTitle>Subclasses</S.SelectedInfoSectionTitle>
              <S.SelectedInfoTagList>
                {classDetail.subclasses.length === 0 ? (
                  <S.SelectedInfoTag>Nao informado</S.SelectedInfoTag>
                ) : (
                  classDetail.subclasses.map((subclass) => (
                    <S.SelectedInfoTag key={subclass.index}>
                      {subclass.name}
                    </S.SelectedInfoTag>
                  ))
                )}
              </S.SelectedInfoTagList>
            </S.SelectedInfoSection>
          </S.SelectedInfoColumns>
        </S.SelectedInfoPanel>
      ) : (
        <S.StepStateCard>
          Selecione uma classe para exibir os detalhes e definir seu estilo.
        </S.StepStateCard>
      )}
    </S.StepContentSection>
  );
}
