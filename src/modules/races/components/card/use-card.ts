import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { CardData } from "./card.interfaces";
import { getRaceByIndex } from "../../../../controllers/races/races-controller";
import { useNavigate } from "react-router";

export const useCard = () => {
  const url = new URL(window.location.href);
  const { t } = useTranslation("races");
  const navigate = useNavigate();
  const { data, isLoading } = useQuery<CardData>({
    queryKey: ["dnd-races-detail"],
    queryFn: () => getRaceByIndex(url.pathname.split("/").slice(-1)[0]),
  });

  return {
    data,
    isLoading,
    navigate,
    t,
    url,
  };
};
