import { Loading3D } from "../../../../commons/animations/d20-dice";
import * as S from "./styles";
import { useCard } from "./use-card";
export function EquipmentCard() {
  const { data, t, url, isLoading } = useCard();

  const itemName = url.pathname.split("/").slice(-1)[0];
  const descriptionList = data?.desc ?? [];
  const specialList = data?.special ?? [];
  const propertiesList = data?.properties ?? [];

  return (
    <S.EquipmentCardContainer>
      {isLoading ? (
        <S.EquipmentCardNoDataContainer>
          <Loading3D />
          Loading...
        </S.EquipmentCardNoDataContainer>
      ) : (
        <S.EquipmentCardContent>
          <h2>{t(itemName)}</h2>

          <S.Section>
            <h2>{t("description")}</h2>
            {descriptionList.length === 0 ? (
              <p>{t("no-description")}</p>
            ) : (
              descriptionList.map((desc) => <p key={desc}>{desc}</p>)
            )}
          </S.Section>

          <S.Section>
            <h2>{t("cost")}</h2>
            <S.SectionGrid>
              <div>
                <h3>{t("cost")}</h3>
                <p>
                  {data?.cost.quantity} ({data?.cost.unit})
                </p>
              </div>
              <div>
                <h3>{t("weight")}</h3>
                <p>{data?.weight ?? "-"}</p>
              </div>
            </S.SectionGrid>
          </S.Section>

          <S.Section>
            <h2>{t("equipment-category")}</h2>
            <S.SectionGrid>
              <div>
                <h3>{t("equipment-category")}</h3>
                <p>{data?.equipment_category?.name}</p>
              </div>
              <div>
                <h3>{t("gear-category")}</h3>
                <p>{data?.gear_category?.name ?? "-"}</p>
              </div>
            </S.SectionGrid>
          </S.Section>

          <S.Section>
            <h2>{t("special")}</h2>
            {specialList.length === 0 ? (
              <p>{t("no-description")}</p>
            ) : (
              <ul>
                {specialList.map((desc) => (
                  <li key={desc}>{desc}</li>
                ))}
              </ul>
            )}
          </S.Section>

          <S.Section>
            <h2>{t("properties")}</h2>
            {propertiesList.length === 0 ? (
              <p>{t("no-description")}</p>
            ) : (
              <ul>
                {propertiesList.map((properties) => (
                  <li key={properties.index}>{properties.name}</li>
                ))}
              </ul>
            )}
          </S.Section>

          {data?.contents && data.contents.length > 0 ? (
            <S.Section>
              <h2>{t("contents")}</h2>
              <ul>
                {data.contents.map((content) => (
                  <li key={content.item.index}>
                    {content.quantity}x - {content.item.name}
                  </li>
                ))}
              </ul>
            </S.Section>
          ) : null}
        </S.EquipmentCardContent>
      )}
    </S.EquipmentCardContainer>
  );
}
