import { ArrowLeft, Languages, Moon, Sun } from "lucide-react";
import * as S from "./styles";
import { TooltipComponent } from "../../ui/tooltip/tooltip";
import { useAppStore } from "../../../store/use-app-store/use-app-store";
import { useTranslation } from "react-i18next";
export function AppBar() {
  const { theme, setTheme, toggleLanguage } = useAppStore();
  const { t } = useTranslation("appBar");
  const url = new URL(window.location.href);
  console.log(url);

  return (
    <S.AppBarContainer>
      {url.pathname.includes("/dashboard") ? (
        <S.AppBarTitle>{t("welcome")}, João Vitor</S.AppBarTitle>
      ) : (
        <S.AppBarTitle>
          <ArrowLeft size={20} />
          {t("back")}
        </S.AppBarTitle>
      )}
      <S.AppBarActions>
        <S.ActionsContainer>
          <TooltipComponent content={t("tooltipLanguage")} side="bottom">
            <S.ThemeToggle onClick={toggleLanguage}>
              <Languages size={20} />
            </S.ThemeToggle>
          </TooltipComponent>
          <TooltipComponent content={t("tooltipTheme")} side="bottom">
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
