import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { useTheme } from "@emotion/react";
import { useNavigate } from "react-router";
import { getAllDnDMagicSchools } from "../../../controllers/magic-schools/magic-schools-controller";

export interface School {
  index: string;
  name: string;
  url: string;
}
export const useMagicSchools = () => {
  const { t } = useTranslation("magicSchools");
  const theme = useTheme();
  const navigate = useNavigate();

  const { data, isLoading } = useQuery({
    queryKey: ["dnd-magic-schools"],
    queryFn: getAllDnDMagicSchools,
  });

  return { data, isLoading, t, theme, navigate };
};
