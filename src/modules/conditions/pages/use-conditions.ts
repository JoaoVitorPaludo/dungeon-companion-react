import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { useTheme } from "@emotion/react";
import { useNavigate } from "react-router";
import { getAllDnDConditions } from "../../../controllers/conditions/conditions-controller";

export interface Condition {
  index: string;
  name: string;
  url: string;
}
export const useConditions = () => {
  const { t } = useTranslation("conditions");
  const theme = useTheme();
  const navigate = useNavigate();

  const { data, isLoading } = useQuery({
    queryKey: ["dnd-conditions"],
    queryFn: getAllDnDConditions,
  });

  return { data, isLoading, t, theme, navigate };
};
