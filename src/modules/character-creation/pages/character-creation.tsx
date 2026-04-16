import "@fontsource/cinzel/600.css";
import { ButtonComponent, SteppComponent } from "../../../components/ui";
import { StepPlaceholder } from "../components/step-placeholder/step-placeholder";
import * as S from "./character-creation.styles";
import { useCharacterCreation } from "./use-character-creation";
import { RacesStep } from "../components/races-step/races-step";

export function CharacterCreation() {
  const {
    activeStep,
    headerTitle,
    headerSubtitle,
    steps,
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
    rightButtonDisabled,
    leftButtonLabel,
    rightButtonLabel,
    handleSelectRace,
    handleSelectSubrace,
    handleLeftAction,
    handleRightAction,
  } = useCharacterCreation();

  return (
    <S.CharacterCreationContainer>
      <S.SteppContainer>
        <SteppComponent activeStep={activeStep} steps={steps} />
      </S.SteppContainer>

      <S.HeroHeader>
        <S.HeroTitle>{headerTitle}</S.HeroTitle>
        <S.HeroSubtitle>{headerSubtitle}</S.HeroSubtitle>
      </S.HeroHeader>

      {activeStep === 1 ? (
        <RacesStep
          defaultRaceCardContent={defaultRaceCardContent}
          handleSelectRace={handleSelectRace}
          handleSelectSubrace={handleSelectSubrace}
          hasStepOneError={hasStepOneError}
          hasSubraces={hasSubraces}
          isLoadingStepOne={isLoadingStepOne}
          raceCardContentMap={raceCardContentMap}
          raceDetail={raceDetail}
          races={races}
          selectedRaceIndex={selectedRaceIndex}
          selectedSubrace={selectedSubrace}
          selectedSubraceIndex={selectedSubraceIndex}
          subraceDetails={subraceDetails}
        />
      ) : (
        <StepPlaceholder
          description="Este passo foi reservado como placeholder e sera implementado na proxima entrega."
          title="Step 02 - Classe e informacoes"
        />
      )}

      <S.FooterActions>
        <ButtonComponent
          onClick={handleLeftAction}
          type="button"
          variant="secondary"
        >
          {leftButtonLabel}
        </ButtonComponent>
        <ButtonComponent
          disabled={rightButtonDisabled}
          onClick={handleRightAction}
          type="button"
          variant="primary"
        >
          {rightButtonLabel}
        </ButtonComponent>
      </S.FooterActions>
    </S.CharacterCreationContainer>
  );
}
