import { Loading3D } from "../../../../commons/animations/d20-dice";
import * as S from "./styles";
import { useCard } from "./use-card";

export function RuleSectionCard() {
  const { data, t, url, isLoading } = useCard();

  return (
    <S.RuleSectionCardContainer>
      {isLoading ? (
        <S.RuleSectionCardNoDataContainer>
          <Loading3D />
          Loading...
        </S.RuleSectionCardNoDataContainer>
      ) : (
        <S.RuleSectionCardContent>
          <h2>{t(url.pathname.split("/").slice(-1)[0])}</h2>
          <S.DescriptionContainer>
            <S.Section>
              <h3>{t("description")}</h3>
              <p>{data?.desc}</p>
            </S.Section>
          </S.DescriptionContainer>
        </S.RuleSectionCardContent>
      )}
    </S.RuleSectionCardContainer>
  );
}
