import { Loading3D } from "../../../../commons/animations/d20-dice";
import { BadgeComponent } from "../../../../components/ui/badge/badge";
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
          <h2>{data?.name || t(url.pathname.split("/").slice(-1)[0])}</h2>

          <S.ItemHeader>
            <S.BadgeContainer>
              {data?.type && (
                <BadgeComponent variant="type">{data.type}</BadgeComponent>
              )}
              {data?.typical_speakers?.map((speaker) => (
                <BadgeComponent key={speaker} variant="speaker">
                  {speaker}
                </BadgeComponent>
              ))}
            </S.BadgeContainer>
          </S.ItemHeader>

          <S.DescriptionContainer>
            {data?.desc && (
              <>
                <span>{t("description")}</span>
                <p>{data.desc}</p>
              </>
            )}
          </S.DescriptionContainer>
        </S.LanguagesCardContent>
      )}
    </S.LanguagesCardContainer>
  );
}
