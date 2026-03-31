import { Loading3D } from "../../../../commons/animations/d20-dice";
import * as S from "./styles";
import { useCard } from "./use-card";
export function ConditionsCard() {
  const { data, t, url, isLoading } = useCard();

  return (
    <S.ConditionsCardContainer>
      {isLoading ? (
        <S.ConditionsCardNoDataContainer>
          <Loading3D />
          Loading...
        </S.ConditionsCardNoDataContainer>
      ) : (
        <S.ConditionsCardContent>
          <h2>{t(url.pathname.split("/").slice(-1)[0])}</h2>
          <S.Section>
            <h2>{t("description")}</h2>
            <ul>{data?.desc.map((desc) => <li key={desc}>{desc}</li>)}</ul>
          </S.Section>
        </S.ConditionsCardContent>
      )}
    </S.ConditionsCardContainer>
  );
}
