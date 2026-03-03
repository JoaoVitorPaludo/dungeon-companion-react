import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { CardData } from "./card.interfaces";
import { getEquipmentCategoryByIndex } from "../../../../controllers/equipaments-categories/equipaments-categories-controller";

export const useCard = () => {
  const url = new URL(window.location.href);
  const { t } = useTranslation("equipmentsCategories");
  const { data, isLoading } = useQuery<CardData>({
    queryKey: ["dnd-equipments-detail"],
    queryFn: () =>
      getEquipmentCategoryByIndex(url.pathname.split("/").slice(-1)[0]),
  });

  return { data, isLoading, t, url };
};
