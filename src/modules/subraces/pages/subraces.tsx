import { Loading3D } from "../../../commons/animations/d20-dice";
import {
  cardVariants,
  listVariants,
} from "../../../commons/animations/variants";
import { SearchField } from "../../../components/ui/search-field/search-field";
import * as S from "./styles";
import { Subrace, useSubraces } from "./use-subraces";
import { SUBRACES_FALLBACK_ICON, SUBRACES_ICONS } from "./subraces.constants";
import { SUBRACES_DETAIL_PATH } from "../../../app/routes/routes.constants";

export function Subraces() {
  const { data, isLoading, theme, t, navigate } = useSubraces();

  return (
    <S.SubracesContainer>
      <SearchField width="25%" handleSearch={(e) => console.log(e)} />
      {isLoading && (
        <S.SubracesNoDataContainer>
          <Loading3D />
          Loading...
        </S.SubracesNoDataContainer>
      )}
      <S.SubracesCardsContainer
        key={String(isLoading)}
        variants={listVariants}
        initial="hidden"
        animate="visible"
      >
        {data?.map((item: Subrace) => {
          const Icon = SUBRACES_ICONS[item.index] ?? SUBRACES_FALLBACK_ICON;

          return (
            <S.SubracesCardContainer
              key={item.index}
              variants={cardVariants}
              onClick={() =>
                navigate(SUBRACES_DETAIL_PATH.replace(":id", item.index))
              }
            >
              <Icon size={25} color={theme["green-500"]} />
              <span>{t(item.index)}</span>
            </S.SubracesCardContainer>
          );
        })}
      </S.SubracesCardsContainer>
    </S.SubracesContainer>
  );
}
