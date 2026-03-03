import { FEATS_DETAIL_PATH } from "../../../app/routes/routes.constants";
import { Loading3D } from "../../../commons/animations/d20-dice";
import {
  cardVariants,
  listVariants,
} from "../../../commons/animations/variants";
import { SearchField } from "../../../components/ui/search-field/search-field";
import { FEATS_FALLBACK_ICON, FEATS_ICONS } from "./feats.constants";
import * as S from "./styles";
import { Feat, useFeats } from "./use-feats";
export function Feats() {
  const { data, isLoading, theme, t, navigate } = useFeats();
  return (
    <S.FeatsContainer>
      <SearchField width="25%" handleSearch={(e) => console.log(e)} />
      {isLoading && (
        <S.FeatsNoDataContainer>
          <Loading3D />
          Loading...
        </S.FeatsNoDataContainer>
      )}
      <S.FeatsCardsContainer
        key={String(isLoading)}
        variants={listVariants}
        initial="hidden"
        animate="visible"
      >
        {data?.map((item: Feat) => {
          const Icon = FEATS_ICONS[item.index] ?? FEATS_FALLBACK_ICON;

          return (
            <S.FeatsCardContainer
              key={item.index}
              variants={cardVariants}
              onClick={() =>
                navigate(FEATS_DETAIL_PATH.replace(":id", item.index))
              }
            >
              <Icon size={25} color={theme["green-500"]} />
              <span>{t(item.index)}</span>
            </S.FeatsCardContainer>
          );
        })}
      </S.FeatsCardsContainer>
    </S.FeatsContainer>
  );
}
