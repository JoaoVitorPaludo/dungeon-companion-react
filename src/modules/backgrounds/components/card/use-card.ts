import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { getBackgroundsByIndex } from "../../../../controllers/backgrounds/backgrounds-controller";
import { CardData } from "./card.interfaces";

export const useCard = () => {
  const url = new URL(window.location.href);
  const { t } = useTranslation("backgrounds");
  const { data, isLoading } = useQuery<CardData>({
    queryKey: ["dnd-backgrounds-detail"],
    queryFn: () => getBackgroundsByIndex(url.pathname.split("/").slice(-1)[0]),
  });

  console.log(data);

  return { data, isLoading, t, url };
};
