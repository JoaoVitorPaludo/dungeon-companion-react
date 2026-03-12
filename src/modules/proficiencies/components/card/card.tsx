import { Loading3D } from "../../../../commons/animations/d20-dice";
import { BadgeComponent } from "../../../../components/ui/badge/badge";
import * as S from "./styles";
import { useCard } from "./use-card";

export function ProficienciesCard() {
  const { data, t, url, isLoading, equipmentData } = useCard();

  return (
    <S.ProficienciesCardContainer>
      {isLoading ? (
        <S.ProficienciesCardNoDataContainer>
          <Loading3D />
          Loading...
        </S.ProficienciesCardNoDataContainer>
      ) : (
        <S.ProficienciesCardContent>
          <h2>{data?.name || t(url.pathname.split("/").slice(-1)[0])}</h2>

          <S.BadgeContainer>
            {data?.type && (
              <BadgeComponent variant="primary" size="small">
                {data.type}
              </BadgeComponent>
            )}
            {equipmentData?.cost && (
              <BadgeComponent variant="secondary" size="small">
                {equipmentData.cost.quantity} {equipmentData.cost.unit}
              </BadgeComponent>
            )}
            {equipmentData?.properties &&
              equipmentData.properties.length > 0 && (
                <>
                  {equipmentData?.properties.map((prop) => (
                    <BadgeComponent variant="secondary" size="small">
                      {prop.name}
                    </BadgeComponent>
                  ))}
                </>
              )}
          </S.BadgeContainer>

          <S.DescriptionContainer>
            {equipmentData?.desc && equipmentData?.desc.length > 0 && (
              <S.Section>
                <h3>{t("description")}</h3>
                {equipmentData.desc.map((desc, index) => (
                  <p key={index}>{desc}</p>
                ))}
              </S.Section>
            )}
            {equipmentData?.damage && (
              <S.Section>
                <h3>{t("damage")}</h3>
                <p>Hit dice: {equipmentData.damage.damage_dice}</p>
              </S.Section>
            )}
            {data?.classes && data.classes.length > 0 && (
              <S.Section>
                <h3>{t("classes")}</h3>
                <ul>
                  {data.classes.map((classe: any, index: number) => (
                    <li key={index}>{classe.name}</li>
                  ))}
                </ul>
              </S.Section>
            )}

            {data?.races && data.races.length > 0 && (
              <S.Section>
                <h3>{t("races")}</h3>
                <ul>
                  {data.races.map((race: any, index: number) => (
                    <li key={index}>{race.name}</li>
                  ))}
                </ul>
              </S.Section>
            )}
          </S.DescriptionContainer>
        </S.ProficienciesCardContent>
      )}
    </S.ProficienciesCardContainer>
  );
}
