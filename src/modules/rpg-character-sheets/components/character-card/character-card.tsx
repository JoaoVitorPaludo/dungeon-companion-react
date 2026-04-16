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
        <S.CharacterCardName>{character.name}</S.CharacterCardName>
        <S.CharacterCardClassLevel>
          {character.characterClass} Nivel {character.level}
        </S.CharacterCardClassLevel>
      </S.CharacterCardContent>
    </S.CharacterCardContainer>
  );
}
