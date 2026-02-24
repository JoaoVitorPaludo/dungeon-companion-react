import * as S from "./styles";
import { CATEGORY_FALLBACK_ICON, CATEGORY_ICONS } from "./dashboard.constants";
import { useDashboard } from "./use-dashboard";
import { containerVariants } from "../../../commons/animations/variants";

export function Dashboard() {
  const { categories, formatCategoryName, theme, isLoading } = useDashboard();

  return (
    <S.DashboardContainer>
      {isLoading && (
        <S.DashboardNoDataContainer>Loading...</S.DashboardNoDataContainer>
      )}
      {categories.length === 0 && !isLoading && (
        <S.DashboardNoDataContainer>
          No categories available
        </S.DashboardNoDataContainer>
      )}
      {categories.map(([key, item]) => {
        const Icon = CATEGORY_ICONS[key] ?? CATEGORY_FALLBACK_ICON;
        return (
          <S.DashboardCardContainer
            key={key}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            viewport={{ once: false, amount: 0.3 }}
          >
            <Icon size={25} color={theme["green-500"]} />
            <span>{formatCategoryName(key)}</span>
          </S.DashboardCardContainer>
        );
      })}
    </S.DashboardContainer>
  );
}
