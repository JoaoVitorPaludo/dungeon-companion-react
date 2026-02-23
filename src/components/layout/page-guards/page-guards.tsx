import { Navigate, Outlet } from 'react-router'
import { HOME_PATH } from '../../../app/routes/routes.constants'

export function PrivateRoute() {
  const token = localStorage.getItem('@token')
  if (!token) {
    return <Navigate to={HOME_PATH} replace />
  }
  return (
    <>
      <Outlet />
    </>
  )
}
export function PublicRoute() {
  const token = localStorage.getItem('@token')
  if (token) {
    return <Navigate to="/" replace />
  }
  return <Outlet />
}
