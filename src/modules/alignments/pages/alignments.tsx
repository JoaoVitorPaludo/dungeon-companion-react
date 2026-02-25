import { ALIGNMENTS_DETAIL_PATH } from "../../../app/routes/routes.constants";
import { Loading3D } from "../../../commons/animations/d20-dice";
import {
  cardVariants,
  listVariants,
} from "../../../commons/animations/variants";
import { SearchField } from "../../../components/ui/search-field/search-field";
import {
  ALIGNMENTS_FALLBACK_ICON,
  ALIGNMENTS_ICONS,
} from "./alignments.constants";
import * as S from "./styles";
import { Alignment, useAlignments } from "./use-alignments";
export function Alignments() {
  const { data, isLoading, theme, t, navigate } = useAlignments();
  return (
    <S.AlignmentsContainer>
      <SearchField width="25%" handleSearch={(e) => console.log(e)} />
      {isLoading && (
        <S.AlignmentsNoDataContainer>
          <Loading3D />
          Loading...
        </S.AlignmentsNoDataContainer>
      )}
      <S.AlignmentsCardsContainer
        key={String(isLoading)}
        variants={listVariants}
        initial="hidden"
        animate="visible"
      >
        {data?.map((item: Alignment) => {
          const Icon = ALIGNMENTS_ICONS[item.index] ?? ALIGNMENTS_FALLBACK_ICON;

          return (
            <S.AlignmentsCardContainer
              key={item.index}
              variants={cardVariants}
              onClick={() =>
                navigate(ALIGNMENTS_DETAIL_PATH.replace(":id", item.index))
              }
            >
              <Icon size={25} color={theme["green-500"]} />
              <span>{t(item.index)}</span>
            </S.AlignmentsCardContainer>
          );
        })}
      </S.AlignmentsCardsContainer>
    </S.AlignmentsContainer>
  );
}
