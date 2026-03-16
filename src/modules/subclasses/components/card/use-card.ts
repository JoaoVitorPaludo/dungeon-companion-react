import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { CardData } from "./card.interfaces";
import { getSubclassByIndex } from "../../../../controllers/subclasses/subclasses-controller";

export const useCard = () => {
  const url = new URL(window.location.href);
  const { t } = useTranslation("subclasses");

  const { data, isLoading } = useQuery<CardData>({
    queryKey: ["dnd-subclasses-detail"],
    queryFn: () => getSubclassByIndex(url.pathname.split("/").slice(-1)[0]),
  });

  return {
    data,
    isLoading,
    t,
    url,
  };
};
