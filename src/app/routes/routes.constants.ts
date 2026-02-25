import { Home } from "../../modules/home";
import { Dashboard } from "../../modules/dashboard";
import { AbilityScores } from "../../modules/ability-scores";
import { AbilityScoreCard } from "../../modules/ability-scores/components/card/card";
import { Alignments } from "../../modules/alignments";
import { AlignmentCard } from "../../modules/alignments/components/card/card";
import { Backgrounds } from "../../modules/backgrounds/pages/backgrounds";
import { BackgroundCard } from "../../modules/backgrounds/components/card/card";

export const ROOT_PATH = "/dashboard";
export const HOME_PATH = "/home";
export const DASHBOARD_PATH = "/dashboard";

export const ABILITY_SCORES_PATH = "/ability-scores";
export const ABILITY_SCORES_DETAIL_PATH = "/ability-scores/:id";

export const ALIGNMENTS_PATH = "/alignments";
export const ALIGNMENTS_DETAIL_PATH = "/alignments/:id";

export const BACKGROUNDS_PATH = "/backgrounds";
export const BACKGROUNDS_DETAIL_PATH = "/backgrounds/:id";

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
];
export const PRIVATE_ROUTES = [];
