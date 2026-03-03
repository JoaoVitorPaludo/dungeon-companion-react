import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { CardData } from "./card.interfaces";
import { getFeatsByIndex } from "../../../../controllers/feats/feats-controller";

export const useCard = () => {
  const url = new URL(window.location.href);
  const { t } = useTranslation("classes");
  const { data, isLoading } = useQuery<CardData>({
    queryKey: ["dnd-classes-detail"],
    queryFn: () => getFeatsByIndex(url.pathname.split("/").slice(-1)[0]),
  });

  return { data, isLoading, t, url };
};
