import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { useTheme } from "@emotion/react";
import { useNavigate } from "react-router";
import { getAllDnDMagicItems } from "../../../controllers/magic-items/magic-items-controller";

export interface Item {
  index: string;
  name: string;
  url: string;
}
export const useItems = () => {
  const { t } = useTranslation("magicItems");
  const theme = useTheme();
  const navigate = useNavigate();

  const { data, isLoading } = useQuery({
    queryKey: ["dnd-magic-items"],
    queryFn: getAllDnDMagicItems,
  });

  return { data, isLoading, t, theme, navigate };
};
