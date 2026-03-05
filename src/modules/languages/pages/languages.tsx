import { LANGUAGES_DETAIL_PATH } from "../../../app/routes/routes.constants";
import { Loading3D } from "../../../commons/animations/d20-dice";
import {
  cardVariants,
  listVariants,
} from "../../../commons/animations/variants";
import { SearchField } from "../../../components/ui/search-field/search-field";
import {
  LANGUAGES_FALLBACK_ICON,
  LANGUAGES_ICONS,
} from "./languages.constants";
import * as S from "./styles";
import { Language, useLanguages } from "./use-languages";
export function Languages() {
  const { data, isLoading, theme, t, navigate } = useLanguages();
  return (
    <S.LanguagesContainer>
      <SearchField width="25%" handleSearch={(e) => console.log(e)} />
      {isLoading && (
        <S.LanguagesNoDataContainer>
          <Loading3D />
          Loading...
        </S.LanguagesNoDataContainer>
      )}
      <S.LanguagesCardsContainer
        key={String(isLoading)}
        variants={listVariants}
        initial="hidden"
        animate="visible"
      >
        {data?.map((item: Language) => {
          const Icon = LANGUAGES_ICONS[item.index] ?? LANGUAGES_FALLBACK_ICON;

          return (
            <S.LanguagesCardContainer
              key={item.index}
              variants={cardVariants}
              onClick={() =>
                navigate(LANGUAGES_DETAIL_PATH.replace(":id", item.index))
              }
            >
              <Icon size={25} color={theme["green-500"]} />
              <span>{t(item.index)}</span>
            </S.LanguagesCardContainer>
          );
        })}
      </S.LanguagesCardsContainer>
    </S.LanguagesContainer>
  );
}
