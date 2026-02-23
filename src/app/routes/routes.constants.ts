import { Home } from "../../modules/home";
import { Dashboard } from "../../modules/dashboard";

export const ROOT_PATH = "/";
export const HOME_PATH = "/home";
export const DASHBOARD_PATH = "/dashboard";

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
];
export const PRIVATE_ROUTES = [];
