import { Home } from '../../modules/home'

export const ROOT_PATH = '/'
export const HOME_PATH = '/home'

export const PUBLIC_ROUTES = [
  {
    path: HOME_PATH,
    key: 'home',
    element: Home,
  },
]
export const PRIVATE_ROUTES = [
  {
    path: ROOT_PATH,
    key: 'home',
    element: Home,
  },
  {
    path: HOME_PATH,
    key: 'home',
    element: Home,
  },
]
