import { Loading3D } from "../../../../commons/animations/d20-dice";
import { Badge } from "../../../../components/ui/badge/styles";
import * as S from "./styles";
import { useCard } from "./use-card";

export function RacesCard() {
  const { data, t, url, isLoading } = useCard();

  return (
    <S.RacesCardContainer>
      {isLoading ? (
        <S.RacesCardNoDataContainer>
          <Loading3D />
          Loading...
        </S.RacesCardNoDataContainer>
      ) : (
        <S.RacesCardContent>
          <h2>{data?.name || t(url.pathname.split("/").slice(-1)[0])}</h2>

          <S.DetailsContainer>
            <S.StatsContainer>
              <p>
                <strong>{t("speed")}:</strong> {data?.speed}ft (
                {data?.speed ? (data.speed * 0.3).toFixed(1) : 0}m)
              </p>
              <p>
                <strong>{t("size")}:</strong> {data?.size}
              </p>
            </S.StatsContainer>

            <S.DescriptionContainer>
              <S.Section>
                <h3>{t("ability_bonuses")}</h3>
                <S.BadgeContainer>
                  {data?.ability_bonuses?.map((bonus) => (
                    <Badge
                      key={bonus.ability_score.index}
                      variant="secondary"
                      size="small"
                    >
                      {bonus.ability_score.name} +{bonus.bonus}
                    </Badge>
                  ))}
                </S.BadgeContainer>
              </S.Section>

              <S.Section>
                <h3>{t("age")}</h3>
                <p>{data?.age}</p>
              </S.Section>

              <S.Section>
                <h3>{t("alignment")}</h3>
                <p>{data?.alignment}</p>
              </S.Section>

              <S.Section>
                <h3>{t("size_description")}</h3>
                <p>{data?.size_description}</p>
              </S.Section>

              <S.Section>
                <h3>{t("languages")}</h3>
                <S.BadgeContainer>
                  {data?.languages?.map((lang) => (
                    <Badge key={lang.index} variant="secondary" size="small">
                      {lang.name}
                    </Badge>
                  ))}
                </S.BadgeContainer>
                <p>{data?.language_desc}</p>
              </S.Section>

              <S.Section>
                <h3>{t("traits")}</h3>
                <S.BadgeContainer>
                  {data?.traits?.map((trait) => (
                    <Badge key={trait.index} variant="secondary" size="small">
                      {trait.name}
                    </Badge>
                  ))}
                </S.BadgeContainer>
              </S.Section>

              {data?.subraces && data.subraces.length > 0 && (
                <S.Section>
                  <h3>{t("subraces")}</h3>
                  <S.BadgeContainer>
                    {data.subraces.map((subrace) => (
                      <Badge
                        key={subrace.index}
                        variant="secondary"
                        size="small"
                      >
                        {subrace.name}
                      </Badge>
                    ))}
                  </S.BadgeContainer>
                </S.Section>
              )}
            </S.DescriptionContainer>
          </S.DetailsContainer>
        </S.RacesCardContent>
      )}
    </S.RacesCardContainer>
  );
}
