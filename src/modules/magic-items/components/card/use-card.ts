import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { CardData } from "./card.interfaces";
import { getMagicItemsByIndex } from "../../../../controllers/magic-items/magic-items-controller";

const DND_BASE_URL = "https://www.dnd5eapi.co";

export const useCard = () => {
  const url = new URL(window.location.href);
  const index = url.pathname.split("/").slice(-1)[0];
  const { t } = useTranslation("magicItems");

  const { data, isLoading } = useQuery<CardData>({
    queryKey: ["dnd-magic-items-detail", index],
    queryFn: () => getMagicItemsByIndex(index),
  });

  const imageUrl = data?.image ? `${DND_BASE_URL}${data.image}` : undefined;

  return { data, isLoading, imageUrl, t, url };
};
