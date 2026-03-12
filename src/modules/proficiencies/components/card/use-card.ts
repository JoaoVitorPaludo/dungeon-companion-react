import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { CardData, ProficienciesCardProps } from "./card.interfaces";
import {
  getProficienciesByIndex,
  getProficienciesDetailsByUrl,
} from "../../../../controllers/proficiencies/proficiencies-controller";

export const useCard = () => {
  const url = new URL(window.location.href);
  const { t } = useTranslation("proficiencies");

  const { data, isLoading } = useQuery<CardData>({
    queryKey: ["dnd-proficiencies-detail"],
    queryFn: () =>
      getProficienciesByIndex(url.pathname.split("/").slice(-1)[0]),
  });

  const { data: equipmentData, isLoading: isLoadingEquipment } =
    useQuery<ProficienciesCardProps>({
      queryKey: ["dnd-proficiencies-equipment", data?.reference?.index],
      queryFn: () => getProficienciesDetailsByUrl(data!.reference.index),
      enabled: !!data?.reference?.index,
    });

  return {
    data,
    isLoading,
    equipmentData,
    isLoadingEquipment,
    t,
    url,
  };
};
