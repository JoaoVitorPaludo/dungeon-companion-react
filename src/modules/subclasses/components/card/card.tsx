import { CLASSES_DETAIL_PATH } from "../../../../app/routes/routes.constants";
import { Loading3D } from "../../../../commons/animations/d20-dice";
import { BadgeComponent } from "../../../../components/ui/badge/badge";
import * as S from "./styles";
import { useCard } from "./use-card";

export function SubclassesCard() {
  const { data, t, url, isLoading, navigate } = useCard();

  return (
    <S.SubclassesCardContainer>
      {isLoading ? (
        <S.SubclassesCardNoDataContainer>
          <Loading3D />
          Loading...
        </S.SubclassesCardNoDataContainer>
      ) : (
        <S.SubclassesCardContent>
          <h2> {t(url.pathname.split("/").slice(-1)[0])}</h2>
          {data?.class && (
            <S.BadgeContainer>
              <BadgeComponent
                variant="primary"
                size="small"
                onClick={() =>
                  navigate(CLASSES_DETAIL_PATH.replace(":id", data.class.index))
                }
              >
                {data.class.name}
              </BadgeComponent>
            </S.BadgeContainer>
          )}
          <S.DescriptionContainer>
            <S.Section>
              <h3>{t("description")}</h3>
              <ul>
                {data?.desc.map((item, index) => <li key={index}>{item}</li>)}
              </ul>
            </S.Section>
          </S.DescriptionContainer>
        </S.SubclassesCardContent>
      )}
    </S.SubclassesCardContainer>
  );
}
