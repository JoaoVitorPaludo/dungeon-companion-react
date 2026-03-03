import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { useTheme } from "@emotion/react";
import { useNavigate } from "react-router";
import { getAllDnDEquipments } from "../../../controllers/equipment/equipment-controller";

export interface Equipment {
  index: string;
  name: string;
  url: string;
}
export const useEquipments = () => {
  const { t } = useTranslation("equipments");
  const theme = useTheme();
  const navigate = useNavigate();

  const { data, isLoading } = useQuery({
    queryKey: ["dnd-equipments"],
    queryFn: getAllDnDEquipments,
  });

  return { data, isLoading, t, theme, navigate };
};
