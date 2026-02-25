import { CLASSES_DETAIL_PATH } from "../../../app/routes/routes.constants";
import { Loading3D } from "../../../commons/animations/d20-dice";
import {
  cardVariants,
  listVariants,
} from "../../../commons/animations/variants";
import { SearchField } from "../../../components/ui/search-field/search-field";
import { CLASSES_FALLBACK_ICON, CLASSES_ICONS } from "./classes.constants";
import * as S from "./styles";
import { Class, useClasses } from "./use-classes";
export function Classes() {
  const { data, isLoading, theme, t, navigate } = useClasses();
  return (
    <S.ClassesContainer>
      <SearchField width="25%" handleSearch={(e) => console.log(e)} />
      {isLoading && (
        <S.ClassesNoDataContainer>
          <Loading3D />
          Loading...
        </S.ClassesNoDataContainer>
      )}
      <S.ClassesCardsContainer
        key={String(isLoading)}
        variants={listVariants}
        initial="hidden"
        animate="visible"
      >
        {data?.map((item: Class) => {
          const Icon = CLASSES_ICONS[item.index] ?? CLASSES_FALLBACK_ICON;

          return (
            <S.ClassesCardContainer
              key={item.index}
              variants={cardVariants}
              onClick={() =>
                navigate(CLASSES_DETAIL_PATH.replace(":id", item.index))
              }
            >
              <Icon size={25} color={theme["green-500"]} />
              <span>{t(item.index)}</span>
            </S.ClassesCardContainer>
          );
        })}
      </S.ClassesCardsContainer>
    </S.ClassesContainer>
  );
}
