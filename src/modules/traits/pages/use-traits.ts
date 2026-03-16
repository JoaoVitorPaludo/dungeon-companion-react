import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { useTheme } from "@emotion/react";
import { useNavigate } from "react-router";
import { getAllDnDTraits } from "../../../controllers/traits/traits-controller";

export interface Trait {
  index: string;
  name: string;
  url: string;
  level: number;
}
export const useTraits = () => {
  const { t } = useTranslation("traits");
  const theme = useTheme();
  const navigate = useNavigate();

  const { data, isLoading } = useQuery({
    queryKey: ["dnd-traits"],
    queryFn: getAllDnDTraits,
  });

  return { data, isLoading, t, theme, navigate };
};
