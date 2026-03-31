import { Loading3D } from "../../../../commons/animations/d20-dice";
import { AccordionComponent } from "../../../../components/ui/accordion/accordion";
import { ProficienciesAccordionContent } from "../proficiencies/proficiencies";
import * as S from "./styles";
import { useCard } from "./use-card";
export function BackgroundCard() {
  const { data, t, url, isLoading, tSkills } = useCard();

  return (
    <S.BackgroundCardContainer>
      {isLoading ? (
        <S.BackgroundCardNoDataContainer>
          <Loading3D />
          Loading...
        </S.BackgroundCardNoDataContainer>
      ) : (
        <S.BackgroundCardContent>
          <h2>{t(url.pathname.split("/").slice(-1)[0])}</h2>
          <S.Section>
            <h2>
              {" "}
              {t("feature")}: {data?.feature.name}
            </h2>
            <ul>
              {data?.feature.desc.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </S.Section>
          <S.SectionListStyle>
            <h2>{t("bonds")}</h2>
            <ul>
              {data?.bonds.from?.options.map((item, index) => (
                <li key={index}>{item.string}</li>
              ))}
            </ul>
          </S.SectionListStyle>
          <S.SectionListStyle>
            <h2>{t("flaws")}</h2>
            <ul>
              {data?.flaws.from?.options.map((item, index) => (
                <li key={index}>{item.string}</li>
              ))}
            </ul>
          </S.SectionListStyle>
          <S.SectionListStyle>
            <h2>{t("ideals")}</h2>
            <ul>
              {data?.ideals.from?.options.map((item, index) => (
                <li key={index}>{item.desc}</li>
              ))}
            </ul>
          </S.SectionListStyle>
          <S.SectionListStyle>
            <h2>{t("personality_traits")}</h2>
            <ul>
              {data?.personality_traits.from?.options.map((item, index) => (
                <li key={index}>{item.string}</li>
              ))}
            </ul>
          </S.SectionListStyle>
          <S.SectionListStyle>
            <h2>{t("starting_equipment")}</h2>
            <ul>
              {data?.starting_equipment?.map((item, index) => (
                <>
                  <li key={index}>Item: {item.equipment.name}</li>
                  <li key={index}>Quantity: {item.quantity}</li>
                </>
              ))}
            </ul>
          </S.SectionListStyle>
          <S.SectionListStyle>
            <h2>{t("starting_equipment_options")}</h2>
            <ul>
              {data?.starting_equipment_options?.map((item, index) => (
                <li key={index}>{item.from.equipment_category.name}</li>
              ))}
            </ul>
          </S.SectionListStyle>
          <S.Section>
            <h2>{t("starting_proficiencies")}</h2>
            {data?.starting_proficiencies?.map((proficiency) => (
              <AccordionComponent
                type="single"
                collapsible
                value={proficiency.index}
                trigger={
                  tSkills(proficiency.index.replace("skill-", "")) ||
                  proficiency.name
                }
                // trigger={proficiency.index || proficiency.name}
              >
                <ProficienciesAccordionContent
                  proficiencyIndex={proficiency.index}
                />
              </AccordionComponent>
            ))}
          </S.Section>
        </S.BackgroundCardContent>
      )}
    </S.BackgroundCardContainer>
  );
}
