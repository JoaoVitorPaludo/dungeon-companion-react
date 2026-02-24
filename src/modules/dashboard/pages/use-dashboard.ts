import { useTheme } from "@emotion/react";
import { getAllDnDCategories } from "../../../controllers/dashboard-controller";
import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";

export const useDashboard = () => {
  const theme = useTheme();
  const { t } = useTranslation("dashboard");
  const { data, isLoading } = useQuery({
    queryKey: ["dnd-categories"],
    queryFn: getAllDnDCategories,
  });

  console.log(t("classes"));
  const categories = data?.data ? Object.entries(data.data) : [];

  return { isLoading, theme, t, categories };
};
