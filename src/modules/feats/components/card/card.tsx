import { ABILITY_SCORES_DETAIL_PATH } from "../../../../app/routes/routes.constants";
import { Loading3D } from "../../../../commons/animations/d20-dice";
import * as S from "./styles";
import { useCard } from "./use-card";
export function FeatsCard() {
  const { data, t, url, isLoading, navigate } = useCard();

  return (
    <S.FeatsCardContainer>
      {isLoading ? (
        <S.FeatsCardNoDataContainer>
          <Loading3D />
          Loading...
        </S.FeatsCardNoDataContainer>
      ) : (
        <S.FeatsCardContent>
          <h2>{t(url.pathname.split("/").slice(-1)[0])}</h2>
          <S.Section>
            <h2>{t("description")}</h2>
            <ul>
              {data?.desc.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
          </S.Section>
          <S.SectionLinkListStyle>
            <h2>{t("prerequisites")}</h2>
            <ul>
              {data?.prerequisites.map((item, index) => (
                <li
                  onClick={() =>
                    navigate(
                      ABILITY_SCORES_DETAIL_PATH.replace(
                        ":id",
                        item.ability_score.index,
                      ),
                    )
                  }
                  key={index}
                >
                  {t(item.ability_score.name)} - {t("minimum_score")}:{" "}
                  {item.minimum_score}
                </li>
              ))}
            </ul>
          </S.SectionLinkListStyle>
        </S.FeatsCardContent>
      )}
    </S.FeatsCardContainer>
  );
}
