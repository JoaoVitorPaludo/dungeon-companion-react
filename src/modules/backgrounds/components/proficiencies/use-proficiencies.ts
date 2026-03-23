import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { getProficiencyByIndex } from "../../../../controllers/backgrounds/backgrounds-controller";

export const useProficiencyAccordionContent = (proficiencyIndex: string) => {
  const { t } = useTranslation("global");
  const { data, isLoading } = useQuery({
    queryKey: ["dnd-proficiency-detail", proficiencyIndex],
    queryFn: () =>
      getProficiencyByIndex(proficiencyIndex.replace("skill-", "")),
  });

  return {
    data,
    isLoading,
    t,
  };
};
