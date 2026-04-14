import { CharacterCard } from "../../components/character-card/character-card";
import { CreateCharacterCta } from "../../components/create-character-cta/create-character-cta";
import * as S from "./styles";
import { useRpgCharacterSheets } from "./use-rpg-character-sheets";

export function RpgCharacterSheets() {
  const {
    characters,
    description,
    emptyMessage,
    title,
    handleCreateCharacter,
    handleOpenCharacter,
  } = useRpgCharacterSheets();

  return (
    <S.RpgCharacterSheetsContainer>
      <S.CharacterListContainer>
        <S.CharacterListHeroSection>
          <S.CharacterListHeroContent>
            <S.CharacterListEyebrow>Character Forge</S.CharacterListEyebrow>
            <S.CharacterListTitle>{title}</S.CharacterListTitle>
            <S.CharacterListDescription>
              {description}
            </S.CharacterListDescription>
          </S.CharacterListHeroContent>
          <CreateCharacterCta onClick={handleCreateCharacter} />
        </S.CharacterListHeroSection>

        {characters.length > 0 ? (
          <S.CharacterListGrid
            animate="visible"
            initial="hidden"
            variants={S.listVariants}
          >
            {characters.map((character) => (
              <CharacterCard
                character={character}
                key={character.id}
                onOpen={handleOpenCharacter}
              />
            ))}
          </S.CharacterListGrid>
        ) : (
          <S.CharacterListEmptyState>{emptyMessage}</S.CharacterListEmptyState>
        )}
      </S.CharacterListContainer>
    </S.RpgCharacterSheetsContainer>
  );
}
