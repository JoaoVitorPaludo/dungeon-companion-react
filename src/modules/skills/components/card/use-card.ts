import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { CardData } from "./card.interfaces";
import { getSkillByIndex } from "../../../../controllers/skills/skills-controller";

export const useCard = () => {
  const url = new URL(window.location.href);
  const { t } = useTranslation("skills");

  const { data, isLoading } = useQuery<CardData>({
    queryKey: ["dnd-skills-detail"],
    queryFn: () => getSkillByIndex(url.pathname.split("/").slice(-1)[0]),
  });

  return {
    data,
    isLoading,
    t,
    url,
  };
};
