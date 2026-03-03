import { EQUIPMENT_DETAIL_PATH } from "../../../app/routes/routes.constants";
import { Loading3D } from "../../../commons/animations/d20-dice";
import {
  cardVariants,
  listVariants,
} from "../../../commons/animations/variants";
import { SearchField } from "../../../components/ui/search-field/search-field";
import {
  EQUIPMENTS_FALLBACK_ICON,
  EQUIPMENTS_ICONS,
} from "./equipment.constants";
import * as S from "./styles";
import { Equipment, useEquipments } from "./use-equipment";
export function Equipments() {
  const { data, isLoading, theme, t, navigate } = useEquipments();
  return (
    <S.EquipmentContainer>
      <SearchField width="25%" handleSearch={(e) => console.log(e)} />
      {isLoading && (
        <S.EquipmentNoDataContainer>
          <Loading3D />
          Loading...
        </S.EquipmentNoDataContainer>
      )}
      <S.EquipmentCardsContainer
        key={String(isLoading)}
        variants={listVariants}
        initial="hidden"
        animate="visible"
      >
        {data?.map((item: Equipment) => {
          const Icon = EQUIPMENTS_ICONS[item.index] ?? EQUIPMENTS_FALLBACK_ICON;

          return (
            <S.EquipmentCardContainer
              key={item.index}
              variants={cardVariants}
              onClick={() =>
                navigate(EQUIPMENT_DETAIL_PATH.replace(":id", item.index))
              }
            >
              <Icon size={25} color={theme["green-500"]} />
              <span>{t(item.index)}</span>
            </S.EquipmentCardContainer>
          );
        })}
      </S.EquipmentCardsContainer>
    </S.EquipmentContainer>
  );
}
