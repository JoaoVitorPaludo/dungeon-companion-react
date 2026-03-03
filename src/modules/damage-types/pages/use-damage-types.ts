import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { useTheme } from "@emotion/react";
import { useNavigate } from "react-router";
import { getAllDnDDamageTypes } from "../../../controllers/damage-types/damage-types-controller";

export interface DamageType {
  index: string;
  name: string;
  url: string;
}

export const useDamageTypes = () => {
  const { t } = useTranslation("damageTypes");
  const theme = useTheme();
  const navigate = useNavigate();

  const { data, isLoading } = useQuery({
    queryKey: ["dnd-damage-types"],
    queryFn: getAllDnDDamageTypes,
  });

  return { data, isLoading, t, theme, navigate };
};
