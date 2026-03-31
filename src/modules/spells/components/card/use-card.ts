import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { CardData } from "./card.interfaces";
import { getSpellByIndex } from "../../../../controllers/spells/spells-controller";
import { useNavigate } from "react-router";

export const useCard = () => {
  const url = new URL(window.location.href);
  const { t } = useTranslation("spells");
  const navigate = useNavigate();

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
    navigate,
  };
};
