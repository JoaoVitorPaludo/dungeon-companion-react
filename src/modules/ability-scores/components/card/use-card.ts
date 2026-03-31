import { useQuery } from "@tanstack/react-query";
import { getAbilityScoreByIndex } from "../../../../controllers/abilityScores/ability-scores-controller";
import { useTranslation } from "react-i18next";

export const useCard = () => {
  const url = new URL(window.location.href);
  const { t } = useTranslation("abilityScores");
  const { t: tSkills } = useTranslation("skills");

  const { data, isLoading } = useQuery<AbilityScoreCardData>({
    queryKey: ["dnd-ability-score-detail"],
    queryFn: () => getAbilityScoreByIndex(url.pathname.split("/").slice(-1)[0]),
  });

  return {
    data,
    isLoading,
    t,
    url,
    tSkills,
  };
};
