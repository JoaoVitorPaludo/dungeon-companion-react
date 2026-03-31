import { useProficiencyAccordionContent } from "./use-proficiencies";
import * as S from "./styles";
import { EQUIPMENT_DETAIL_PATH } from "../../../../app/routes/routes.constants";
export function ProficienciesAccordionContent({
  proficiencyIndex,
}: {
  proficiencyIndex: string;
}) {
  const { data, isLoading, t, navigate } =
    useProficiencyAccordionContent(proficiencyIndex);

  if (isLoading) {
    return <p>{t("loading")}</p>;
  }

  if (!data) {
    return <p>{t("noContent")}</p>;
  }

  return (
    <S.ClassesProficienciesContainer>
      {data?.equipment?.map((item, index: number) => (
        <li
          key={index}
          onClick={() =>
            navigate(EQUIPMENT_DETAIL_PATH.replace(":id", item.index))
          }
        >
          {item.name}
        </li>
      ))}
    </S.ClassesProficienciesContainer>
  );
}
