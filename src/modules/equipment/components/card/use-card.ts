import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { CardData } from "./card.interfaces";
import { getEquipmentByIndex } from "../../../../controllers/equipment/equipment-controller";

export const useCard = () => {
  const url = new URL(window.location.href);
  const { t } = useTranslation("equipments");
  const { data, isLoading } = useQuery<CardData>({
    queryKey: ["dnd-equipments-detail"],
    queryFn: () => getEquipmentByIndex(url.pathname.split("/").slice(-1)[0]),
  });

  return { data, isLoading, t, url };
};
