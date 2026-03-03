import { DAMAGE_TYPES_DETAIL_PATH } from "../../../app/routes/routes.constants";
import { Loading3D } from "../../../commons/animations/d20-dice";
import {
  cardVariants,
  listVariants,
} from "../../../commons/animations/variants";
import { SearchField } from "../../../components/ui/search-field/search-field";
import {
  DAMAGE_TYPES_FALLBACK_ICON,
  DAMAGE_TYPES_ICONS,
} from "./damage-types.constants";
import * as S from "./styles";
import { DamageType, useDamageTypes } from "./use-damage-types";

export function DamageTypes() {
  const { data, isLoading, theme, t, navigate } = useDamageTypes();

  return (
    <S.DamageTypesContainer>
      <SearchField width="25%" handleSearch={(e) => console.log(e)} />
      {isLoading && (
        <S.DamageTypesNoDataContainer>
          <Loading3D />
          Loading...
        </S.DamageTypesNoDataContainer>
      )}
      <S.DamageTypesCardsContainer
        key={String(isLoading)}
        variants={listVariants}
        initial="hidden"
        animate="visible"
      >
        {data?.map((item: DamageType) => {
          const Icon =
            DAMAGE_TYPES_ICONS[item.index] ?? DAMAGE_TYPES_FALLBACK_ICON;

          return (
            <S.DamageTypesCardContainer
              key={item.index}
              variants={cardVariants}
              onClick={() =>
                navigate(DAMAGE_TYPES_DETAIL_PATH.replace(":id", item.index))
              }
            >
              <Icon size={25} color={theme["green-500"]} />
              <span>{t(item.index)}</span>
            </S.DamageTypesCardContainer>
          );
        })}
      </S.DamageTypesCardsContainer>
    </S.DamageTypesContainer>
  );
}
