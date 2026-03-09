import { Loading3D } from "../../../../commons/animations/d20-dice";
import * as S from "./styles";
import { useCard } from "./use-card";

export function MagicSchoolsCard() {
  const { data, t, url, isLoading } = useCard();

  return (
    <S.SchoolsCardContainer>
      {isLoading ? (
        <S.SchoolsCardNoDataContainer>
          <Loading3D />
          Loading...
        </S.SchoolsCardNoDataContainer>
      ) : (
        <S.SchoolsCardContent>
          <h2>{t(url.pathname.split("/").slice(-1)[0])}</h2>

          <S.DescriptionContainer>
            <span>{t("description")}</span>
            <p>{data?.desc}</p>
          </S.DescriptionContainer>
        </S.SchoolsCardContent>
      )}
    </S.SchoolsCardContainer>
  );
}
