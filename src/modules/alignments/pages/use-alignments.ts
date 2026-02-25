import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { useTheme } from "@emotion/react";
import { useNavigate } from "react-router";
import { getAllDnDAlignments } from "../../../controllers/alignments/alignments-controller";

export interface Alignment {
  index: string;
  name: string;
  url: string;
}
export const useAlignments = () => {
  const { t } = useTranslation("alignments");
  const theme = useTheme();
  const navigate = useNavigate();

  const { data, isLoading } = useQuery({
    queryKey: ["dnd-alignments"],
    queryFn: getAllDnDAlignments,
  });

  return { data, isLoading, t, theme, navigate };
};
