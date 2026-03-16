import { SPELLS_DETAIL_PATH } from "../../../app/routes/routes.constants";
import { Loading3D } from "../../../commons/animations/d20-dice";
import {
  cardVariants,
  listVariants,
} from "../../../commons/animations/variants";
import { useMemo } from "react";
import { SearchField } from "../../../components/ui/search-field/search-field";
import { SPELLS_FALLBACK_ICON, SPELLS_ICONS } from "./spells.constants";
import * as S from "./styles";
import { Spell, useSpells } from "./use-spells";

export function Spells() {
  const { data, isLoading, theme, t, navigate } = useSpells();
  const spellsByLevel = useMemo(() => {
    if (!data) {
      return [] as Array<{ level: number; spells: Spell[] }>;
    }

    const groupedSpells = data.reduce<Record<number, Spell[]>>((acc, spell) => {
      if (!acc[spell.level]) {
        acc[spell.level] = [];
      }

      acc[spell.level].push(spell);
      return acc;
    }, {});

    return Object.keys(groupedSpells)
      .map(Number)
      .sort((a, b) => a - b)
      .map((level) => ({
        level,
        spells: groupedSpells[level],
      }));
  }, [data]);

  return (
    <S.SpellsContainer>
      <SearchField width="25%" handleSearch={(e) => console.log(e)} />
      {isLoading && (
        <S.SpellsNoDataContainer>
          <Loading3D />
          Loading...
        </S.SpellsNoDataContainer>
      )}

      {spellsByLevel.map(({ level, spells }) => (
        <S.SpellsLevelGroup key={level}>
          <S.SpellsLevelTitle>Level {level}</S.SpellsLevelTitle>
          <S.SpellsCardsContainer
            variants={listVariants}
            initial="hidden"
            animate="visible"
          >
            {spells.map((item: Spell) => {
              const Icon = SPELLS_ICONS[item.index] ?? SPELLS_FALLBACK_ICON;

              return (
                <S.SpellsCardContainer
                  key={item.index}
                  variants={cardVariants}
                  onClick={() =>
                    navigate(SPELLS_DETAIL_PATH.replace(":id", item.index))
                  }
                >
                  <Icon size={25} color={theme["green-500"]} />
                  <span>{t(item.index)}</span>
                </S.SpellsCardContainer>
              );
            })}
          </S.SpellsCardsContainer>
        </S.SpellsLevelGroup>
      ))}
    </S.SpellsContainer>
  );
}
