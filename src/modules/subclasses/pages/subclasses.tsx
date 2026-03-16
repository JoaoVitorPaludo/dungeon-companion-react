import { Loading3D } from "../../../commons/animations/d20-dice";
import {
  cardVariants,
  listVariants,
} from "../../../commons/animations/variants";
import { SearchField } from "../../../components/ui/search-field/search-field";
import * as S from "./styles";
import { Subclasse, useSubclasses } from "./use-subclasses";
import {
  SUBCLASSES_FALLBACK_ICON,
  SUBCLASSES_ICONS,
} from "./subclasses.constants";
import { SUBCLASSES_DETAIL_PATH } from "../../../app/routes/routes.constants";

export function Subclasses() {
  const { data, isLoading, theme, t, navigate } = useSubclasses();

  return (
    <S.SubclassesContainer>
      <SearchField width="25%" handleSearch={(e) => console.log(e)} />
      {isLoading && (
        <S.SubclassesNoDataContainer>
          <Loading3D />
          Loading...
        </S.SubclassesNoDataContainer>
      )}
      <S.SubclassesCardsContainer
        key={String(isLoading)}
        variants={listVariants}
        initial="hidden"
        animate="visible"
      >
        {data?.map((item: Subclasse) => {
          const Icon = SUBCLASSES_ICONS[item.index] ?? SUBCLASSES_FALLBACK_ICON;

          return (
            <S.SubclassesCardContainer
              key={item.index}
              variants={cardVariants}
              onClick={() =>
                navigate(SUBCLASSES_DETAIL_PATH.replace(":id", item.index))
              }
            >
              <Icon size={25} color={theme["green-500"]} />
              <span>{t(item.index)}</span>
            </S.SubclassesCardContainer>
          );
        })}
      </S.SubclassesCardsContainer>
    </S.SubclassesContainer>
  );
}
