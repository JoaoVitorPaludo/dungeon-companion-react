import { Loading3D } from "../../../../commons/animations/d20-dice";
import { AccordionComponent } from "../../../../components/ui/accordion/accordion";
import * as S from "./styles";
import { useCard } from "./use-card";
import { SkillAccordionContent } from "../skills/skills";

export function AbilityScoreCard() {
  const { data, t, url, isLoading, tSkills } = useCard();

  return (
    <S.AbilityScoresCardContainer>
      {isLoading ? (
        <S.AbilityScoresCardNoDataContainer>
          <Loading3D />
        </S.AbilityScoresCardNoDataContainer>
      ) : (
        <S.AbilityScoresCardContent>
          <h2>{t(url.pathname.split("/").slice(-1)[0])}</h2>
          <S.DescriptionContainer>
            <S.Section>
              <h2>{t("description")}</h2>
              <ul>
                {data?.desc.map((item, index) => <li key={index}>{item}</li>)}
              </ul>
            </S.Section>
          </S.DescriptionContainer>
          <S.Section>
            {data?.skills.length === 0 ? (
              <p>{t("noRelatedSkills")}</p>
            ) : (
              <h2>{t("skills")}</h2>
            )}

            {data?.skills.map((skill) => (
              <AccordionComponent
                type="single"
                collapsible
                value={skill.index}
                trigger={tSkills(skill.index) || skill.name}
              >
                <SkillAccordionContent skillIndex={skill.index} />
              </AccordionComponent>
            ))}
          </S.Section>
        </S.AbilityScoresCardContent>
      )}
    </S.AbilityScoresCardContainer>
  );
}
