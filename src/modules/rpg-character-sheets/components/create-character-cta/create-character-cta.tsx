import { PlusCircle } from "lucide-react";
import { useTranslation } from "react-i18next";
import * as S from "./styles";
import type { CreateCharacterCtaProps } from "./create-character-cta.types";

export function CreateCharacterCta({
  onClick,
}: CreateCharacterCtaProps) {
  const { t } = useTranslation("rpgCharacterSheets");

  return (
    <S.CreateCharacterCtaContainer onClick={onClick} type="button">
      <S.CreateCharacterCtaIcon>
        <PlusCircle size={34} />
      </S.CreateCharacterCtaIcon>
      <S.CreateCharacterCtaTitle>{t("createCharacterCta")}</S.CreateCharacterCtaTitle>
    </S.CreateCharacterCtaContainer>
  );
}
