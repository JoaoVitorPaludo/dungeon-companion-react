import { Loading3D } from "../../../../commons/animations/d20-dice";
import { BadgeComponent } from "../../../../components/ui/badge/badge";
import * as S from "./styles";
import { useCard } from "./use-card";

export function TraitsCard() {
  const { data, t, url, isLoading } = useCard();

  return (
    <S.TraitsCardContainer>
      {isLoading ? (
        <S.TraitsCardNoDataContainer>
          <Loading3D />
          Loading...
        </S.TraitsCardNoDataContainer>
      ) : (
        <S.TraitsCardContent>
          <h2> {t(url.pathname.split("/").slice(-1)[0])}</h2>
          {data?.races && data.races.length > 0 && (
            <S.BadgeContainer>
              {data.races.map((race) => (
                <BadgeComponent variant="primary" size="small">
                  {race.name}
                </BadgeComponent>
              ))}
            </S.BadgeContainer>
          )}

          <S.DescriptionContainer>
            <S.Section>
              <h3>{t("description")}</h3>
              <ul>
                <li>{data?.desc}</li>
              </ul>
            </S.Section>
          </S.DescriptionContainer>
          {data?.proficiencies && data.proficiencies.length > 0 && (
            <S.Section>
              <h3>{t("proficiencies")}</h3>
              <ul>
                {data.proficiencies.map((prof) => (
                  <li key={prof.index}>{prof.name}</li>
                ))}{" "}
              </ul>
            </S.Section>
          )}
        </S.TraitsCardContent>
      )}
    </S.TraitsCardContainer>
  );
}
