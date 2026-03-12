import { PROFICIENCIES_DETAIL_PATH } from "../../../app/routes/routes.constants";
import { Loading3D } from "../../../commons/animations/d20-dice";
import {
  cardVariants,
  listVariants,
} from "../../../commons/animations/variants";
import { SearchField } from "../../../components/ui/search-field/search-field";
import {
  PROFICIENCIES_FALLBACK_ICON,
  PROFICIENCIES_ICONS,
} from "./proficiencies.constants";
import * as S from "./styles";
import { Proficiency, useProficiencies } from "./use-proficiencies";
export function Proficiencies() {
  const { data, isLoading, theme, t, navigate } = useProficiencies();
  return (
    <S.ProficienciesContainer>
      <SearchField width="25%" handleSearch={(e) => console.log(e)} />
      {isLoading && (
        <S.ProficienciesNoDataContainer>
          <Loading3D />
          Loading...
        </S.ProficienciesNoDataContainer>
      )}
      <S.ProficienciesCardsContainer
        key={String(isLoading)}
        variants={listVariants}
        initial="hidden"
        animate="visible"
      >
        {data?.map((item: Proficiency) => {
          const Icon =
            PROFICIENCIES_ICONS[item.index] ?? PROFICIENCIES_FALLBACK_ICON;

          return (
            <S.ProficienciesCardContainer
              key={item.index}
              variants={cardVariants}
              onClick={() =>
                navigate(PROFICIENCIES_DETAIL_PATH.replace(":id", item.index))
              }
            >
              <Icon size={25} color={theme["green-500"]} />
              <span>{t(item.index)}</span>
            </S.ProficienciesCardContainer>
          );
        })}
      </S.ProficienciesCardsContainer>
    </S.ProficienciesContainer>
  );
}
