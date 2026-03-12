import { RACES_DETAIL_PATH } from "../../../app/routes/routes.constants";
import { Loading3D } from "../../../commons/animations/d20-dice";
import {
  cardVariants,
  listVariants,
} from "../../../commons/animations/variants";
import { SearchField } from "../../../components/ui/search-field/search-field";
import { RACES_FALLBACK_ICON, RACES_ICONS } from "./races.constants";
import * as S from "./styles";
import { Race, useRaces } from "./use-races";
export function Races() {
  const { data, isLoading, theme, t, navigate } = useRaces();
  return (
    <S.RacesContainer>
      <SearchField width="25%" handleSearch={(e) => console.log(e)} />
      {isLoading && (
        <S.RacesNoDataContainer>
          <Loading3D />
          Loading...
        </S.RacesNoDataContainer>
      )}
      <S.RacesCardsContainer
        key={String(isLoading)}
        variants={listVariants}
        initial="hidden"
        animate="visible"
      >
        {data?.map((item: Race) => {
          const Icon = RACES_ICONS[item.index] ?? RACES_FALLBACK_ICON;

          return (
            <S.RacesCardContainer
              key={item.index}
              variants={cardVariants}
              onClick={() =>
                navigate(RACES_DETAIL_PATH.replace(":id", item.index))
              }
            >
              <Icon size={25} color={theme["green-500"]} />
              <span>{t(item.index)}</span>
            </S.RacesCardContainer>
          );
        })}
      </S.RacesCardsContainer>
    </S.RacesContainer>
  );
}
