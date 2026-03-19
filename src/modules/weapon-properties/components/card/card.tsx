import { Loading3D } from "../../../../commons/animations/d20-dice";
import * as S from "./styles";
import { useCard } from "./use-card";

export function WeaponPropertiesCard() {
  const { data, t, url, isLoading } = useCard();

  return (
    <S.WeaponPropertiesCardContainer>
      {isLoading ? (
        <S.WeaponPropertiesCardNoDataContainer>
          <Loading3D />
          Loading...
        </S.WeaponPropertiesCardNoDataContainer>
      ) : (
        <S.WeaponPropertiesCardContent>
          <h2> {t(url.pathname.split("/").slice(-1)[0])}</h2>
          <S.DescriptionContainer>
            <S.Section>
              <h3>{t("description")}</h3>
              <ul>
                {data?.desc.map((item, index) => <li key={index}>{item}</li>)}
              </ul>
            </S.Section>
          </S.DescriptionContainer>
        </S.WeaponPropertiesCardContent>
      )}
    </S.WeaponPropertiesCardContainer>
  );
}
