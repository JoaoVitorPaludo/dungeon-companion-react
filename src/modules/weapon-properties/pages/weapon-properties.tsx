import { WEAPON_PROPERTIES_DETAIL_PATH } from "../../../app/routes/routes.constants";
import { Loading3D } from "../../../commons/animations/d20-dice";
import {
  cardVariants,
  listVariants,
} from "../../../commons/animations/variants";
import { SearchField } from "../../../components/ui/search-field/search-field";
import * as S from "./styles";
import { useWeaponProperties, WeaponProperty } from "./use-weapon-properties";
import {
  WEAPON_PROPERTIES_FALLBACK_ICON,
  WEAPON_PROPERTIES_ICONS,
} from "./weapon-properties.constants";

export function WeaponProperties() {
  const { data, isLoading, theme, t, navigate } = useWeaponProperties();

  return (
    <S.WeaponPropertiesContainer>
      <SearchField width="25%" handleSearch={(e) => console.log(e)} />
      {isLoading && (
        <S.WeaponPropertiesNoDataContainer>
          <Loading3D />
          Loading...
        </S.WeaponPropertiesNoDataContainer>
      )}
      <S.WeaponPropertiesCardsContainer
        key={String(isLoading)}
        variants={listVariants}
        initial="hidden"
        animate="visible"
      >
        {data?.map((item: WeaponProperty) => {
          const Icon =
            WEAPON_PROPERTIES_ICONS[item.index] ??
            WEAPON_PROPERTIES_FALLBACK_ICON;

          return (
            <S.WeaponPropertiesCardContainer
              key={item.index}
              variants={cardVariants}
              onClick={() =>
                navigate(
                  WEAPON_PROPERTIES_DETAIL_PATH.replace(":id", item.index),
                )
              }
            >
              <Icon size={25} color={theme["green-500"]} />
              <span>{t(item.index)}</span>
            </S.WeaponPropertiesCardContainer>
          );
        })}
      </S.WeaponPropertiesCardsContainer>
    </S.WeaponPropertiesContainer>
  );
}
