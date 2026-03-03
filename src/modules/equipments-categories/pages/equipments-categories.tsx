import { EQUIPMENT_CATEGORIES_DETAIL_PATH } from "../../../app/routes/routes.constants";
import { Loading3D } from "../../../commons/animations/d20-dice";
import {
  cardVariants,
  listVariants,
} from "../../../commons/animations/variants";
import { SearchField } from "../../../components/ui/search-field/search-field";
import {
  EQUIPMENTS_CATEGORIES_FALLBACK_ICON,
  EQUIPMENTS_CATEGORIES_ICONS,
} from "./equipments-categories.constants";
import * as S from "./styles";
import {
  Equipment,
  useEquipmentsCategories,
} from "./use-equipments-categories";
export function EquipmentsCategories() {
  const { data, isLoading, theme, t, navigate } = useEquipmentsCategories();
  return (
    <S.EquipmentsCategoriesContainer>
      <SearchField width="25%" handleSearch={(e) => console.log(e)} />
      {isLoading && (
        <S.EquipmentsCategoriesNoDataContainer>
          <Loading3D />
          Loading...
        </S.EquipmentsCategoriesNoDataContainer>
      )}
      <S.EquipmentsCategoriesCardsContainer
        key={String(isLoading)}
        variants={listVariants}
        initial="hidden"
        animate="visible"
      >
        {data?.map((item: Equipment) => {
          const Icon =
            EQUIPMENTS_CATEGORIES_ICONS[item.index] ??
            EQUIPMENTS_CATEGORIES_FALLBACK_ICON;

          return (
            <S.EquipmentsCategoriesCardContainer
              key={item.index}
              variants={cardVariants}
              onClick={() =>
                navigate(
                  EQUIPMENT_CATEGORIES_DETAIL_PATH.replace(":id", item.index),
                )
              }
            >
              <Icon size={25} color={theme["green-500"]} />
              <span>{t(item.index)}</span>
            </S.EquipmentsCategoriesCardContainer>
          );
        })}
      </S.EquipmentsCategoriesCardsContainer>
    </S.EquipmentsCategoriesContainer>
  );
}
