import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { getRulesSectionIndex } from "../../../../controllers/rules/rules-controller";
import { SubsectionDetail } from "../card/card.interfaces";

export const useSubsectionsAccordionContent = (subSectionsIndex: string) => {
  const { t } = useTranslation("global");
  const { data, isLoading } = useQuery<SubsectionDetail>({
    queryKey: ["dnd-rule-section-detail", subSectionsIndex],
    queryFn: () => getRulesSectionIndex(subSectionsIndex),
    retry: 1,
  });

  return {
    data,
    isLoading,
    t,
  };
};
