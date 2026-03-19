import { Loading3D } from "../../../../commons/animations/d20-dice";
import { BadgeComponent } from "../../../../components/ui/badge/badge";
import * as S from "./styles";
import { useCard } from "./use-card";

export function FeatureCard() {
  const { data, t, url, isLoading } = useCard();

  return (
    <S.FeatsCardContainer>
      {isLoading ? (
        <S.FeatsCardNoDataContainer>
          <Loading3D />
          Loading...
        </S.FeatsCardNoDataContainer>
      ) : (
        <S.FeatsCardContent>
          <h2>{data?.name || t(url.pathname.split("/").slice(-1)[0])}</h2>

          <S.ItemHeader>
            <S.BadgeContainer>
              {data?.class && (
                <BadgeComponent variant="primary">
                  {t(data.class.name || "")}
                </BadgeComponent>
              )}
              {data?.prerequisites &&
                data.prerequisites.map((item, index) => (
                  <BadgeComponent key={index} variant="secondary">
                    {t(item.ability_score.index)}: {item.minimum_score}
                  </BadgeComponent>
                ))}
            </S.BadgeContainer>
          </S.ItemHeader>

          <S.DescriptionContainer>
            {data?.desc && data.desc.length > 0 && (
              <>
                <span>{t("description")}</span>
                {data.desc.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
              </>
            )}
          </S.DescriptionContainer>
        </S.FeatsCardContent>
      )}
    </S.FeatsCardContainer>
  );
}
