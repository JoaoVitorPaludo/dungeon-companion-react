import * as S from "./styles";
import {
  cardVariants,
  listVariants,
} from "../../../commons/animations/variants";
import { AbilityScore, useAbilityScore } from "./use-ability-scores";
import { Loading3D } from "../../../commons/animations/d20-dice";
import {
  ABILITY_SCORES_FALLBACK_ICON,
  ABILITY_SCORES_ICONS,
} from "./ability-scores.constants";
import { ABILITY_SCORES_DETAIL_PATH } from "../../../app/routes/routes.constants";
export function AbilityScores() {
  const { data, isLoading, theme, t, navigate } = useAbilityScore();
  return (
    <S.AbilityScoresContainer
      key={String(isLoading)}
      variants={listVariants}
      initial="hidden"
      animate="visible"
    >
      {isLoading && (
        <S.AbilityScoresNoDataContainer>
          <Loading3D />
          Loading...
        </S.AbilityScoresNoDataContainer>
      )}
      {data?.map((item: AbilityScore) => {
        const Icon =
          ABILITY_SCORES_ICONS[item.index] ?? ABILITY_SCORES_FALLBACK_ICON;

        return (
          <S.AbilityScoresCardContainer
            key={item.index}
            variants={cardVariants}
            onClick={() =>
              navigate(ABILITY_SCORES_DETAIL_PATH.replace(":id", item.index))
            }
          >
            <Icon size={25} color={theme["green-500"]} />
            <span>{t(item.index)}</span>
          </S.AbilityScoresCardContainer>
        );
      })}
    </S.AbilityScoresContainer>
  );
}
