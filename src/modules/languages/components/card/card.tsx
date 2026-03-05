import { Loading3D } from "../../../../commons/animations/d20-dice";
import * as S from "./styles";
import { useCard } from "./use-card";
export function LanguagesCard() {
  const { data, t, url, isLoading } = useCard();

  return (
    <S.LanguagesCardContainer>
      {isLoading ? (
        <S.LanguagesCardNoDataContainer>
          <Loading3D />
          Loading...
        </S.LanguagesCardNoDataContainer>
      ) : (
        <S.LanguagesCardContent>
          <h2>{t(url.pathname.split("/").slice(-1)[0])}</h2>
          <span>{t("description")}</span>
          <p>{data?.desc || t("no-description")}</p>
          <span>{t("typical-speakers")}</span>
          <p>{data?.typical_speakers.join(", ")}</p>
        </S.LanguagesCardContent>
      )}
    </S.LanguagesCardContainer>
  );
}
