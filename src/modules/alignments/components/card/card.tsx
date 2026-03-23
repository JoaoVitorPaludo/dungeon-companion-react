import { Loading3D } from "../../../../commons/animations/d20-dice";
import * as S from "./styles";
import { useCard } from "./use-card";
export function AlignmentCard() {
  const { data, t, url, isLoading } = useCard();

  return (
    <S.AlignmentsCardContainer>
      {isLoading ? (
        <S.AlignmentsCardNoDataContainer>
          <Loading3D />
          Loading...
        </S.AlignmentsCardNoDataContainer>
      ) : (
        <S.AlignmentsCardContent>
          <h2>{t(url.pathname.split("/").slice(-1)[0])}</h2>
          <S.DescriptionContainer>
            <S.Section>
              <h2>{t("description")}</h2>
              <ul>
                <li>{data?.desc}</li>
              </ul>
            </S.Section>
          </S.DescriptionContainer>
        </S.AlignmentsCardContent>
      )}
    </S.AlignmentsCardContainer>
  );
}
