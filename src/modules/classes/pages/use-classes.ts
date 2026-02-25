import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { useTheme } from "@emotion/react";
import { useNavigate } from "react-router";
import { getAllDnDClasses } from "../../../controllers/classes/classes-controller";

export interface Class {
  index: string;
  name: string;
  url: string;
}
export const useClasses = () => {
  const { t } = useTranslation("classes");
  const theme = useTheme();
  const navigate = useNavigate();

  const { data, isLoading } = useQuery({
    queryKey: ["dnd-classes"],
    queryFn: getAllDnDClasses,
  });

  return { data, isLoading, t, theme, navigate };
};
