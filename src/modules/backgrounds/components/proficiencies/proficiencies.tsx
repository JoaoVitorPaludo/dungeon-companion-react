import { useProficiencyAccordionContent } from "./use-proficiencies";

export function ProficienciesAccordionContent({
  proficiencyIndex,
}: {
  proficiencyIndex: string;
}) {
  const { data, isLoading, t } =
    useProficiencyAccordionContent(proficiencyIndex);

  if (isLoading) {
    return <p>{t("global.loading")}</p>;
  }

  if (!data) {
    return <p>{t("global.noContent")}</p>;
  }

  return (
    <ul>
      {data?.desc?.map((item: string, index: number) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
