import { useQuery } from "@tanstack/react-query";
import { getAllDnDAbilityScores } from "../../../controllers/abilityScores/ability-scores-controller";
import { useTranslation } from "react-i18next";
import { useTheme } from "@emotion/react";
import { useNavigate } from "react-router";

export interface AbilityScore {
  index: string;
  name: string;
  url: string;
}
export const useAbilityScore = () => {
  const { t } = useTranslation("abilityScores");
  const theme = useTheme();
  const navigate = useNavigate();

  const { data, isLoading } = useQuery({
    queryKey: ["dnd-ability-scores"],
    queryFn: getAllDnDAbilityScores,
  });

  return { data, isLoading, t, theme, navigate };
};
