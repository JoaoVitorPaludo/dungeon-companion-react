import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { CardData } from "./card.interfaces";
import { getClassesByIndex } from "../../../../controllers/classes/classes-controller";
import { useNavigate } from "react-router";

export const useCard = () => {
  const url = new URL(window.location.href);
  const { t } = useTranslation("classes");
  const navigate = useNavigate();
  const { data, isLoading } = useQuery<CardData>({
    queryKey: ["dnd-classes-detail"],
    queryFn: () => getClassesByIndex(url.pathname.split("/").slice(-1)[0]),
  });

  return { data, isLoading, t, url, navigate };
};
