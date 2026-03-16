import { Loading3D } from "../../../commons/animations/d20-dice";
import {
  cardVariants,
  listVariants,
} from "../../../commons/animations/variants";
import { SearchField } from "../../../components/ui/search-field/search-field";
import * as S from "./styles";
import { Trait, useTraits } from "./use-traits";
import { TRAITS_FALLBACK_ICON, TRAITS_ICONS } from "./traits.constants";
import { TRAITS_DETAIL_PATH } from "../../../app/routes/routes.constants";

export function Traits() {
  const { data, isLoading, theme, t, navigate } = useTraits();

  return (
    <S.TraitsContainer>
      <SearchField width="25%" handleSearch={(e) => console.log(e)} />
      {isLoading && (
        <S.TraitsNoDataContainer>
          <Loading3D />
          Loading...
        </S.TraitsNoDataContainer>
      )}
      <S.TraitsCardsContainer
        key={String(isLoading)}
        variants={listVariants}
        initial="hidden"
        animate="visible"
      >
        {data?.map((item: Trait) => {
          const Icon = TRAITS_ICONS[item.index] ?? TRAITS_FALLBACK_ICON;

          return (
            <S.TraitsCardContainer
              key={item.index}
              variants={cardVariants}
              onClick={() =>
                navigate(TRAITS_DETAIL_PATH.replace(":id", item.index))
              }
            >
              <Icon size={25} color={theme["green-500"]} />
              <span>{t(item.index)}</span>
            </S.TraitsCardContainer>
          );
        })}
      </S.TraitsCardsContainer>
    </S.TraitsContainer>
  );
}
