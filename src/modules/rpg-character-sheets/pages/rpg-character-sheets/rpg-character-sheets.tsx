import "@fontsource/cinzel/600.css";
import "@fontsource/cinzel/700.css";
import { CharacterCard } from "../../components/character-card/character-card";
import { CreateCharacterCta } from "../../components/create-character-cta/create-character-cta";
import * as S from "./styles";
import { useRpgCharacterSheets } from "./use-rpg-character-sheets";

export function RpgCharacterSheets() {
  const {
    characters,
    emptyMessage,
    greeting,
    subtitle,
    handleCreateCharacter,
    handleOpenCharacter,
  } = useRpgCharacterSheets();

  return (
    <S.RpgCharacterSheetsContainer>
      <S.CharacterListContainer>
        <S.CharacterListHeader>
          <S.CharacterListGreeting>{greeting}</S.CharacterListGreeting>
          <S.CharacterListSubtitle>{subtitle}</S.CharacterListSubtitle>
        </S.CharacterListHeader>

        {characters.length === 0 ? (
          <S.CharacterListEmptyState>{emptyMessage}</S.CharacterListEmptyState>
        ) : null}

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
          <CreateCharacterCta onClick={handleCreateCharacter} />
        </S.CharacterListGrid>
      </S.CharacterListContainer>
    </S.RpgCharacterSheetsContainer>
  );
}
