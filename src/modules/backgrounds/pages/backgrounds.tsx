import { BACKGROUNDS_DETAIL_PATH } from "../../../app/routes/routes.constants";
import { Loading3D } from "../../../commons/animations/d20-dice";
import {
  cardVariants,
  listVariants,
} from "../../../commons/animations/variants";
import { SearchField } from "../../../components/ui/search-field/search-field";
import {
  BACKGROUNDS_FALLBACK_ICON,
  BACKGROUNDS_ICONS,
} from "./backgrounds.constants";
import * as S from "./styles";
import { Background, useBackgrounds } from "./use-backgrounds";
export function Backgrounds() {
  const { data, isLoading, theme, t, navigate } = useBackgrounds();
  return (
    <S.BackgroundsContainer>
      <SearchField width="25%" handleSearch={(e) => console.log(e)} />
      {isLoading && (
        <S.BackgroundsNoDataContainer>
          <Loading3D />
          Loading...
        </S.BackgroundsNoDataContainer>
      )}
      <S.BackgroundsCardsContainer
        key={String(isLoading)}
        variants={listVariants}
        initial="hidden"
        animate="visible"
      >
        {data?.map((item: Background) => {
          const Icon =
            BACKGROUNDS_ICONS[item.index] ?? BACKGROUNDS_FALLBACK_ICON;

          return (
            <S.BackgroundsCardContainer
              key={item.index}
              variants={cardVariants}
              onClick={() =>
                navigate(BACKGROUNDS_DETAIL_PATH.replace(":id", item.index))
              }
            >
              <Icon size={25} color={theme["green-500"]} />
              <span>{t(item.index)}</span>
            </S.BackgroundsCardContainer>
          );
        })}
      </S.BackgroundsCardsContainer>
    </S.BackgroundsContainer>
  );
}
