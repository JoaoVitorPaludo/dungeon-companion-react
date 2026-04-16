import { PlusCircle } from "lucide-react";
import * as S from "./styles";
import type { CreateCharacterCtaProps } from "./create-character-cta.types";

export function CreateCharacterCta({
  onClick,
}: CreateCharacterCtaProps) {
  return (
    <S.CreateCharacterCtaContainer onClick={onClick} type="button">
      <S.CreateCharacterCtaIcon>
        <PlusCircle size={34} />
      </S.CreateCharacterCtaIcon>
      <S.CreateCharacterCtaTitle>Criar novo heroi</S.CreateCharacterCtaTitle>
    </S.CreateCharacterCtaContainer>
  );
}
