import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { CardData } from "./card.interfaces";
import { getSpellByIndex } from "../../../../controllers/spells/spells-controller";

export const useCard = () => {
  const url = new URL(window.location.href);
  const { t } = useTranslation("spells");
  const componentsConstants = {
    V: "Verbal",
    S: "Somatic",
    M: "Material",
  };
  const { data, isLoading } = useQuery<CardData>({
    queryKey: ["dnd-spells-detail"],
    queryFn: () => getSpellByIndex(url.pathname.split("/").slice(-1)[0]),
  });

  return {
    data,
    isLoading,
    t,
    url,
    componentsConstants,
  };
};
