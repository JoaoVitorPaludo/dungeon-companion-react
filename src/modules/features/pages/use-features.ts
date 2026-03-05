import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { useTheme } from "@emotion/react";
import { useNavigate } from "react-router";
import { getAllDnDFeatures } from "../../../controllers/features/features-controller";

export interface Feature {
  index: string;
  name: string;
  url: string;
}
export const useFeatures = () => {
  const { t } = useTranslation("features");
  const theme = useTheme();
  const navigate = useNavigate();

  const { data, isLoading } = useQuery({
    queryKey: ["dnd-features"],
    queryFn: getAllDnDFeatures,
  });

  return { data, isLoading, t, theme, navigate };
};
