import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { CardData } from "./card.interfaces";
import { getWeaponPropertyByIndex } from "../../../../controllers/weapon-properties/weapon-properties-controller";

export const useCard = () => {
  const url = new URL(window.location.href);
  const { t } = useTranslation("weaponProperties");

  const { data, isLoading } = useQuery<CardData>({
    queryKey: ["dnd-weapon-properties-detail"],
    queryFn: () =>
      getWeaponPropertyByIndex(url.pathname.split("/").slice(-1)[0]),
  });

  return {
    data,
    isLoading,
    t,
    url,
  };
};
