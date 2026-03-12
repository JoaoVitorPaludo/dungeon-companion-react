import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { CardData } from "./card.interfaces";
import { getRaceByIndex } from "../../../../controllers/races/races-controller";

export const useCard = () => {
  const url = new URL(window.location.href);
  const { t } = useTranslation("races");

  const { data, isLoading } = useQuery<CardData>({
    queryKey: ["dnd-races-detail"],
    queryFn: () => getRaceByIndex(url.pathname.split("/").slice(-1)[0]),
  });

  return {
    data,
    isLoading,

    t,
    url,
  };
};
