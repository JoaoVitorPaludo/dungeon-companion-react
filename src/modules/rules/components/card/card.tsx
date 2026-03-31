import { Loading3D } from "../../../../commons/animations/d20-dice";
import { AccordionComponent } from "../../../../components/ui/accordion/accordion";
import { SubsectionsAccordionContent } from "../subsections/subsections";
import * as S from "./styles";
import { useCard } from "./use-card";

export function RulesCard() {
  const { data, t, url, isLoading, ruleSections } = useCard();

  return (
    <S.RulesCardContainer>
      {isLoading ? (
        <S.RulesCardNoDataContainer>
          <Loading3D />
          Loading...
        </S.RulesCardNoDataContainer>
      ) : (
        <S.RulesCardContent>
          <h2>{t(url.pathname.split("/").slice(-1)[0])}</h2>
          <S.DescriptionContainer>
            <S.Section>
              <h3>{t("description")}</h3>
              <p>{data?.desc}</p>
            </S.Section>
          </S.DescriptionContainer>
          <S.Section>
            <h3>{t("subsections")}</h3>
            <ul>
              {data?.subsections.map((subsection) => (
                <AccordionComponent
                  trigger={ruleSections(subsection.index)}
                  type="single"
                  collapsible
                  value={subsection.index}
                >
                  <SubsectionsAccordionContent
                    subSectionsIndex={subsection.index}
                  />
                </AccordionComponent>
              ))}
            </ul>
          </S.Section>
        </S.RulesCardContent>
      )}
    </S.RulesCardContainer>
  );
}
