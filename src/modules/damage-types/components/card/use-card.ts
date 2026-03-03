import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { DamageTypeCardData } from "./card.interfaces";
import { getDamageTypesByIndex } from "../../../../controllers/damageTypes/damage-types-controller";

export const useCard = () => {
  const url = new URL(window.location.href);
  const { t } = useTranslation("damageTypes");

  const { data, isLoading } = useQuery<DamageTypeCardData>({
    queryKey: ["dnd-damage-types-detail"],
    queryFn: () => getDamageTypesByIndex(url.pathname.split("/").slice(-1)[0]),
  });

  return { data, isLoading, t, url };
};
