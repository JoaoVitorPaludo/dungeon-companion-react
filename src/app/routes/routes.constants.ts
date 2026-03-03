import { Home } from "../../modules/home";
import { Dashboard } from "../../modules/dashboard";
import { AbilityScores } from "../../modules/ability-scores";
import { AbilityScoreCard } from "../../modules/ability-scores/components/card/card";
import { Alignments } from "../../modules/alignments";
import { AlignmentCard } from "../../modules/alignments/components/card/card";
import { Backgrounds } from "../../modules/backgrounds/pages/backgrounds";
import { BackgroundCard } from "../../modules/backgrounds/components/card/card";
import { Classes } from "../../modules/classes";
import { ClassesCard } from "../../modules/classes/components/card/card";
import { Conditions } from "../../modules/conditions";
import { ConditionsCard } from "../../modules/conditions/components/card/card";
import { DamageTypes } from "../../modules/damage-types";
import { DamageTypesCard } from "../../modules/damage-types/components/card/card";
import { Equipments } from "../../modules/equipments";
import { EquipmentCard } from "../../modules/equipments/components/card/card";
import { EquipmentsCategories } from "../../modules/equipments-categories";
import { EquipmentCategoriesCard } from "../../modules/equipments-categories/components/card/card";
import { Feats } from "../../modules/feats";
import { FeatsCard } from "../../modules/feats/components/card/card";

export const ROOT_PATH = "/dashboard";
export const HOME_PATH = "/home";
export const DASHBOARD_PATH = "/dashboard";

export const ABILITY_SCORES_PATH = "/ability-scores";
export const ABILITY_SCORES_DETAIL_PATH = "/ability-scores/:id";

export const ALIGNMENTS_PATH = "/alignments";
export const ALIGNMENTS_DETAIL_PATH = "/alignments/:id";

export const BACKGROUNDS_PATH = "/backgrounds";
export const BACKGROUNDS_DETAIL_PATH = "/backgrounds/:id";

export const CLASSES_PATH = "/classes";
export const CLASSES_DETAIL_PATH = "/classes/:id";

export const CONDITIONS_PATH = "/conditions";
export const CONDITIONS_DETAIL_PATH = "/conditions/:id";

export const DAMAGE_TYPES_PATH = "/damage-types";
export const DAMAGE_TYPES_DETAIL_PATH = "/damage-types/:id";

export const EQUIPMENT_PATH = "/equipment";
export const EQUIPMENT_DETAIL_PATH = "/equipment/:id";

export const EQUIPMENT_CATEGORIES_PATH = "/equipment-categories";
export const EQUIPMENT_CATEGORIES_DETAIL_PATH = "/equipment-categories/:id";

export const FEATS_PATH = "/feats";
export const FEATS_DETAIL_PATH = "/feats/:id";

export const PUBLIC_ROUTES = [
  {
    path: ROOT_PATH,
    key: "dashboard",
    element: Dashboard,
  },
  {
    path: HOME_PATH,
    key: "home",
    element: Home,
  },
  {
    path: DASHBOARD_PATH,
    key: "dashboard",
    element: Dashboard,
  },
  {
    path: ABILITY_SCORES_PATH,
    key: "ability-scores",
    element: AbilityScores,
  },
  {
    path: ABILITY_SCORES_DETAIL_PATH,
    key: "ability-scores-detail",
    element: AbilityScoreCard,
  },
  {
    path: ALIGNMENTS_PATH,
    key: "alignments",
    element: Alignments,
  },
  {
    path: ALIGNMENTS_DETAIL_PATH,
    key: "alignments-detail",
    element: AlignmentCard,
  },
  {
    path: BACKGROUNDS_PATH,
    key: "backgrounds",
    element: Backgrounds,
  },
  {
    path: BACKGROUNDS_DETAIL_PATH,
    key: "backgrounds-detail",
    element: BackgroundCard,
  },
  {
    path: CLASSES_PATH,
    key: "classes",
    element: Classes,
  },
  {
    path: CLASSES_DETAIL_PATH,
    key: "classes-detail",
    element: ClassesCard,
  },
  {
    path: CONDITIONS_PATH,
    key: "conditions",
    element: Conditions,
  },
  {
    path: CONDITIONS_DETAIL_PATH,
    key: "conditions-detail",
    element: ConditionsCard,
  },
  {
    path: DAMAGE_TYPES_PATH,
    key: "damage-types",
    element: DamageTypes,
  },
  {
    path: DAMAGE_TYPES_DETAIL_PATH,
    key: "damage-types-detail",
    element: DamageTypesCard,
  },
  {
    path: EQUIPMENT_PATH,
    key: "equipment",
    element: Equipments,
  },
  {
    path: EQUIPMENT_DETAIL_PATH,
    key: "equipment-detail",
    element: EquipmentCard,
  },
  {
    path: EQUIPMENT_CATEGORIES_PATH,
    key: "equipment-categories",
    element: EquipmentsCategories,
  },
  {
    path: EQUIPMENT_CATEGORIES_DETAIL_PATH,
    key: "equipment-categories-detail",
    element: EquipmentCategoriesCard,
  },
  {
    path: FEATS_PATH,
    key: "feats",
    element: Feats,
  },
  {
    path: FEATS_DETAIL_PATH,
    key: "feats-detail",
    element: FeatsCard,
  },
];
export const PRIVATE_ROUTES = [];
