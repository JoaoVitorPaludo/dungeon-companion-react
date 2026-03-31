import { useQuery } from "@tanstack/react-query";
import { getSkillByIndex } from "../../../../controllers/abilityScores/ability-scores-controller";
import { useTranslation } from "react-i18next";

export const useSkillAccordionContent = (skillIndex: string) => {
  const { t } = useTranslation("global");
  const { data, isLoading } = useQuery({
    queryKey: ["dnd-skill-detail", skillIndex],
    queryFn: () => getSkillByIndex(skillIndex),
  });

  return {
    data,
    isLoading,
    t,
  };
};
