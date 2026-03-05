import { FEATURES_DETAIL_PATH } from "../../../app/routes/routes.constants";
import { Loading3D } from "../../../commons/animations/d20-dice";
import {
  cardVariants,
  listVariants,
} from "../../../commons/animations/variants";
import { SearchField } from "../../../components/ui/search-field/search-field";
import { FEATURES_FALLBACK_ICON, FEATURES_ICONS } from "./features.constants";
import * as S from "./styles";
import { Feature, useFeatures } from "./use-features";
export function Features() {
  const { data, isLoading, theme, t, navigate } = useFeatures();
  return (
    <S.FeaturesContainer>
      <SearchField width="25%" handleSearch={(e) => console.log(e)} />
      {isLoading && (
        <S.FeaturesNoDataContainer>
          <Loading3D />
          Loading...
        </S.FeaturesNoDataContainer>
      )}
      <S.FeaturesCardsContainer
        key={String(isLoading)}
        variants={listVariants}
        initial="hidden"
        animate="visible"
      >
        {data?.map((item: Feature) => {
          const Icon = FEATURES_ICONS[item.index] ?? FEATURES_FALLBACK_ICON;

          return (
            <S.FeaturesCardContainer
              key={item.index}
              variants={cardVariants}
              onClick={() =>
                navigate(FEATURES_DETAIL_PATH.replace(":id", item.index))
              }
            >
              <Icon size={25} color={theme["green-500"]} />
              <span>{t(item.index)}</span>
            </S.FeaturesCardContainer>
          );
        })}
      </S.FeaturesCardsContainer>
    </S.FeaturesContainer>
  );
}
