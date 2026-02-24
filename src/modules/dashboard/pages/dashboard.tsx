import * as S from "./styles";
import { CATEGORY_FALLBACK_ICON, CATEGORY_ICONS } from "./dashboard.constants";
import { useDashboard } from "./use-dashboard";
import {
  listVariants,
  cardVariants,
} from "../../../commons/animations/variants";
import { Loading3D } from "../../../commons/animations/d20-dice";

export function Dashboard() {
  const { categories, t, theme, isLoading, handleNavigateToCategory } =
    useDashboard();

  return (
    <S.DashboardContainer
      key={String(isLoading)}
      variants={listVariants}
      initial="hidden"
      animate="visible"
    >
      {isLoading && (
        <S.DashboardNoDataContainer>
          <Loading3D />
          Loading...{" "}
        </S.DashboardNoDataContainer>
      )}
      {categories.length === 0 && !isLoading && (
        <S.DashboardNoDataContainer>
          No categories available
        </S.DashboardNoDataContainer>
      )}
      {categories.map(([key]) => {
        const Icon = CATEGORY_ICONS[key] ?? CATEGORY_FALLBACK_ICON;
        return (
          <S.DashboardCardContainer
            key={key}
            variants={cardVariants}
            onClick={() => handleNavigateToCategory(key)}
          >
            <Icon size={25} color={theme["green-500"]} />
            <span>{t(key)}</span>
          </S.DashboardCardContainer>
        );
      })}
    </S.DashboardContainer>
  );
}
