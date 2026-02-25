import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { useTheme } from "@emotion/react";
import { useNavigate } from "react-router";
import { getAllDnDBackgrounds } from "../../../controllers/backgrounds/backgrounds-controller";

export interface Background {
  index: string;
  name: string;
  url: string;
}
export const useBackgrounds = () => {
  const { t } = useTranslation("backgrounds");
  const theme = useTheme();
  const navigate = useNavigate();

  const { data, isLoading } = useQuery({
    queryKey: ["dnd-backgrounds"],
    queryFn: getAllDnDBackgrounds,
  });

  return { data, isLoading, t, theme, navigate };
};
