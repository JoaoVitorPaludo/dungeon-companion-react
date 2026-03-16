import { Loading3D } from "../../../../commons/animations/d20-dice";
import { BadgeComponent } from "../../../../components/ui/badge/badge";
import * as S from "./styles";
import { useCard } from "./use-card";

export function SubracesCard() {
  const { data, t, url, isLoading } = useCard();

  return (
    <S.SubracesCardContainer>
      {isLoading ? (
        <S.SubracesCardNoDataContainer>
          <Loading3D />
          Loading...
        </S.SubracesCardNoDataContainer>
      ) : (
        <S.SubracesCardContent>
          <h2> {t(url.pathname.split("/").slice(-1)[0])}</h2>
          {data?.race && (
            <S.BadgeContainer>
              <BadgeComponent variant="primary" size="small">
                {data.race.name}
              </BadgeComponent>
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
        </S.SubracesCardContent>
      )}
    </S.SubracesCardContainer>
  );
}
