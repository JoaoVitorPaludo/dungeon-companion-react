import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { CardData } from "./card.interfaces";
import { getRuleByIndex } from "../../../../controllers/rules/rules-controller";

export const useCard = () => {
  const url = new URL(window.location.href);
  const { t } = useTranslation("rules");
  const { t: ruleSections } = useTranslation("ruleSections");
  const { data, isLoading } = useQuery<CardData>({
    queryKey: ["dnd-rules-detail"],
    queryFn: () => getRuleByIndex(url.pathname.split("/").slice(-1)[0]),
  });

  return {
    data,
    isLoading,
    t,
    ruleSections,
    url,
  };
};
