import { MONSTERS_DETAIL_PATH } from "../../../app/routes/routes.constants";
import { Loading3D } from "../../../commons/animations/d20-dice";
import {
  cardVariants,
  listVariants,
} from "../../../commons/animations/variants";
import { SearchField } from "../../../components/ui/search-field/search-field";
import { MONSTERS_FALLBACK_ICON, MONSTERS_ICONS } from "./monsters.constants";
import * as S from "./styles";
import { Monster, useMonsters } from "./use-monsters";
export function Monsters() {
  const { data, isLoading, theme, t, navigate } = useMonsters();
  return (
    <S.MonstersContainer>
      <SearchField width="25%" handleSearch={(e) => console.log(e)} />
      {isLoading && (
        <S.MonstersNoDataContainer>
          <Loading3D />
          Loading...
        </S.MonstersNoDataContainer>
      )}
      <S.MonstersCardsContainer
        key={String(isLoading)}
        variants={listVariants}
        initial="hidden"
        animate="visible"
      >
        {data?.map((item: Monster) => {
          const Icon = MONSTERS_ICONS[item.index] ?? MONSTERS_FALLBACK_ICON;

          return (
            <S.MonstersCardContainer
              key={item.index}
              variants={cardVariants}
              onClick={() =>
                navigate(MONSTERS_DETAIL_PATH.replace(":id", item.index))
              }
            >
              <Icon size={25} color={theme["green-500"]} />
              <span>{t(item.index)}</span>
            </S.MonstersCardContainer>
          );
        })}
      </S.MonstersCardsContainer>
    </S.MonstersContainer>
  );
}
