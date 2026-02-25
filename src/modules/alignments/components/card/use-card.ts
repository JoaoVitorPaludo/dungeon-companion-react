import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { getAlignmentsByIndex } from "../../../../controllers/alignments/alignments-controller";

interface CardData {
  desc: string;
  index: string;
}
export const useCard = () => {
  const url = new URL(window.location.href);
  const { t } = useTranslation("alignments");
  const { data, isLoading } = useQuery<CardData>({
    queryKey: ["dnd-alignments-detail"],
    queryFn: () => getAlignmentsByIndex(url.pathname.split("/").slice(-1)[0]),
  });

  console.log(data);

  return { data, isLoading, t, url };
};
