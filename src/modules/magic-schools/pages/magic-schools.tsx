import { MAGIC_SCHOOLS_DETAIL_PATH } from "../../../app/routes/routes.constants";
import { Loading3D } from "../../../commons/animations/d20-dice";
import {
  cardVariants,
  listVariants,
} from "../../../commons/animations/variants";
import { SearchField } from "../../../components/ui/search-field/search-field";
import {
  MAGIC_SCHOOLS_FALLBACK_ICON,
  MAGIC_SCHOOLS_ICONS,
} from "./magic-schools.constants";
import * as S from "./styles";
import { School, useMagicSchools } from "./use-magic-schools";
export function MagicSchools() {
  const { data, isLoading, theme, t, navigate } = useMagicSchools();
  return (
    <S.MagicSchoolsContainer>
      <SearchField width="25%" handleSearch={(e) => console.log(e)} />
      {isLoading && (
        <S.MagicSchoolsNoDataContainer>
          <Loading3D />
          Loading...
        </S.MagicSchoolsNoDataContainer>
      )}
      <S.MagicSchoolsCardsContainer
        key={String(isLoading)}
        variants={listVariants}
        initial="hidden"
        animate="visible"
      >
        {data?.map((item: School) => {
          const Icon =
            MAGIC_SCHOOLS_ICONS[item.index] ?? MAGIC_SCHOOLS_FALLBACK_ICON;

          return (
            <S.MagicSchoolsCardContainer
              key={item.index}
              variants={cardVariants}
              onClick={() =>
                navigate(MAGIC_SCHOOLS_DETAIL_PATH.replace(":id", item.index))
              }
            >
              <Icon size={25} color={theme["green-500"]} />
              <span>{t(item.index)}</span>
            </S.MagicSchoolsCardContainer>
          );
        })}
      </S.MagicSchoolsCardsContainer>
    </S.MagicSchoolsContainer>
  );
}
