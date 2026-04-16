import { useTranslation } from "react-i18next";
import * as S from "./races-step.styles";
import type { Step01RaceSelectionProps } from "./races-step.types";

function formatSubraceDescription(
  description: string | string[] | undefined,
  notInformedText: string,
): string {
  if (!description) {
    return notInformedText;
  }

  if (Array.isArray(description)) {
    if (description.length === 0) {
      return notInformedText;
    }

    return description.join(" ");
  }

  return description;
}

function buildAbilityBonusLabel(abilityName: string, bonus: number): string {
  return `${abilityName} +${bonus}`;
}

function resolveRaceName(
  translatedName: string,
  fallbackName: string,
  raceIndex: string,
): string {
  if (translatedName === raceIndex) {
    return fallbackName;
  }

  return translatedName;
}

export function RacesStep({
  races,
  raceDetail,
  subraceDetails,
  selectedRaceIndex,
  selectedSubraceIndex,
  selectedSubrace,
  raceCardContentMap,
  defaultRaceCardContent,
  hasSubraces,
  isLoadingStepOne,
  hasStepOneError,
  handleSelectRace,
  handleSelectSubrace,
}: Step01RaceSelectionProps) {
  const { t } = useTranslation("characterCreation");
  const { t: tRaces } = useTranslation("races");
  const notInformedText = t("common.notInformed");

  return (
    <S.StepContentSection>
      {isLoadingStepOne && !hasStepOneError ? (
        <S.StepStateCard>{t("raceStep.loading")}</S.StepStateCard>
      ) : null}

      {hasStepOneError ? (
        <S.StepStateCard role="alert">{t("raceStep.error")}</S.StepStateCard>
      ) : null}

      {!isLoadingStepOne && races.length === 0 && !hasStepOneError ? (
        <S.StepStateCard>{t("raceStep.empty")}</S.StepStateCard>
      ) : null}

      <S.RaceCardsGrid>
        {races.map((race) => {
          const raceCardContent =
            raceCardContentMap[race.index] ?? defaultRaceCardContent;
          const translatedRaceName = resolveRaceName(
            tRaces(race.index),
            race.name,
            race.index,
          );

          return (
            <S.RaceCardButton
              isSelected={selectedRaceIndex === race.index}
              key={race.index}
              onClick={() => handleSelectRace(race.index)}
              type="button"
            >
              <S.RaceCardImageWrapper>
                <S.RaceCardImage
                  alt={t("raceStep.cardAlt", { name: translatedRaceName })}
                  loading="lazy"
                  src={raceCardContent.imageSrc}
                />
              </S.RaceCardImageWrapper>
              <S.RaceCardTitle>{translatedRaceName}</S.RaceCardTitle>
              <S.RaceCardDescription>
                {t(raceCardContent.descriptionKey)}
              </S.RaceCardDescription>
            </S.RaceCardButton>
          );
        })}
      </S.RaceCardsGrid>

      {hasSubraces ? (
        <S.SubraceSection>
          <S.SubraceTitle>{t("raceStep.selectSubraceTitle")}</S.SubraceTitle>
          <S.SubraceHelperText>
            {t("raceStep.selectSubraceHelper")}
          </S.SubraceHelperText>
          <S.SubraceGrid>
            {subraceDetails.map((subrace) => (
              <S.SubraceButton
                isSelected={selectedSubraceIndex === subrace.index}
                key={subrace.index}
                onClick={() => handleSelectSubrace(subrace.index)}
                type="button"
              >
                {subrace.name}
              </S.SubraceButton>
            ))}
          </S.SubraceGrid>
        </S.SubraceSection>
      ) : null}

      {raceDetail ? (
        <S.SelectedInfoPanel>
          <S.SelectedInfoHeader>
            <S.SelectedInfoTitle>
              {selectedSubrace
                ? t("raceStep.detail.titleWithSubrace", {
                    raceName: resolveRaceName(
                      tRaces(raceDetail.index),
                      raceDetail.name,
                      raceDetail.index,
                    ),
                    subraceName: selectedSubrace.name,
                  })
                : resolveRaceName(
                    tRaces(raceDetail.index),
                    raceDetail.name,
                    raceDetail.index,
                  )}
            </S.SelectedInfoTitle>
            <S.SelectedInfoDescription>
              {selectedSubrace
                ? formatSubraceDescription(selectedSubrace.desc, notInformedText)
                : raceDetail.language_desc}
            </S.SelectedInfoDescription>
          </S.SelectedInfoHeader>

          <S.SelectedQuickFactsGrid>
            <S.SelectedQuickFactCard>
              <S.SelectedQuickFactLabel>
                {t("raceStep.detail.quickFacts.speed")}
              </S.SelectedQuickFactLabel>
              <S.SelectedQuickFactValue>
                {t("raceStep.detail.speedValue", { value: raceDetail.speed })}
              </S.SelectedQuickFactValue>
            </S.SelectedQuickFactCard>
            <S.SelectedQuickFactCard>
              <S.SelectedQuickFactLabel>
                {t("raceStep.detail.quickFacts.size")}
              </S.SelectedQuickFactLabel>
              <S.SelectedQuickFactValue>
                {raceDetail.size}
              </S.SelectedQuickFactValue>
            </S.SelectedQuickFactCard>
            <S.SelectedQuickFactCard>
              <S.SelectedQuickFactLabel>
                {t("raceStep.detail.quickFacts.alignment")}
              </S.SelectedQuickFactLabel>
              <S.SelectedQuickFactValue>
                {raceDetail.alignment}
              </S.SelectedQuickFactValue>
            </S.SelectedQuickFactCard>
            <S.SelectedQuickFactCard>
              <S.SelectedQuickFactLabel>
                {t("raceStep.detail.quickFacts.age")}
              </S.SelectedQuickFactLabel>
              <S.SelectedQuickFactValue>
                {raceDetail.age}
              </S.SelectedQuickFactValue>
            </S.SelectedQuickFactCard>
          </S.SelectedQuickFactsGrid>

          <S.SelectedInfoColumns>
            <S.SelectedInfoSection>
              <S.SelectedInfoSectionTitle>
                {t("raceStep.detail.sections.abilityBonuses")}
              </S.SelectedInfoSectionTitle>
              <S.SelectedInfoTagList>
                {raceDetail.ability_bonuses.length === 0 ? (
                  <S.SelectedInfoTag>{notInformedText}</S.SelectedInfoTag>
                ) : (
                  raceDetail.ability_bonuses.map((abilityBonus) => (
                    <S.SelectedInfoTag key={abilityBonus.ability_score.index}>
                      {buildAbilityBonusLabel(
                        abilityBonus.ability_score.name,
                        abilityBonus.bonus,
                      )}
                    </S.SelectedInfoTag>
                  ))
                )}
              </S.SelectedInfoTagList>
            </S.SelectedInfoSection>

            <S.SelectedInfoSection>
              <S.SelectedInfoSectionTitle>
                {tRaces("languages")}
              </S.SelectedInfoSectionTitle>
              <S.SelectedInfoTagList>
                {raceDetail.languages.length === 0 ? (
                  <S.SelectedInfoTag>{notInformedText}</S.SelectedInfoTag>
                ) : (
                  raceDetail.languages.map((language) => (
                    <S.SelectedInfoTag key={language.index}>
                      {language.name}
                    </S.SelectedInfoTag>
                  ))
                )}
              </S.SelectedInfoTagList>
            </S.SelectedInfoSection>

            <S.SelectedInfoSection>
              <S.SelectedInfoSectionTitle>
                {t("raceStep.detail.sections.traits")}
              </S.SelectedInfoSectionTitle>
              <S.SelectedInfoTagList>
                {raceDetail.traits.length === 0 ? (
                  <S.SelectedInfoTag>{notInformedText}</S.SelectedInfoTag>
                ) : (
                  raceDetail.traits.map((trait) => (
                    <S.SelectedInfoTag key={trait.index}>
                      {trait.name}
                    </S.SelectedInfoTag>
                  ))
                )}
              </S.SelectedInfoTagList>
            </S.SelectedInfoSection>

            <S.SelectedInfoSection>
              <S.SelectedInfoSectionTitle>
                {t("raceStep.detail.sections.sizeDescription")}
              </S.SelectedInfoSectionTitle>
              <S.SelectedInfoParagraph>
                {raceDetail.size_description}
              </S.SelectedInfoParagraph>
            </S.SelectedInfoSection>
          </S.SelectedInfoColumns>
        </S.SelectedInfoPanel>
      ) : (
        <S.StepStateCard>
          {t("raceStep.selectionHint")}
        </S.StepStateCard>
      )}
    </S.StepContentSection>
  );
}
