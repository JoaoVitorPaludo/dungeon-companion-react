import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { CardData } from "./card.interfaces";
import { getMagicSchoolsByIndex } from "../../../../controllers/magic-schools/magic-schools-controller";

export const useCard = () => {
  const url = new URL(window.location.href);
  const index = url.pathname.split("/").slice(-1)[0];
  const { t } = useTranslation("magicSchools");

  const { data, isLoading } = useQuery<CardData>({
    queryKey: ["dnd-magic-schools-detail", index],
    queryFn: () => getMagicSchoolsByIndex(index),
  });

  return { data, isLoading, t, url };
};
