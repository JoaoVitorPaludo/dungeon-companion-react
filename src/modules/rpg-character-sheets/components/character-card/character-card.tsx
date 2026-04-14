import { ArrowRight, Shield, Sparkles, Sword } from "lucide-react";
import characterPlaceholder from "../../../../assets/character-placeholder.svg";
import * as S from "./styles";
import type { CharacterCardProps } from "./character-card.types";

export function CharacterCard({
  character,
  onOpen,
}: CharacterCardProps) {
  return (
    <S.CharacterCardContainer
      animate="visible"
      initial="hidden"
      onClick={() => onOpen(character.id)}
      type="button"
      variants={S.cardVariants}
    >
      <S.CharacterCardPortraitContainer>
        <S.CharacterCardPortrait
          alt={
            character.imageUrl
              ? `Retrato de ${character.name}`
              : `Imagem base indicando que o retrato de ${character.name} nao foi anexado`
          }
          loading="lazy"
          src={character.imageUrl ?? characterPlaceholder}
        />
      </S.CharacterCardPortraitContainer>

      <S.CharacterCardContent>
        <S.CharacterCardHeader>
          <S.CharacterCardBadge>
            <Sparkles size={14} />
            {character.campaign}
          </S.CharacterCardBadge>
          <S.CharacterCardArrow>
            <ArrowRight size={18} />
          </S.CharacterCardArrow>
        </S.CharacterCardHeader>

        <S.CharacterCardName>{character.name}</S.CharacterCardName>

        <S.CharacterCardMetaList>
          <S.CharacterCardMetaItem>
            <Shield size={16} />
            <span>Raca: {character.race}</span>
          </S.CharacterCardMetaItem>
          <S.CharacterCardMetaItem>
            <Sword size={16} />
            <span>Classe: {character.characterClass}</span>
          </S.CharacterCardMetaItem>
        </S.CharacterCardMetaList>

        <S.CharacterCardFooter>
          <S.CharacterCardLevel>Level {character.level}</S.CharacterCardLevel>
          <S.CharacterCardUpdatedAt>
            {character.updatedAt}
          </S.CharacterCardUpdatedAt>
        </S.CharacterCardFooter>
      </S.CharacterCardContent>
    </S.CharacterCardContainer>
  );
}
