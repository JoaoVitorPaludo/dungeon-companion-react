import { Loading3D } from "../../../../commons/animations/d20-dice";
import * as S from "./styles";
import { useCard } from "./use-card";
import { BadgeComponent } from "../../../../components/ui/badge/badge";
import { AccordionComponent } from "../../../../components/ui/accordion/accordion";
import { ProficienciesAccordionContent } from "../proficiencies/proficiencies";
import { EquipmentOptionsAccordionContent } from "../equipment-options/equipment-options";
import {
  EQUIPMENT_DETAIL_PATH,
  SUBCLASSES_DETAIL_PATH,
} from "../../../../app/routes/routes.constants";
export function ClassesCard() {
  const { data, t, url, isLoading, navigate } = useCard();

  return (
    <S.ClassesCardContainer>
      {isLoading ? (
        <S.ClassesCardNoDataContainer>
          <Loading3D />
          Loading...
        </S.ClassesCardNoDataContainer>
      ) : (
        <S.ClassesCardContent>
          <h2>{t(url.pathname.split("/").slice(-1)[0])}</h2>
          <S.Section>
            <h2>{t("hit_dice")}</h2>
            <S.ClassesHitDiceContainer>
              <BadgeComponent variant="primary" size="small">
                1d{data?.hit_die}
              </BadgeComponent>
            </S.ClassesHitDiceContainer>
          </S.Section>

          <S.Section>
            <h2>{t("proficiencies_choices")}</h2>
            <ul>
              {data?.proficiency_choices?.map((item, index) => (
                <li key={index}>{item.desc}</li>
              ))}
            </ul>
          </S.Section>
          <S.Section>
            <h2>{t("proficiencies")}</h2>
            {data?.proficiencies.map((proficiency) => (
              <AccordionComponent
                type="single"
                collapsible
                value={proficiency.index}
                trigger={proficiency.name}
              >
                <ProficienciesAccordionContent
                  proficiencyIndex={proficiency.index}
                />
              </AccordionComponent>
            ))}
          </S.Section>
          <S.Section>
            <h2>{t("starting_equipment_options")}</h2>
            {data?.starting_equipment_options.map((equipment) => (
              <AccordionComponent
                type="single"
                collapsible
                value={equipment.desc}
                trigger={equipment.desc}
              >
                <EquipmentOptionsAccordionContent from={equipment.from} />
              </AccordionComponent>
            ))}
          </S.Section>
          <S.SectionListStyle>
            <h2>{t("saving_throws")}</h2>
            <ul>
              {data?.saving_throws.map((item, index) => (
                <li key={index}>{item.name}</li>
              ))}
            </ul>
          </S.SectionListStyle>
          <S.SectionLinkListStyle>
            <h2>{t("starting_equipment")}</h2>
            <ul>
              {data?.starting_equipment.map((item, index) => (
                <li
                  key={index}
                  onClick={() =>
                    navigate(
                      EQUIPMENT_DETAIL_PATH.replace(
                        ":id",
                        item.equipment.index,
                      ),
                    )
                  }
                >
                  {item.quantity}x - {item.equipment.name}
                </li>
              ))}
            </ul>
          </S.SectionLinkListStyle>
          <S.SectionLinkListStyle>
            <h2>{t("subclasses")}</h2>
            <ul>
              {data?.subclasses.map((item, index) => (
                <li
                  key={index}
                  onClick={() =>
                    navigate(SUBCLASSES_DETAIL_PATH.replace(":id", item.index))
                  }
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </S.SectionLinkListStyle>
        </S.ClassesCardContent>
      )}
    </S.ClassesCardContainer>
  );
}
