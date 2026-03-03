import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { useTheme } from "@emotion/react";
import { useNavigate } from "react-router";
import { getAllDnDEquipmentsCategories } from "../../../controllers/equipaments-categories/equipaments-categories-controller";

export interface Equipment {
  index: string;
  name: string;
  url: string;
}
export const useEquipmentsCategories = () => {
  const { t } = useTranslation("equipmentsCategories");
  const theme = useTheme();
  const navigate = useNavigate();

  const { data, isLoading } = useQuery({
    queryKey: ["dnd-equipments-categories"],
    queryFn: getAllDnDEquipmentsCategories,
  });

  return { data, isLoading, t, theme, navigate };
};
