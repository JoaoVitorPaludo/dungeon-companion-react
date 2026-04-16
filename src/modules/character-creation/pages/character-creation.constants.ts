import dragonbornPlaceholder from "../../../assets/races-placeholders/dragonborn.svg";
import dwarfPlaceholder from "../../../assets/races-placeholders/dwarf.svg";
import elfPlaceholder from "../../../assets/races-placeholders/elf.svg";
import gnomePlaceholder from "../../../assets/races-placeholders/gnome.svg";
import halfElfPlaceholder from "../../../assets/races-placeholders/half-elf.svg";
import halfOrcPlaceholder from "../../../assets/races-placeholders/half-orc.svg";
import halflingPlaceholder from "../../../assets/races-placeholders/halfling.svg";
import humanPlaceholder from "../../../assets/races-placeholders/human.svg";
import tieflingPlaceholder from "../../../assets/races-placeholders/tiefling.svg";
import defaultPlaceholder from "../../../assets/races-placeholders/default.svg";
import type {
  ClassCardContent,
  CharacterCreationStep,
  RaceCardContent,
} from "./character-creation.types";

export const CHARACTER_CREATION_STEPS: CharacterCreationStep[] = [
  { id: 1, label: "Raca e subraca" },
  { id: 2, label: "Classe" },
  { id: 3, label: "Atributos" },
  { id: 4, label: "Antecedente" },
  { id: 5, label: "Magias" },
  { id: 6, label: "Equipamentos" },
  { id: 7, label: "Detalhes finais" },
];

export const RACE_CARD_CONTENT_MAP: Record<string, RaceCardContent> = {
  dragonborn: {
    description: "Herdeiros de sangue draconico, orgulhosos e imponentes.",
    imageSrc: dragonbornPlaceholder,
  },
  dwarf: {
    description:
      "Mestres artesaos das montanhas, reconhecidos por coragem e resistencia.",
    imageSrc: dwarfPlaceholder,
  },
  elf: {
    description:
      "Guardioes de tradicoes antigas, com graca, visao e precisao refinadas.",
    imageSrc: elfPlaceholder,
  },
  gnome: {
    description:
      "Inventores curiosos, criativos e sempre prontos para explorar.",
    imageSrc: gnomePlaceholder,
  },
  "half-elf": {
    description:
      "Pontes entre mundos, versateis e diplomaticos em qualquer reino.",
    imageSrc: halfElfPlaceholder,
  },
  "half-orc": {
    description:
      "Guerreiros determinados, com forca brutal e espirito inabalavel.",
    imageSrc: halfOrcPlaceholder,
  },
  halfling: {
    description:
      "Aventureiros discretos, sortudos e surpreendentemente valentes.",
    imageSrc: halflingPlaceholder,
  },
  human: {
    description:
      "Adaptaveis e ambiciosos, moldam o mundo com talento e determinacao.",
    imageSrc: humanPlaceholder,
  },
  tiefling: {
    description:
      "Marcados por origem infernal, resilientes e cheios de personalidade.",
    imageSrc: tieflingPlaceholder,
  },
};

export const DEFAULT_RACE_CARD_CONTENT: RaceCardContent = {
  description: "Uma origem singular pronta para abrir caminhos na sua jornada.",
  imageSrc: defaultPlaceholder,
};

export const CLASS_CARD_CONTENT_MAP: Record<string, ClassCardContent> = {
  barbarian: {
    subtitle: "Um guerreiro feroz movido por furia primal e resistencia extrema.",
    imageSrc: defaultPlaceholder,
  },
  bard: {
    subtitle:
      "Um artista arcano que inspira aliados e manipula a batalha com talento.",
    imageSrc: defaultPlaceholder,
  },
  cleric: {
    subtitle:
      "Um canal de poder divino que protege, cura e pune os inimigos.",
    imageSrc: defaultPlaceholder,
  },
  druid: {
    subtitle:
      "Um guardiao da natureza que invoca forcas primordiais e metamorfose.",
    imageSrc: defaultPlaceholder,
  },
  fighter: {
    subtitle:
      "Um mestre de armas e taticas de combate. O especialista marcial.",
    imageSrc: defaultPlaceholder,
  },
  monk: {
    subtitle:
      "Um combatente disciplinado que transforma corpo e mente em arma.",
    imageSrc: defaultPlaceholder,
  },
  paladin: {
    subtitle:
      "Um campeao juramentado que combina fe, defesa e poder ofensivo.",
    imageSrc: defaultPlaceholder,
  },
  ranger: {
    subtitle:
      "Um rastreador preciso, especialista em sobrevivencia e combate tatico.",
    imageSrc: defaultPlaceholder,
  },
  rogue: {
    subtitle:
      "Um especialista em furtividade, precisão e oportunidades letais.",
    imageSrc: defaultPlaceholder,
  },
  sorcerer: {
    subtitle:
      "Um conjurador de poder inato que molda magia por instinto.",
    imageSrc: defaultPlaceholder,
  },
  warlock: {
    subtitle:
      "Um pactuante arcano que extrai poder de entidades misteriosas.",
    imageSrc: defaultPlaceholder,
  },
  wizard: {
    subtitle:
      "Um estudioso arcano que domina magia por conhecimento e preparo.",
    imageSrc: defaultPlaceholder,
  },
};

export const DEFAULT_CLASS_CARD_CONTENT: ClassCardContent = {
  subtitle: "Uma trilha de combate e magia pronta para definir seu estilo.",
  imageSrc: defaultPlaceholder,
};
