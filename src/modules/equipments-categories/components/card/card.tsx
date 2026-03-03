import { Loading3D } from "../../../../commons/animations/d20-dice";
import * as S from "./styles";
import { useCard } from "./use-card";
export function EquipmentCard() {
  const { data, t, url, isLoading } = useCard();

  return (
    <S.EquipmentCardContainer>
      {isLoading ? (
        <S.EquipmentCardNoDataContainer>
          <Loading3D />
          Loading...
        </S.EquipmentCardNoDataContainer>
      ) : (
        <S.EquipmentCardContent>
          <h2>{t(url.pathname.split("/").slice(-1)[0])}</h2>
          <span>{t("description")}</span>
          {data?.desc.length === 0 && <p>{t("no-description")}</p>}
          {data?.desc.map((desc) => (
            <p key={desc}>
              {desc}
              <br />
            </p>
          ))}

          <S.EquipmentSideInfoContainer>
            <div>
              <span>{t("cost")}</span>
              <p>
                {data?.cost.quantity} ({data?.cost.unit})
              </p>
            </div>
            <div>
              <span>{t("weight")}</span>
              <p>{data?.weight}</p>
            </div>
          </S.EquipmentSideInfoContainer>
          <S.EquipmentSideInfoContainer>
            <div>
              <span>{t("equipment-category")}</span>
              <p>{data?.equipment_category?.name}</p>
            </div>
            <div>
              <span>{t("gear-category")}</span>
              <p>{data?.gear_category?.name}</p>
            </div>
          </S.EquipmentSideInfoContainer>
          <S.EquipmentSideInfoContainer>
            <div>
              <span>{t("special")}</span>
              {data?.special.map((desc) => (
                <p key={desc}>
                  {desc}
                  <br />
                </p>
              ))}{" "}
            </div>

            <div>
              <span>{t("properties")}</span>
              {data?.properties.map((properties) => (
                <p key={properties.index}>
                  {properties.name}
                  <br />
                </p>
              ))}{" "}
            </div>
          </S.EquipmentSideInfoContainer>
        </S.EquipmentCardContent>
      )}
    </S.EquipmentCardContainer>
  );
}
