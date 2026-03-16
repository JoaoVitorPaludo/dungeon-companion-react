import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { useTheme } from "@emotion/react";
import { useNavigate } from "react-router";
import { getAllDnDSubraces } from "../../../controllers/subraces/subraces-controller";

export interface Subrace {
  index: string;
  name: string;
  url: string;
  level: number;
}
export const useSubraces = () => {
  const { t } = useTranslation("subraces");
  const theme = useTheme();
  const navigate = useNavigate();

  const { data, isLoading } = useQuery({
    queryKey: ["dnd-subraces"],
    queryFn: getAllDnDSubraces,
  });

  return { data, isLoading, t, theme, navigate };
};
