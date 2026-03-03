import { Loading3D } from "../../../../commons/animations/d20-dice";
import * as S from "./styles";
import { useCard } from "./use-card";
export function EquipmentCategoriesCard() {
  const { data, t, url, isLoading } = useCard();

  return (
    <S.EquipmentsCategoriesCardContainer>
      {isLoading ? (
        <S.EquipmentsCategoriesCardNoDataContainer>
          <Loading3D />
          Loading...
        </S.EquipmentsCategoriesCardNoDataContainer>
      ) : (
        <S.EquipmentsCategoriesCardContent>
          <h2>{t(url.pathname.split("/").slice(-1)[0])}</h2>
          <span>{t("equipment")}</span>
          <ul>
            {data?.equipment.map((item) => (
              <li key={item.index}>{item.name}</li>
            ))}
          </ul>
        </S.EquipmentsCategoriesCardContent>
      )}
    </S.EquipmentsCategoriesCardContainer>
  );
}
