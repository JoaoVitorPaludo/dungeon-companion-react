import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { useTheme } from "@emotion/react";
import { useNavigate } from "react-router";
import { getAllDnDProficiencies } from "../../../controllers/proficiencies/proficiencies-controller";

export interface Proficiency {
  index: string;
  name: string;
  url: string;
}
export const useProficiencies = () => {
  const { t } = useTranslation("proficiencies");
  const theme = useTheme();
  const navigate = useNavigate();

  const { data, isLoading } = useQuery({
    queryKey: ["dnd-proficiencies"],
    queryFn: getAllDnDProficiencies,
  });

  return { data, isLoading, t, theme, navigate };
};
