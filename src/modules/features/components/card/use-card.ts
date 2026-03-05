import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { CardData } from "./card.interfaces";
import { getFeaturesByIndex } from "../../../../controllers/features/features-controller";

export const useCard = () => {
  const url = new URL(window.location.href);
  const { t } = useTranslation("features");
  const { data, isLoading } = useQuery<CardData>({
    queryKey: ["dnd-features-detail"],
    queryFn: () => getFeaturesByIndex(url.pathname.split("/").slice(-1)[0]),
  });

  return { data, isLoading, t, url };
};
