import characterPlaceholder from "../../../../assets/character-placeholder.svg";
import { useTranslation } from "react-i18next";
import * as S from "./styles";
import type { CharacterCardProps } from "./character-card.types";

export function CharacterCard({
  character,
  onOpen,
}: CharacterCardProps) {
  const { t } = useTranslation("rpgCharacterSheets");

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
              ? t("characterCard.portraitAltWithImage", {
                  name: character.name,
                })
              : t("characterCard.portraitAltWithoutImage", {
                  name: character.name,
                })
          }
          loading="lazy"
          src={character.imageUrl ?? characterPlaceholder}
        />
      </S.CharacterCardPortraitContainer>

      <S.CharacterCardContent>
        <S.CharacterCardName>{character.name}</S.CharacterCardName>
        <S.CharacterCardClassLevel>
          {t("characterCard.classLevel", {
            className: character.characterClass,
            level: character.level,
          })}
        </S.CharacterCardClassLevel>
      </S.CharacterCardContent>
    </S.CharacterCardContainer>
  );
}
