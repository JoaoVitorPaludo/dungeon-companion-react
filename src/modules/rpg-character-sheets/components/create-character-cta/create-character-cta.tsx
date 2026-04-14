import { Plus, ScrollText } from "lucide-react";
import * as S from "./styles";
import type { CreateCharacterCtaProps } from "./create-character-cta.types";

export function CreateCharacterCta({
  onClick,
}: CreateCharacterCtaProps) {
  return (
    <S.CreateCharacterCtaContainer>
      <S.CreateCharacterCtaIcon>
        <ScrollText size={24} />
      </S.CreateCharacterCtaIcon>
      <S.CreateCharacterCtaTitle>Nova ficha</S.CreateCharacterCtaTitle>
      <S.CreateCharacterCtaDescription>
        Inicie um novo personagem e prepare o espaco onde a ficha completa de D&D 2014 sera preenchida depois.
      </S.CreateCharacterCtaDescription>
      <S.CreateCharacterCtaButton onClick={onClick} type="button">
        <Plus size={18} />
        Criar personagem
      </S.CreateCharacterCtaButton>
    </S.CreateCharacterCtaContainer>
  );
}
