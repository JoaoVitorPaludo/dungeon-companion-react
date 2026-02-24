import { useTheme } from "@emotion/react";
import { getAllDnDCategories } from "../../../controllers/dashboard-controller";
import { useQuery } from "@tanstack/react-query";

export const useDashboard = () => {
  const theme = useTheme();
  const { data, isLoading } = useQuery({
    queryKey: ["dnd-categories"],
    queryFn: getAllDnDCategories,
  });

  const categories = data?.data ? Object.entries(data.data) : [];

  const formatCategoryName = (key: string) =>
    key
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

  return { isLoading, theme, formatCategoryName, categories };
};
