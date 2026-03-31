import { RULE_SECTIONS_DETAIL_PATH } from "../../../app/routes/routes.constants";
import { Loading3D } from "../../../commons/animations/d20-dice";
import {
  cardVariants,
  listVariants,
} from "../../../commons/animations/variants";
import { SearchField } from "../../../components/ui/search-field/search-field";
import {
  RULE_SECTIONS_FALLBACK_ICON,
  RULE_SECTIONS_ICONS,
} from "./rule-sections.constants";
import * as S from "./styles";
import { RuleSection, useRuleSections } from "./use-rule-sections";
export function RuleSections() {
  const { data, isLoading, theme, t, navigate } = useRuleSections();
  return (
    <S.RuleSectionsContainer>
      <SearchField width="25%" handleSearch={(e) => console.log(e)} />
      {isLoading && (
        <S.RuleSectionsNoDataContainer>
          <Loading3D />
          Loading...
        </S.RuleSectionsNoDataContainer>
      )}
      <S.RuleSectionsCardsContainer
        key={String(isLoading)}
        variants={listVariants}
        initial="hidden"
        animate="visible"
      >
        {data?.map((item: RuleSection) => {
          const Icon =
            RULE_SECTIONS_ICONS[item.index] ?? RULE_SECTIONS_FALLBACK_ICON;

          return (
            <S.RuleSectionsCardContainer
              key={item.index}
              variants={cardVariants}
              onClick={() =>
                navigate(RULE_SECTIONS_DETAIL_PATH.replace(":id", item.index))
              }
            >
              <Icon size={25} color={theme["green-500"]} />
              <span>{t(item.index)}</span>
            </S.RuleSectionsCardContainer>
          );
        })}
      </S.RuleSectionsCardsContainer>
    </S.RuleSectionsContainer>
  );
}
