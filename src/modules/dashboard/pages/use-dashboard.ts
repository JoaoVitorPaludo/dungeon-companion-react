import { useTheme } from "@emotion/react";
import { getAllDnDCategories } from "../../../controllers/dashboard/dashboard-controller";
import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";

export const useDashboard = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { t } = useTranslation("dashboard");
  const { data, isLoading } = useQuery({
    queryKey: ["dnd-categories"],
    queryFn: getAllDnDCategories,
  });

  const categories = data?.data ? Object.entries(data.data) : [];

  const handleNavigateToCategory = (categoryKey: string) => {
    navigate(`/${categoryKey}`);
  };

  return { isLoading, theme, t, categories, handleNavigateToCategory };
};
