import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { useTheme } from "@emotion/react";
import { useNavigate } from "react-router";
import { getAllDnDRuleSections } from "../../../controllers/rule-sections/rule-sections-controller";

export interface RuleSection {
  index: string;
  name: string;
  url: string;
}
export const useRuleSections = () => {
  const { t } = useTranslation("ruleSections");
  const theme = useTheme();
  const navigate = useNavigate();

  const { data, isLoading } = useQuery({
    queryKey: ["dnd-rule-sections"],
    queryFn: getAllDnDRuleSections,
  });

  return { data, isLoading, t, theme, navigate };
};
