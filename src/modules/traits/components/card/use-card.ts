import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { CardData } from "./card.interfaces";
import { getTraitByIndex } from "../../../../controllers/traits/traits-controller";

export const useCard = () => {
  const url = new URL(window.location.href);
  const { t } = useTranslation("traits");

  const { data, isLoading } = useQuery<CardData>({
    queryKey: ["dnd-traits-detail"],
    queryFn: () => getTraitByIndex(url.pathname.split("/").slice(-1)[0]),
  });

  return {
    data,
    isLoading,
    t,
    url,
  };
};
