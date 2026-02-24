import { Navigate, Outlet } from "react-router";
import { AppBar } from "../app-bar/app-bar";
import * as S from "./styles";
export function PublicRoute() {
  const token = localStorage.getItem("@token");
  if (token) {
    return <Navigate to="/" replace />;
  }
  return (
    <S.PublicPageGuardContainer>
      <AppBar />
      <Outlet />
    </S.PublicPageGuardContainer>
  );
}
