import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { useTheme } from "@emotion/react";
import { useNavigate } from "react-router";
import { getAllDnDSpells } from "../../../controllers/spells/spells-controller";

export interface Spell {
  index: string;
  name: string;
  url: string;
  level: number;
}
export const useSpells = () => {
  const { t } = useTranslation("spells");
  const theme = useTheme();
  const navigate = useNavigate();

  const { data, isLoading } = useQuery<Spell[]>({
    queryKey: ["dnd-spells"],
    queryFn: getAllDnDSpells,
    select: (spells) =>
      [...spells].sort(
        (a, b) => a.level - b.level || a.name.localeCompare(b.name),
      ),
  });

  return { data, isLoading, t, theme, navigate };
};
