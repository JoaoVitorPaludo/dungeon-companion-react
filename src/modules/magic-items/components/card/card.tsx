import { EQUIPMENT_CATEGORIES_DETAIL_PATH } from "../../../../app/routes/routes.constants";
import { Loading3D } from "../../../../commons/animations/d20-dice";
import { BadgeComponent } from "../../../../components/ui/badge/badge";
import { useEffect, useState } from "react";
import * as S from "./styles";
import { useCard } from "./use-card";

export function MagicItemsCard() {
  const { data, t, url, isLoading, imageUrl, navigate } = useCard();
  const [hasImageError, setHasImageError] = useState(false);

  useEffect(() => {
    setHasImageError(false);
  }, [imageUrl]);

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
            <S.ImageContainer>
              {imageUrl && !hasImageError ? (
                <img
                  src={imageUrl}
                  alt={data?.name}
                  onError={() => setHasImageError(true)}
                />
              ) : (
                <span>{t("noContent") || "Sem imagem"}</span>
              )}
            </S.ImageContainer>

            <S.DetailsContainer>
              <S.BadgeContainer>
                {data?.rarity && (
                  <BadgeComponent variant="primary">
                    {data.rarity.name}
                  </BadgeComponent>
                )}
                {data?.equipment_category && (
                  <BadgeComponent
                    variant="secondary"
                    onClick={() =>
                      navigate(
                        EQUIPMENT_CATEGORIES_DETAIL_PATH.replace(
                          ":id",
                          data.equipment_category.index,
                        ),
                      )
                    }
                  >
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
