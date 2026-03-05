import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { CardData } from "./card.interfaces";
import { getLanguagesByIndex } from "../../../../controllers/languages/laguages-controller";

export const useCard = () => {
  const url = new URL(window.location.href);
  const { t } = useTranslation("languages");
  const { data, isLoading } = useQuery<CardData>({
    queryKey: ["dnd-languages-detail"],
    queryFn: () => getLanguagesByIndex(url.pathname.split("/").slice(-1)[0]),
  });

  return { data, isLoading, t, url };
};
