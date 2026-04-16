import "@fontsource/cinzel/600.css";
import { useTranslation } from "react-i18next";
import { ButtonComponent, SteppComponent } from "../../../components/ui";
import { StepPlaceholder } from "../components/step-placeholder/step-placeholder";
import * as S from "./character-creation.styles";
import { useCharacterCreation } from "./use-character-creation";
import { RacesStep } from "../components/races-step/races-step";
import { ClassesStep } from "../components/classes-step/classes-step";

export function CharacterCreation() {
  const { t } = useTranslation("characterCreation");
  const {
    activeStep,
    headerTitle,
    headerSubtitle,
    steps,
    races,
    raceDetail,
    subraceDetails,
    classes,
    classDetail,
    selectedRaceIndex,
    selectedSubraceIndex,
    selectedSubrace,
    selectedClassIndex,
    raceCardContentMap,
    defaultRaceCardContent,
    classCardContentMap,
    defaultClassCardContent,
    hasSubraces,
    isLoadingStepOne,
    hasStepOneError,
    isLoadingStepTwo,
    hasStepTwoError,
    rightButtonDisabled,
    leftButtonLabel,
    rightButtonLabel,
    handleSelectRace,
    handleSelectSubrace,
    handleSelectClass,
    handleLeftAction,
    handleRightAction,
  } = useCharacterCreation();

  const currentStepLabel =
    steps.find((step) => step.id === activeStep)?.label ??
    t("placeholders.nextStepFallback");
  const currentStepNumber = String(activeStep).padStart(2, "0");

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
      ) : activeStep === 2 ? (
        <ClassesStep
          classCardContentMap={classCardContentMap}
          classDetail={classDetail}
          classes={classes}
          defaultClassCardContent={defaultClassCardContent}
          handleSelectClass={handleSelectClass}
          hasStepTwoError={hasStepTwoError}
          isLoadingStepTwo={isLoadingStepTwo}
          selectedClassIndex={selectedClassIndex}
        />
      ) : (
        <StepPlaceholder
          description={t("placeholders.description")}
          title={t("placeholders.title", {
            label: currentStepLabel,
            step: currentStepNumber,
          })}
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
