import { Loading3D } from "../../../../commons/animations/d20-dice";
import { BadgeComponent } from "../../../../components/ui/badge/badge";
import * as S from "./styles";
import { useCard } from "./use-card";

export function SpellsCard() {
  const { data, t, url, isLoading, componentsConstants } = useCard();

  return (
    <S.SpellsCardContainer>
      {isLoading ? (
        <S.SpellsCardNoDataContainer>
          <Loading3D />
          Loading...
        </S.SpellsCardNoDataContainer>
      ) : (
        <S.SpellsCardContent>
          <h2> {t(url.pathname.split("/").slice(-1)[0])}</h2>
          {data?.classes && data?.classes.length > 0 && (
            <S.BadgeContainer>
              {data?.classes.map((item) => (
                <BadgeComponent variant="primary" size="small">
                  {item.name}
                </BadgeComponent>
              ))}
            </S.BadgeContainer>
          )}
          <S.DescriptionContainer>
            <S.Section>
              <h3>{t("description")}</h3>
              <ul>
                {data?.desc.map((item, index) => <li key={index}>{item}</li>)}
              </ul>
            </S.Section>
          </S.DescriptionContainer>
          <S.StatsContainer>
            <p>
              <strong>{t("range")}:</strong> {data?.range}
            </p>
            <p>
              <strong>{t("school")}:</strong> {data?.school?.name}
            </p>
            <p>
              <strong>{t("components")}:</strong>{" "}
              {data?.components.map((component, idx) => (
                <label key={component}>
                  {
                    componentsConstants[
                      component as keyof typeof componentsConstants
                    ]
                  }
                  {idx < data.components.length - 1 && ", "}
                </label>
              ))}
            </p>
            <p>
              <strong>{t("casting_time")}:</strong> {data?.casting_time}
            </p>
            <p>
              <strong>{t("concentration")}:</strong>{" "}
              {data?.concentration ? "Yes" : "No"}
            </p>
          </S.StatsContainer>
          <S.Section>
            <h3>{t("damage")}</h3>
            {data?.damage?.damage_at_character_level ? (
              <ul>
                {Object.entries(data.damage.damage_at_character_level).map(
                  ([slotLevel, damage]) => (
                    <li key={slotLevel}>
                      <strong>
                        {t("slot_level")} {slotLevel}:
                      </strong>{" "}
                      {damage} - {data?.damage.damage_type.name}
                    </li>
                  ),
                )}
              </ul>
            ) : (
              <p>{t("no_damage_info")}</p>
            )}
          </S.Section>
        </S.SpellsCardContent>
      )}
    </S.SpellsCardContainer>
  );
}
