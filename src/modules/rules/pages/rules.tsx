import { RULES_DETAIL_PATH } from "../../../app/routes/routes.constants";
import { Loading3D } from "../../../commons/animations/d20-dice";
import {
  cardVariants,
  listVariants,
} from "../../../commons/animations/variants";
import { SearchField } from "../../../components/ui/search-field/search-field";
import { RULES_FALLBACK_ICON, RULES_ICONS } from "./rules.constants";
import * as S from "./styles";
import { Rule, useRules } from "./use-rules";
export function Rules() {
  const { data, isLoading, theme, t, navigate } = useRules();
  return (
    <S.RulesContainer>
      <SearchField width="25%" handleSearch={(e) => console.log(e)} />
      {isLoading && (
        <S.RulesNoDataContainer>
          <Loading3D />
          Loading...
        </S.RulesNoDataContainer>
      )}
      <S.RulesCardsContainer
        key={String(isLoading)}
        variants={listVariants}
        initial="hidden"
        animate="visible"
      >
        {data?.map((item: Rule) => {
          const Icon = RULES_ICONS[item.index] ?? RULES_FALLBACK_ICON;

          return (
            <S.RulesCardContainer
              key={item.index}
              variants={cardVariants}
              onClick={() =>
                navigate(RULES_DETAIL_PATH.replace(":id", item.index))
              }
            >
              <Icon size={25} color={theme["green-500"]} />
              <span>{t(item.index)}</span>
            </S.RulesCardContainer>
          );
        })}
      </S.RulesCardsContainer>
    </S.RulesContainer>
  );
}
