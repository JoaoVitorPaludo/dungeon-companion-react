import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { CardData } from "./card.interfaces";
import { getMonstersByIndex } from "../../../../controllers/monsters/monsters-controller";

const DND_BASE_URL = "https://www.dnd5eapi.co";

export const useCard = () => {
  const url = new URL(window.location.href);
  const { t } = useTranslation("monsters");
  const { data, isLoading } = useQuery<CardData>({
    queryKey: ["dnd-monsters-detail"],
    queryFn: () => getMonstersByIndex(url.pathname.split("/").slice(-1)[0]),
  });

  const imageUrl = data?.image ? `${DND_BASE_URL}${data.image}` : undefined;

  return { data, isLoading, t, url, imageUrl };
};
