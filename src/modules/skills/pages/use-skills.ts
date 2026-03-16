import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { useTheme } from "@emotion/react";
import { useNavigate } from "react-router";
import { getAllDnDSkills } from "../../../controllers/skills/skills-controller";

export interface Skill {
  index: string;
  name: string;
  url: string;
}
export const useSkills = () => {
  const { t } = useTranslation("skills");
  const theme = useTheme();
  const navigate = useNavigate();

  const { data, isLoading } = useQuery({
    queryKey: ["dnd-skills"],
    queryFn: getAllDnDSkills,
  });

  return { data, isLoading, t, theme, navigate };
};
