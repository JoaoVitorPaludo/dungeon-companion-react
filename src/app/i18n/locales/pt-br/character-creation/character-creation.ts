export const characterCreation = {
  header: {
    title: "Jornada do Heroi",
    subtitle: "Toda lenda tem um comeco. Qual e a sua origem?",
  },
  buttons: {
    exit: "Sair",
    back: "Voltar",
    next: "Avancar",
    inProgress: "Em construcao",
  },
  steps: {
    step1: "Raca e subraca",
    step2: "Classe",
    step3: "Atributos",
    step4: "Antecedente",
    step5: "Magias",
    step6: "Equipamentos",
    step7: "Detalhes finais",
  },
  placeholders: {
    title: "Step {{step}} - {{label}}",
    description:
      "Este passo foi reservado como placeholder e sera implementado na proxima entrega.",
    nextStepFallback: "Proximo passo",
  },
  common: {
    notInformed: "Nao informado",
  },
  raceStep: {
    loading: "Carregando racas e subracas...",
    error: "Nao foi possivel carregar os dados de raca. Tente novamente.",
    empty: "Nenhuma raca disponivel no momento.",
    cardAlt: "Ilustracao da raca {{name}}",
    selectSubraceTitle: "Selecione uma subraca",
    selectSubraceHelper:
      "Esta escolha e obrigatoria para continuar para o proximo passo.",
    selectionHint:
      "Selecione uma raca para exibir os detalhes e destravar sua origem.",
    detail: {
      quickFacts: {
        speed: "Velocidade",
        size: "Tamanho",
        alignment: "Alinhamento",
        age: "Idade",
      },
      sections: {
        abilityBonuses: "Bonus de atributo",
        traits: "Tracos raciais",
        sizeDescription: "Descricao de tamanho",
      },
      speedValue: "{{value}} ft",
      titleWithSubrace: "{{raceName}} - {{subraceName}}",
    },
  },
  classStep: {
    loading: "Carregando classes...",
    error: "Nao foi possivel carregar os dados de classe. Tente novamente.",
    empty: "Nenhuma classe disponivel no momento.",
    cardAlt: "Ilustracao da classe {{name}}",
    selectionHint:
      "Selecione uma classe para exibir os detalhes e definir seu estilo.",
    detail: {
      quickFacts: {
        hitDice: "Dado de vida",
        savingThrows: "Resistencias",
        proficiencies: "Proficiencias",
        subclasses: "Subclasses",
      },
      hitDiceValue: "1d{{value}}",
    },
  },
  raceDescriptions: {
    dragonborn: "Herdeiros de sangue draconico, orgulhosos e imponentes.",
    dwarf:
      "Mestres artesaos das montanhas, reconhecidos por coragem e resistencia.",
    elf: "Guardioes de tradicoes antigas, com graca, visao e precisao refinadas.",
    gnome: "Inventores curiosos, criativos e sempre prontos para explorar.",
    halfElf: "Pontes entre mundos, versateis e diplomaticos em qualquer reino.",
    halfOrc: "Guerreiros determinados, com forca brutal e espirito inabalavel.",
    halfling: "Aventureiros discretos, sortudos e surpreendentemente valentes.",
    human: "Adaptaveis e ambiciosos, moldam o mundo com talento e determinacao.",
    tiefling: "Marcados por origem infernal, resilientes e cheios de personalidade.",
    default: "Uma origem singular pronta para abrir caminhos na sua jornada.",
  },
  classSubtitles: {
    barbarian: "Um guerreiro feroz movido por furia primal e resistencia extrema.",
    bard: "Um artista arcano que inspira aliados e manipula a batalha com talento.",
    cleric: "Um canal de poder divino que protege, cura e pune os inimigos.",
    druid: "Um guardiao da natureza que invoca forcas primordiais e metamorfose.",
    fighter: "Um mestre de armas e taticas de combate. O especialista marcial.",
    monk: "Um combatente disciplinado que transforma corpo e mente em arma.",
    paladin: "Um campeao juramentado que combina fe, defesa e poder ofensivo.",
    ranger: "Um rastreador preciso, especialista em sobrevivencia e combate tatico.",
    rogue: "Um especialista em furtividade, precisao e oportunidades letais.",
    sorcerer: "Um conjurador de poder inato que molda magia por instinto.",
    warlock: "Um pactuante arcano que extrai poder de entidades misteriosas.",
    wizard: "Um estudioso arcano que domina magia por conhecimento e preparo.",
    default: "Uma trilha de combate e magia pronta para definir seu estilo.",
  },
} as const;
