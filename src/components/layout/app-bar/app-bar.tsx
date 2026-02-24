import { Languages, Moon, Sun } from "lucide-react";
import * as S from "./styles";
import { TooltipComponent } from "../../ui/tooltip/tooltip";
import { useAppStore } from "../../../store/use-app-store/use-app-store";
export function AppBar() {
  const { theme, setTheme } = useAppStore();

  return (
    <S.AppBarContainer>
      <S.AppBarTitle>Bem vindo, aventureiro!</S.AppBarTitle>
      <S.AppBarActions>
        <S.ActionsContainer>
          <TooltipComponent content="Mudar idioma" side="bottom">
            <S.ThemeToggle
            // onClick={toggleLanguage}
            >
              <Languages size={20} />
            </S.ThemeToggle>
          </TooltipComponent>
          <TooltipComponent content="Mudar tema" side="bottom">
            <S.ThemeToggle
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
            </S.ThemeToggle>
          </TooltipComponent>
        </S.ActionsContainer>
      </S.AppBarActions>
    </S.AppBarContainer>
  );
}
