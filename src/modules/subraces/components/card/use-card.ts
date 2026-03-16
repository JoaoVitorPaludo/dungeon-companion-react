import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { CardData } from "./card.interfaces";
import { getSubraceByIndex } from "../../../../controllers/subraces/subraces-controller";

export const useCard = () => {
  const url = new URL(window.location.href);
  const { t } = useTranslation("subraces");

  const { data, isLoading } = useQuery<CardData>({
    queryKey: ["dnd-subraces-detail"],
    queryFn: () => getSubraceByIndex(url.pathname.split("/").slice(-1)[0]),
  });

  return {
    data,
    isLoading,
    t,
    url,
  };
};
