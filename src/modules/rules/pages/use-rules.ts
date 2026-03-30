import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { useTheme } from "@emotion/react";
import { useNavigate } from "react-router";
import { getAllDnDRules } from "../../../controllers/rules/rules-controller";

export interface Rule {
  index: string;
  name: string;
  url: string;
}
export const useRules = () => {
  const { t } = useTranslation("rules");
  const theme = useTheme();
  const navigate = useNavigate();

  const { data, isLoading } = useQuery({
    queryKey: ["dnd-rules"],
    queryFn: getAllDnDRules,
  });

  return { data, isLoading, t, theme, navigate };
};
