import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { useTheme } from "@emotion/react";
import { useNavigate } from "react-router";
import { getAllDnDFeats } from "../../../controllers/feats/feats-controller";

export interface Feat {
  index: string;
  name: string;
  url: string;
}
export const useFeats = () => {
  const { t } = useTranslation("feats");
  const theme = useTheme();
  const navigate = useNavigate();

  const { data, isLoading } = useQuery({
    queryKey: ["dnd-feats"],
    queryFn: getAllDnDFeats,
  });

  return { data, isLoading, t, theme, navigate };
};
