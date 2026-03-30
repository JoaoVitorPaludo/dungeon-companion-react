import { useSubsectionsAccordionContent } from "./use-subsections";
import * as S from "./styles";

interface SubsectionsAccordionContentProps {
  subSectionsIndex: string;
}
export function SubsectionsAccordionContent({
  subSectionsIndex,
}: SubsectionsAccordionContentProps) {
  const { data, isLoading, t } =
    useSubsectionsAccordionContent(subSectionsIndex);
  if (isLoading) {
    return <p>{t("loading")}</p>;
  }

  if (!data) {
    return <p>{t("noContent")}</p>;
  }

  return (
    <S.SubsectionsContainer>
      <li>
        <h4>{data.desc}</h4>
      </li>
    </S.SubsectionsContainer>
  );
}
