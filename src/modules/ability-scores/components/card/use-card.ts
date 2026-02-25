import { useQuery } from "@tanstack/react-query";
import { getAbilityScoreByIndex } from "../../../../controllers/abilityScores/ability-scores-controller";
import { useTranslation } from "react-i18next";

interface SkillsProps {
  index: string;
  name: string;
  url: string;
}
interface CardData {
  desc: string[];
  index: string;
  skills: SkillsProps[];
}
export const useCard = () => {
  const url = new URL(window.location.href);
  const { t } = useTranslation("abilityScores");
  const { data, isLoading } = useQuery<CardData>({
    queryKey: ["dnd-ability-score-detail"],
    queryFn: () => getAbilityScoreByIndex(url.pathname.split("/").slice(-1)[0]),
  });

  return { data, isLoading, t, url };
};
