import { MAGIC_ITEMS_DETAIL_PATH } from "../../../app/routes/routes.constants";
import { Loading3D } from "../../../commons/animations/d20-dice";
import {
  cardVariants,
  listVariants,
} from "../../../commons/animations/variants";
import { SearchField } from "../../../components/ui/search-field/search-field";
import {
  MAGIC_ITEMS_FALLBACK_ICON,
  MAGIC_ITEMS_ICONS,
} from "./magic-items.constants";
import * as S from "./styles";
import { Item, useItems } from "./use-magic-items";
export function MagicItems() {
  const { data, isLoading, theme, t, navigate } = useItems();
  return (
    <S.MagicItemsContainer>
      <SearchField width="25%" handleSearch={(e) => console.log(e)} />
      {isLoading && (
        <S.MagicItemsNoDataContainer>
          <Loading3D />
          Loading...
        </S.MagicItemsNoDataContainer>
      )}
      <S.MagicItemsCardsContainer
        key={String(isLoading)}
        variants={listVariants}
        initial="hidden"
        animate="visible"
      >
        {data?.map((item: Item) => {
          const Icon =
            MAGIC_ITEMS_ICONS[item.index] ?? MAGIC_ITEMS_FALLBACK_ICON;

          return (
            <S.MagicItemsCardContainer
              key={item.index}
              variants={cardVariants}
              onClick={() =>
                navigate(MAGIC_ITEMS_DETAIL_PATH.replace(":id", item.index))
              }
            >
              <Icon size={25} color={theme["green-500"]} />
              <span>{t(item.index)}</span>
            </S.MagicItemsCardContainer>
          );
        })}
      </S.MagicItemsCardsContainer>
    </S.MagicItemsContainer>
  );
}
