import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { CardData } from "./card.interfaces";
import { getRuleSectionByIndex } from "../../../../controllers/rule-sections/rule-sections-controller";

export const useCard = () => {
  const url = new URL(window.location.href);
  const { t } = useTranslation("ruleSections");
  const { data, isLoading } = useQuery<CardData>({
    queryKey: ["dnd-rule-section-detail"],
    queryFn: () => getRuleSectionByIndex(url.pathname.split("/").slice(-1)[0]),
  });

  return {
    data,
    isLoading,
    t,
    url,
  };
};
