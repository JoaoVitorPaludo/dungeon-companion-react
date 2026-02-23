import {
  BrowserRouter,
  Navigate,
  Route,
  Routes as RoutesComponent,
} from 'react-router'
import {
  PrivateRoute,
  PublicRoute,
} from '../../components/layout/page-guards/page-guards'
import { PRIVATE_ROUTES, PUBLIC_ROUTES, ROOT_PATH } from './routes.constants'

export function Routes() {
  return (
    <BrowserRouter>
      <RoutesComponent>
        <Route element={<PublicRoute />}>
          {PUBLIC_ROUTES.map((route) => (
            <Route
              key={route.key}
              path={route.path}
              element={<route.element />}
            />
          ))}
        </Route>
        <Route element={<PrivateRoute />}>
          {PRIVATE_ROUTES.map((route) => (
            <Route
              key={route.key}
              path={route.path}
              element={<route.element />}
            />
          ))}
        </Route>
        <Route path="*" element={<Navigate to={ROOT_PATH} replace />} />
      </RoutesComponent>
    </BrowserRouter>
  )
}
