import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { useTheme } from "@emotion/react";
import { useNavigate } from "react-router";
import { getAllDnDMonsters } from "../../../controllers/monsters/monsters-controller";

export interface Monster {
  index: string;
  name: string;
  url: string;
}
export const useMonsters = () => {
  const { t } = useTranslation("monsters");
  const theme = useTheme();
  const navigate = useNavigate();

  const { data, isLoading } = useQuery({
    queryKey: ["dnd-monsters"],
    queryFn: getAllDnDMonsters,
  });

  return { data, isLoading, t, theme, navigate };
};
