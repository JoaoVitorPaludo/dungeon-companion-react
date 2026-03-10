import { Loading3D } from "../../../../commons/animations/d20-dice";
import { BadgeComponent } from "../../../../components/ui/badge/badge";
import * as S from "./styles";
import { useCard } from "./use-card";

export function MonstersCard() {
  const { data, t, url, isLoading, imageUrl } = useCard();

  return (
    <S.MonstersCardContainer>
      {isLoading ? (
        <S.MonstersCardNoDataContainer>
          <Loading3D />
          Loading...
        </S.MonstersCardNoDataContainer>
      ) : (
        <S.MonstersCardContent>
          <h2>{data?.name || t(url.pathname.split("/").slice(-1)[0])}</h2>

          <S.MonsterHeader>
            {(imageUrl || data?.image) && (
              <S.ImageContainer>
                <img src={imageUrl} alt={data?.name} />
              </S.ImageContainer>
            )}

            <S.DetailsContainer>
              <S.BadgeContainer>
                {data?.type && (
                  <BadgeComponent variant="primary" size="small">
                    {data.type}
                  </BadgeComponent>
                )}
                {data?.size && (
                  <BadgeComponent variant="secondary" size="small">
                    {data.size}
                  </BadgeComponent>
                )}
                {data?.alignment && (
                  <BadgeComponent variant="secondary" size="small">
                    {data.alignment}
                  </BadgeComponent>
                )}
              </S.BadgeContainer>

              <S.StatsContainer>
                {data?.armor_class && (
                  <p>
                    <strong>{t("armor_class")}:</strong>{" "}
                    {data.armor_class.map((ac: any) => ac.value).join(", ")}
                  </p>
                )}
                {data?.hit_points && (
                  <p>
                    <strong>{t("hit_points")}:</strong> {data.hit_points} (
                    {data.hit_points_roll})
                  </p>
                )}
                {data?.speed && (
                  <p>
                    <strong>{t("speed")}:</strong>{" "}
                    {Object.entries(data.speed)
                      .map(([k, v]) => `${k} ${v}`)
                      .join(", ")}
                  </p>
                )}
                {data?.challenge_rating !== undefined && (
                  <p>
                    <strong>{t("challenge_rating")}:</strong>{" "}
                    {data.challenge_rating} ({data.xp} XP)
                  </p>
                )}
              </S.StatsContainer>
            </S.DetailsContainer>
          </S.MonsterHeader>

          <S.DescriptionContainer>
            {data?.special_abilities && data.special_abilities.length > 0 && (
              <S.Section>
                <h3>{t("special-abilities")}</h3>
                <ul>
                  {data.special_abilities.map((ability: any, index: number) => (
                    <li key={index}>
                      <strong>{ability.name}.</strong> {ability.desc}
                    </li>
                  ))}
                </ul>
              </S.Section>
            )}

            {data?.actions && data.actions.length > 0 && (
              <S.Section>
                <h3>{t("actions")}</h3>
                <ul>
                  {data.actions.map((action: any, index: number) => (
                    <li key={index}>
                      <strong>{action.name}.</strong> {action.desc}
                    </li>
                  ))}
                </ul>
              </S.Section>
            )}

            {data?.legendary_actions && data.legendary_actions.length > 0 && (
              <S.Section>
                <h3>{t("legendary_actions")}</h3>
                <ul>
                  {data.legendary_actions.map((action, index: number) => (
                    <li key={index}>
                      <strong>{action.name}.</strong> {action.desc}
                    </li>
                  ))}
                </ul>
              </S.Section>
            )}
          </S.DescriptionContainer>
        </S.MonstersCardContent>
      )}
    </S.MonstersCardContainer>
  );
}
