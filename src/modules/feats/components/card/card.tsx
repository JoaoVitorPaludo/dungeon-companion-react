import { Loading3D } from "../../../../commons/animations/d20-dice";
import * as S from "./styles";
import { useCard } from "./use-card";
export function FeatsCard() {
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
          <h2>{t(url.pathname.split("/").slice(-1)[0])}</h2>
          <span>{t("description")}</span>
          {data?.desc.map((item, index) => <p key={index}>{item}</p>)}

          <span>{t("prerequisites")}</span>
          <ul>
            {data?.prerequisites.map((item, index) => (
              <li key={index}>
                {t(item.ability_score.index)}: {item.minimum_score}
              </li>
            ))}
          </ul>
        </S.FeatsCardContent>
      )}
    </S.FeatsCardContainer>
  );
}
