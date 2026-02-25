import { Loading3D } from "../../../../commons/animations/d20-dice";
import * as S from "./styles";
import { useCard } from "./use-card";
export function AbilityScoreCard() {
  const { data, t, url, isLoading } = useCard();

  return (
    <S.AbilityScoresCardContainer>
      {isLoading ? (
        <S.AbilityScoresCardNoDataContainer>
          <Loading3D />
          Loading...
        </S.AbilityScoresCardNoDataContainer>
      ) : (
        <S.AbilityScoresCardContent>
          <h2>{t(url.pathname.split("/").slice(-1)[0])}</h2>
          <span>{t("description")}</span>
          <ul>
            {data?.desc.map((item, index) => <li key={index}>{item}</li>)}
          </ul>
          {data?.skills.length === 0 ? (
            <p>{t("noRelatedSkills")}</p>
          ) : (
            <span>{t("skills")}</span>
          )}
          <ul>
            {data?.skills.map((skill) => (
              <li key={skill.index}>{t(skill.name)}</li>
            ))}
          </ul>
        </S.AbilityScoresCardContent>
      )}
    </S.AbilityScoresCardContainer>
  );
}
