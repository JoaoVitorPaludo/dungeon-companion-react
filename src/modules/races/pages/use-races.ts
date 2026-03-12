import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { useTheme } from "@emotion/react";
import { useNavigate } from "react-router";
import { getAllDnDRaces } from "../../../controllers/races/races-controller";

export interface Race {
  index: string;
  name: string;
  url: string;
}
export const useRaces = () => {
  const { t } = useTranslation("races");
  const theme = useTheme();
  const navigate = useNavigate();

  const { data, isLoading } = useQuery({
    queryKey: ["dnd-races"],
    queryFn: getAllDnDRaces,
  });

  return { data, isLoading, t, theme, navigate };
};
