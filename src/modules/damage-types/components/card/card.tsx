import { Loading3D } from "../../../../commons/animations/d20-dice";
import * as S from "./styles";
import { useCard } from "./use-card";

export function DamageTypesCard() {
  const { data, t, url, isLoading } = useCard();

  return (
    <S.DamageTypesCardContainer>
      {isLoading ? (
        <S.DamageTypesCardNoDataContainer>
          <Loading3D />
          Loading...
        </S.DamageTypesCardNoDataContainer>
      ) : (
        <S.DamageTypesCardContent>
          <h2>{t(url.pathname.split("/").slice(-1)[0])}</h2>
          <span>{t("description")}</span>
          {data?.desc.map((desc) => (
            <p key={desc}>
              {desc}
              <br />
            </p>
          ))}
        </S.DamageTypesCardContent>
      )}
    </S.DamageTypesCardContainer>
  );
}
