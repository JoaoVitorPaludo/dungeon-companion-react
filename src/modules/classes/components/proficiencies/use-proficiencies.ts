import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { getProficiencyByEquipmentIndex } from "../../../../controllers/classes/classes-controller";
import { useNavigate } from "react-router";

interface ProficiencyProps {
  index: string;
  name: string;
  equipment: {
    index: string;
    name: string;
    url: string;
  }[];
}
export const useProficiencyAccordionContent = (proficiencyIndex: string) => {
  const { t } = useTranslation("global");
  const navigate = useNavigate();
  const { data, isLoading } = useQuery<ProficiencyProps>({
    queryKey: ["dnd-proficiency-equipment-detail", proficiencyIndex],
    queryFn: () => getProficiencyByEquipmentIndex(proficiencyIndex),
    retry: 1,
  });

  return {
    data,
    isLoading,
    t,
    navigate,
  };
};
