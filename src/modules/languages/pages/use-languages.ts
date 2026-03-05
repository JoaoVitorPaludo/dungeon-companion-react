import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { useTheme } from "@emotion/react";
import { useNavigate } from "react-router";
import { getAllDnDLanguages } from "../../../controllers/languages/laguages-controller";

export interface Language {
  index: string;
  name: string;
  url: string;
}
export const useLanguages = () => {
  const { t } = useTranslation("languages");
  const theme = useTheme();
  const navigate = useNavigate();

  const { data, isLoading } = useQuery({
    queryKey: ["dnd-languages"],
    queryFn: getAllDnDLanguages,
  });

  return { data, isLoading, t, theme, navigate };
};
