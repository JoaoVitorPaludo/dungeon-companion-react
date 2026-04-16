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
  const { t: tCharacterCreation } = useTranslation("characterCreation");
  const notInformedText = tCharacterCreation("common.notInformed");

  return (
    <S.StepContentSection>
      {isLoadingStepTwo && !hasStepTwoError ? (
        <S.StepStateCard>{tCharacterCreation("classStep.loading")}</S.StepStateCard>
      ) : null}

      {hasStepTwoError ? (
        <S.StepStateCard role="alert">
          {tCharacterCreation("classStep.error")}
        </S.StepStateCard>
      ) : null}

      {!isLoadingStepTwo && classes.length === 0 && !hasStepTwoError ? (
        <S.StepStateCard>{tCharacterCreation("classStep.empty")}</S.StepStateCard>
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
                  alt={tCharacterCreation("classStep.cardAlt", {
                    name: translatedClassName,
                  })}
                  loading="lazy"
                  src={classCardContent.imageSrc}
                />
              </S.ClassCardImageWrapper>
              <S.ClassCardTitle>{translatedClassName}</S.ClassCardTitle>
              <S.ClassCardSubtitle>
                {tCharacterCreation(classCardContent.subtitleKey)}
              </S.ClassCardSubtitle>
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
              {tCharacterCreation(
                (
                  classCardContentMap[classDetail.index] ??
                  defaultClassCardContent
                ).subtitleKey,
              )}
            </S.SelectedInfoDescription>
          </S.SelectedInfoHeader>

          <S.SelectedQuickFactsGrid>
            <S.SelectedQuickFactCard>
              <S.SelectedQuickFactLabel>
                {tCharacterCreation("classStep.detail.quickFacts.hitDice")}
              </S.SelectedQuickFactLabel>
              <S.SelectedQuickFactValue>
                {tCharacterCreation("classStep.detail.hitDiceValue", {
                  value: classDetail.hit_die,
                })}
              </S.SelectedQuickFactValue>
            </S.SelectedQuickFactCard>
            <S.SelectedQuickFactCard>
              <S.SelectedQuickFactLabel>
                {tCharacterCreation("classStep.detail.quickFacts.savingThrows")}
              </S.SelectedQuickFactLabel>
              <S.SelectedQuickFactValue>
                {classDetail.saving_throws.length}
              </S.SelectedQuickFactValue>
            </S.SelectedQuickFactCard>
            <S.SelectedQuickFactCard>
              <S.SelectedQuickFactLabel>
                {tCharacterCreation("classStep.detail.quickFacts.proficiencies")}
              </S.SelectedQuickFactLabel>
              <S.SelectedQuickFactValue>
                {classDetail.proficiencies.length}
              </S.SelectedQuickFactValue>
            </S.SelectedQuickFactCard>
            <S.SelectedQuickFactCard>
              <S.SelectedQuickFactLabel>
                {tCharacterCreation("classStep.detail.quickFacts.subclasses")}
              </S.SelectedQuickFactLabel>
              <S.SelectedQuickFactValue>{classDetail.subclasses.length}</S.SelectedQuickFactValue>
            </S.SelectedQuickFactCard>
          </S.SelectedQuickFactsGrid>

          <S.SelectedInfoColumns>
            <S.SelectedInfoSection>
              <S.SelectedInfoSectionTitle>{t("saving_throws")}</S.SelectedInfoSectionTitle>
              <S.SelectedInfoTagList>
                {classDetail.saving_throws.length === 0 ? (
                  <S.SelectedInfoTag>{notInformedText}</S.SelectedInfoTag>
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
              <S.SelectedInfoSectionTitle>{t("proficiencies")}</S.SelectedInfoSectionTitle>
              <S.SelectedInfoTagList>
                {classDetail.proficiencies.length === 0 ? (
                  <S.SelectedInfoTag>{notInformedText}</S.SelectedInfoTag>
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
              <S.SelectedInfoSectionTitle>{t("proficiencies_choices")}</S.SelectedInfoSectionTitle>
              <S.SelectedInfoList>
                {classDetail.proficiency_choices.length === 0 ? (
                  <li>{notInformedText}</li>
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
              <S.SelectedInfoSectionTitle>{t("subclasses")}</S.SelectedInfoSectionTitle>
              <S.SelectedInfoTagList>
                {classDetail.subclasses.length === 0 ? (
                  <S.SelectedInfoTag>{notInformedText}</S.SelectedInfoTag>
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
          {tCharacterCreation("classStep.selectionHint")}
        </S.StepStateCard>
      )}
    </S.StepContentSection>
  );
}
