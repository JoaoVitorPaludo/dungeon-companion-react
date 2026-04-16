export const characterCreation = {
  header: {
    title: "Hero's Journey",
    subtitle: "Every legend has a beginning. What is your origin?",
  },
  buttons: {
    exit: "Exit",
    back: "Back",
    next: "Next",
    inProgress: "In progress",
  },
  steps: {
    step1: "Race and subrace",
    step2: "Class",
    step3: "Attributes",
    step4: "Background",
    step5: "Spells",
    step6: "Equipment",
    step7: "Final details",
  },
  placeholders: {
    title: "Step {{step}} - {{label}}",
    description:
      "This step is currently a placeholder and will be implemented in the next delivery.",
    nextStepFallback: "Next step",
  },
  common: {
    notInformed: "Not informed",
  },
  raceStep: {
    loading: "Loading races and subraces...",
    error: "Could not load race data. Please try again.",
    empty: "No races available at the moment.",
    cardAlt: "Race illustration for {{name}}",
    selectSubraceTitle: "Select a subrace",
    selectSubraceHelper:
      "This choice is required to continue to the next step.",
    selectionHint:
      "Select a race to display details and unlock your origin.",
    detail: {
      quickFacts: {
        speed: "Speed",
        size: "Size",
        alignment: "Alignment",
        age: "Age",
      },
      sections: {
        abilityBonuses: "Ability bonuses",
        traits: "Racial traits",
        sizeDescription: "Size description",
      },
      speedValue: "{{value}} ft",
      titleWithSubrace: "{{raceName}} - {{subraceName}}",
    },
  },
  classStep: {
    loading: "Loading classes...",
    error: "Could not load class data. Please try again.",
    empty: "No classes available at the moment.",
    cardAlt: "Class illustration for {{name}}",
    selectionHint: "Select a class to display details and define your style.",
    detail: {
      quickFacts: {
        hitDice: "Hit dice",
        savingThrows: "Saving throws",
        proficiencies: "Proficiencies",
        subclasses: "Subclasses",
      },
      hitDiceValue: "1d{{value}}",
    },
  },
  raceDescriptions: {
    dragonborn: "Descendants of draconic blood, proud and imposing.",
    dwarf:
      "Master mountain artisans known for courage, endurance, and loyalty.",
    elf: "Keepers of ancient traditions, with grace, vision, and precision.",
    gnome: "Curious inventors, creative and always eager to explore.",
    halfElf: "Bridges between worlds, versatile and diplomatic in any realm.",
    halfOrc: "Determined warriors with brutal strength and unbreakable spirit.",
    halfling: "Stealthy adventurers, lucky and surprisingly brave.",
    human: "Adaptable and ambitious, shaping the world through determination.",
    tiefling: "Marked by infernal lineage, resilient and full of personality.",
    default: "A unique origin ready to open paths in your journey.",
  },
  classSubtitles: {
    barbarian: "A fierce warrior driven by primal rage and extreme resilience.",
    bard: "An arcane performer who inspires allies and controls the battlefield.",
    cleric: "A divine conduit who protects, heals, and punishes enemies.",
    druid: "A guardian of nature wielding primal forces and transformation.",
    fighter: "A master of weapons and combat tactics. The martial specialist.",
    monk: "A disciplined combatant turning body and mind into a weapon.",
    paladin: "A sworn champion blending faith, defense, and offense.",
    ranger: "A precise tracker focused on survival and tactical combat.",
    rogue: "A stealth specialist built for precision and lethal opportunities.",
    sorcerer: "An innate spellcaster shaping magic through instinct.",
    warlock: "An arcane pact-bearer drawing power from mysterious entities.",
    wizard: "An arcane scholar mastering magic through study and preparation.",
    default: "A combat and magic path ready to define your style.",
  },
} as const;
