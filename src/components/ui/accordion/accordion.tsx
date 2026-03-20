import { ChevronDown } from "lucide-react";
import * as S from "./styles";

export interface AccordionItemProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
}

interface AccordionComponentProps extends AccordionItemProps {
  type: "single" | "multiple";
  collapsible?: boolean;
  value: string;
}

export function AccordionComponent({
  type,
  value,
  collapsible = true,
  children,
  trigger,
}: AccordionComponentProps) {
  return (
    <S.AccordionRoot type={type} collapsible={collapsible}>
      <S.AccordionItem value={value}>
        <S.AccordionHeader>
          <S.AccordionTrigger>
            {trigger} <ChevronDown size={18} />
          </S.AccordionTrigger>
        </S.AccordionHeader>
        <S.AccordionContent>{children}</S.AccordionContent>
      </S.AccordionItem>
    </S.AccordionRoot>
  );
}
