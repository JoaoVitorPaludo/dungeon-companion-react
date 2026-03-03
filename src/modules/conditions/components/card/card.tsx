import { Loading3D } from "../../../../commons/animations/d20-dice";
import * as S from "./styles";
import { useCard } from "./use-card";
export function ConditionsCard() {
  const { data, t, url, isLoading } = useCard();

  return (
    <S.ClassesCardContainer>
      {isLoading ? (
        <S.ClassesCardNoDataContainer>
          <Loading3D />
          Loading...
        </S.ClassesCardNoDataContainer>
      ) : (
        <S.ClassesCardContent>
          <h2>{t(url.pathname.split("/").slice(-1)[0])}</h2>
          <span>{t("description")}</span>
          {data?.desc.map((desc) => (
            <p key={desc}>
              {desc}
              <br />
            </p>
          ))}
        </S.ClassesCardContent>
      )}
    </S.ClassesCardContainer>
  );
}
