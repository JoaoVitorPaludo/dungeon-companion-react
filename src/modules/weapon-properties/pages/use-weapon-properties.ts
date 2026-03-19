import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { useTheme } from "@emotion/react";
import { useNavigate } from "react-router";
import { getAllDnDWeaponProperties } from "../../../controllers/weapon-properties/weapon-properties-controller";

export interface WeaponProperty {
  index: string;
  name: string;
  url: string;
  level: number;
}
export const useWeaponProperties = () => {
  const { t } = useTranslation("weaponProperties");
  const theme = useTheme();
  const navigate = useNavigate();

  const { data, isLoading } = useQuery({
    queryKey: ["dnd-weapon-properties"],
    queryFn: getAllDnDWeaponProperties,
  });

  return { data, isLoading, t, theme, navigate };
};
