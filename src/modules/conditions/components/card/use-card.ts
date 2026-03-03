import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { CardData } from "./card.interfaces";
import { getConditionsByIndex } from "../../../../controllers/conditions/conditions-controller";

export const useCard = () => {
  const url = new URL(window.location.href);
  const { t } = useTranslation("conditions");
  const { data, isLoading } = useQuery<CardData>({
    queryKey: ["dnd-conditions-detail"],
    queryFn: () => getConditionsByIndex(url.pathname.split("/").slice(-1)[0]),
  });

  return { data, isLoading, t, url };
};
