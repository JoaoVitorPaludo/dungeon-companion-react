import { Loading3D } from "../../../../commons/animations/d20-dice";
import { BadgeComponent } from "../../../../components/ui/badge/badge";
import * as S from "./styles";
import { useCard } from "./use-card";

export function MagicItemsCard() {
  const { data, t, url, isLoading, imageUrl } = useCard();

  return (
    <S.ItemsCardContainer>
      {isLoading ? (
        <S.ItemsCardNoDataContainer>
          <Loading3D />
          Loading...
        </S.ItemsCardNoDataContainer>
      ) : (
        <S.ItemsCardContent>
          <h2>{data?.name || t(url.pathname.split("/").slice(-1)[0])}</h2>

          <S.ItemHeader>
            {imageUrl && (
              <S.ImageContainer>
                <img src={imageUrl} alt={data?.name} />
              </S.ImageContainer>
            )}

            <S.DetailsContainer>
              <S.BadgeContainer>
                {data?.rarity && (
                  <BadgeComponent variant="primary">
                    {data.rarity.name}
                  </BadgeComponent>
                )}
                {data?.equipment_category && (
                  <BadgeComponent variant="secondary">
                    {data.equipment_category.name}
                  </BadgeComponent>
                )}
              </S.BadgeContainer>
            </S.DetailsContainer>
          </S.ItemHeader>

          <S.DescriptionContainer>
            <span>{t("description")}</span>
            <ul>
              {data?.desc?.map((desc, index) => <li key={index}>{desc}</li>)}
            </ul>
          </S.DescriptionContainer>
        </S.ItemsCardContent>
      )}
    </S.ItemsCardContainer>
  );
}
