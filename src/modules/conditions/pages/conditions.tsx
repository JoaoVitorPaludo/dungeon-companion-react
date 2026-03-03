import { CONDITIONS_DETAIL_PATH } from "../../../app/routes/routes.constants";
import { Loading3D } from "../../../commons/animations/d20-dice";
import {
  cardVariants,
  listVariants,
} from "../../../commons/animations/variants";
import { SearchField } from "../../../components/ui/search-field/search-field";
import {
  CONDITIONS_FALLBACK_ICON,
  CONDITIONS_ICONS,
} from "./conditions.constants";
import * as S from "./styles";
import { Condition, useConditions } from "./use-conditions";
export function Conditions() {
  const { data, isLoading, theme, t, navigate } = useConditions();
  return (
    <S.ConditionsContainer>
      <SearchField width="25%" handleSearch={(e) => console.log(e)} />
      {isLoading && (
        <S.ConditionsNoDataContainer>
          <Loading3D />
          Loading...
        </S.ConditionsNoDataContainer>
      )}
      <S.ConditionsCardsContainer
        key={String(isLoading)}
        variants={listVariants}
        initial="hidden"
        animate="visible"
      >
        {data?.map((item: Condition) => {
          const Icon = CONDITIONS_ICONS[item.index] ?? CONDITIONS_FALLBACK_ICON;

          return (
            <S.ConditionsCardContainer
              key={item.index}
              variants={cardVariants}
              onClick={() =>
                navigate(CONDITIONS_DETAIL_PATH.replace(":id", item.index))
              }
            >
              <Icon size={25} color={theme["green-500"]} />
              <span>{t(item.index)}</span>
            </S.ConditionsCardContainer>
          );
        })}
      </S.ConditionsCardsContainer>
    </S.ConditionsContainer>
  );
}
