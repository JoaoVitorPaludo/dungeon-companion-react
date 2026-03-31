import { Loading3D } from "../../../../commons/animations/d20-dice";
import * as S from "./styles";
import { useCard } from "./use-card";
export function EquipmentCategoriesCard() {
  const { data, t, url, isLoading, navigate } = useCard();

  return (
    <S.EquipmentsCategoriesCardContainer>
      {isLoading ? (
        <S.EquipmentsCategoriesCardNoDataContainer>
          <Loading3D />
          Loading...
        </S.EquipmentsCategoriesCardNoDataContainer>
      ) : (
        <S.EquipmentsCategoriesCardContent>
          <h2>{t(url.pathname.split("/").slice(-1)[0])}</h2>
          <S.SectionLinkListStyle>
            <h2>{t("equipment")}</h2>
            <ul>
              {data?.equipment?.map((item) => (
                <li
                  onClick={() => {
                    const [resource, id] = item.url
                      .replace("/api/2014/", "")
                      .split("/");

                    if (!resource || !id) return;

                    navigate(`/${resource}/${id}`);
                  }}
                  key={item.index}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </S.SectionLinkListStyle>
        </S.EquipmentsCategoriesCardContent>
      )}
    </S.EquipmentsCategoriesCardContainer>
  );
}
