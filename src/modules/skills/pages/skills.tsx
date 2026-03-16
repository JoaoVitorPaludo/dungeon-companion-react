import { SKILLS_DETAIL_PATH } from "../../../app/routes/routes.constants";
import { Loading3D } from "../../../commons/animations/d20-dice";
import {
  cardVariants,
  listVariants,
} from "../../../commons/animations/variants";
import { SearchField } from "../../../components/ui/search-field/search-field";
import { SKILLS_FALLBACK_ICON, SKILLS_ICONS } from "./skills.constants";
import * as S from "./styles";
import { Skill } from "./use-skills";
import { useSkills } from "./use-skills";
export function Skills() {
  const { data, isLoading, theme, t, navigate } = useSkills();
  return (
    <S.SkillsContainer>
      <SearchField width="25%" handleSearch={(e) => console.log(e)} />
      {isLoading && (
        <S.SkillsNoDataContainer>
          <Loading3D />
          Loading...
        </S.SkillsNoDataContainer>
      )}
      <S.SkillsCardsContainer
        key={String(isLoading)}
        variants={listVariants}
        initial="hidden"
        animate="visible"
      >
        {data?.map((item: Skill) => {
          const Icon = SKILLS_ICONS[item.index] ?? SKILLS_FALLBACK_ICON;

          return (
            <S.SkillsCardContainer
              key={item.index}
              variants={cardVariants}
              onClick={() =>
                navigate(SKILLS_DETAIL_PATH.replace(":id", item.index))
              }
            >
              <Icon size={25} color={theme["green-500"]} />
              <span>{t(item.index)}</span>
            </S.SkillsCardContainer>
          );
        })}
      </S.SkillsCardsContainer>
    </S.SkillsContainer>
  );
}
