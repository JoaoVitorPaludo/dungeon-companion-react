import { CharacterCard } from "../../components/character-card/character-card";
import * as S from "./styles";
import { useRpgCharacterSheets } from "./use-rpg-character-sheets";

export function RpgCharacterSheets() {
  const {
    characters,
    emptyMessage,
    title,
    handleCreateCharacter,
    handleOpenCharacter,
  } = useRpgCharacterSheets();

  return (
    <S.RpgCharacterSheetsContainer>
      <S.CharacterListContainer>
        <S.CharacterListToolbar>
          <S.CharacterListToolbarContent>
            <S.CharacterListTitle>{title}</S.CharacterListTitle>
            <S.CharacterListToolbarCaption>
              Seus aventureiros em andamento e prontos para consulta rapida.
            </S.CharacterListToolbarCaption>
          </S.CharacterListToolbarContent>
          <S.CharacterListCreateButton
            onClick={handleCreateCharacter}
            type="button"
          >
            Novo personagem
          </S.CharacterListCreateButton>
        </S.CharacterListToolbar>

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
