import { useSkillAccordionContent } from "./use-skills";

export function SkillAccordionContent({ skillIndex }: { skillIndex: string }) {
  const { data, isLoading, t } = useSkillAccordionContent(skillIndex);

  if (isLoading) {
    return <p>{t("loading")}</p>;
  }

  if (!data) {
    return <p>{t("noContent")}</p>;
  }

  return (
    <ul>
      {data?.desc?.map((item: string, index: number) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
