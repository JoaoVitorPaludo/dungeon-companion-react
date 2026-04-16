import * as S from "./races-step.styles";
import type { Step01RaceSelectionProps } from "./races-step.types";

function formatSubraceDescription(
  description: string | string[] | undefined,
): string {
  if (!description) {
    return "Nao informado";
  }

  if (Array.isArray(description)) {
    if (description.length === 0) {
      return "Nao informado";
    }

    return description.join(" ");
  }

  return description;
}

function buildAbilityBonusLabel(abilityName: string, bonus: number): string {
  return `${abilityName} +${bonus}`;
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
  return (
    <S.StepContentSection>
      {isLoadingStepOne && !hasStepOneError ? (
        <S.StepStateCard>Carregando racas e subracas...</S.StepStateCard>
      ) : null}

      {hasStepOneError ? (
        <S.StepStateCard role="alert">
          Nao foi possivel carregar os dados de raca. Tente novamente.
        </S.StepStateCard>
      ) : null}

      {!isLoadingStepOne && races.length === 0 && !hasStepOneError ? (
        <S.StepStateCard>Nenhuma raca disponivel no momento.</S.StepStateCard>
      ) : null}

      <S.RaceCardsGrid>
        {races.map((race) => {
          const raceCardContent =
            raceCardContentMap[race.index] ?? defaultRaceCardContent;

          return (
            <S.RaceCardButton
              isSelected={selectedRaceIndex === race.index}
              key={race.index}
              onClick={() => handleSelectRace(race.index)}
              type="button"
            >
              <S.RaceCardImageWrapper>
                <S.RaceCardImage
                  alt={`Ilustracao da raca ${race.name}`}
                  loading="lazy"
                  src={raceCardContent.imageSrc}
                />
              </S.RaceCardImageWrapper>
              <S.RaceCardTitle>{race.name}</S.RaceCardTitle>
              <S.RaceCardDescription>
                {raceCardContent.description}
              </S.RaceCardDescription>
            </S.RaceCardButton>
          );
        })}
      </S.RaceCardsGrid>

      {hasSubraces ? (
        <S.SubraceSection>
          <S.SubraceTitle>Selecione uma subraca</S.SubraceTitle>
          <S.SubraceHelperText>
            Esta escolha e obrigatoria para continuar para o proximo passo.
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
                ? `${raceDetail.name} - ${selectedSubrace.name}`
                : raceDetail.name}
            </S.SelectedInfoTitle>
            <S.SelectedInfoDescription>
              {selectedSubrace
                ? formatSubraceDescription(selectedSubrace.desc)
                : raceDetail.language_desc}
            </S.SelectedInfoDescription>
          </S.SelectedInfoHeader>

          <S.SelectedQuickFactsGrid>
            <S.SelectedQuickFactCard>
              <S.SelectedQuickFactLabel>Velocidade</S.SelectedQuickFactLabel>
              <S.SelectedQuickFactValue>
                {raceDetail.speed} ft
              </S.SelectedQuickFactValue>
            </S.SelectedQuickFactCard>
            <S.SelectedQuickFactCard>
              <S.SelectedQuickFactLabel>Tamanho</S.SelectedQuickFactLabel>
              <S.SelectedQuickFactValue>
                {raceDetail.size}
              </S.SelectedQuickFactValue>
            </S.SelectedQuickFactCard>
            <S.SelectedQuickFactCard>
              <S.SelectedQuickFactLabel>Alinhamento</S.SelectedQuickFactLabel>
              <S.SelectedQuickFactValue>
                {raceDetail.alignment}
              </S.SelectedQuickFactValue>
            </S.SelectedQuickFactCard>
            <S.SelectedQuickFactCard>
              <S.SelectedQuickFactLabel>Idade</S.SelectedQuickFactLabel>
              <S.SelectedQuickFactValue>
                {raceDetail.age}
              </S.SelectedQuickFactValue>
            </S.SelectedQuickFactCard>
          </S.SelectedQuickFactsGrid>

          <S.SelectedInfoColumns>
            <S.SelectedInfoSection>
              <S.SelectedInfoSectionTitle>
                Bonus de atributo
              </S.SelectedInfoSectionTitle>
              <S.SelectedInfoTagList>
                {raceDetail.ability_bonuses.length === 0 ? (
                  <S.SelectedInfoTag>Nao informado</S.SelectedInfoTag>
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
              <S.SelectedInfoSectionTitle>Idiomas</S.SelectedInfoSectionTitle>
              <S.SelectedInfoTagList>
                {raceDetail.languages.length === 0 ? (
                  <S.SelectedInfoTag>Nao informado</S.SelectedInfoTag>
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
                Tracos raciais
              </S.SelectedInfoSectionTitle>
              <S.SelectedInfoTagList>
                {raceDetail.traits.length === 0 ? (
                  <S.SelectedInfoTag>Nao informado</S.SelectedInfoTag>
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
                Descricao de tamanho
              </S.SelectedInfoSectionTitle>
              <S.SelectedInfoParagraph>
                {raceDetail.size_description}
              </S.SelectedInfoParagraph>
            </S.SelectedInfoSection>
          </S.SelectedInfoColumns>
        </S.SelectedInfoPanel>
      ) : (
        <S.StepStateCard>
          Selecione uma raca para exibir os detalhes e destravar sua origem.
        </S.StepStateCard>
      )}
    </S.StepContentSection>
  );
}
