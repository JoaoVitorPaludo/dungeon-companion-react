import { ArrowLeft, Languages, Moon, ScrollText, Sun } from "lucide-react";
import * as S from "./styles";
import { TooltipComponent } from "../../ui/tooltip/tooltip";
import { useAppStore } from "../../../store/use-app-store/use-app-store";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import { RPG_CHARACTER_SHEETS_PATH } from "../../../app/routes/routes.constants";

export function AppBar() {
  const { theme, setTheme, toggleLanguage } = useAppStore();
  const { t } = useTranslation("appBar");
  const navigate = useNavigate();
  const url = new URL(window.location.href);

  return (
    <S.AppBarContainer>
      {url.pathname.includes("/dashboard") ? (
        <S.AppBarTitle>{t("welcome")}, João Vitor</S.AppBarTitle>
      ) : (
        <S.AppBarTitle>
          <ArrowLeft size={20} onClick={() => navigate(-1)} />
          {t("back")}
        </S.AppBarTitle>
      )}
      <S.AppBarActions>
        <S.ActionsContainer>
          <TooltipComponent content={t("tooltipCharacterSheets")} side="bottom">
            <S.ThemeToggle
              aria-label={t("tooltipCharacterSheets")}
              onClick={() => navigate(RPG_CHARACTER_SHEETS_PATH)}
              type="button"
            >
              <ScrollText size={20} />
            </S.ThemeToggle>
          </TooltipComponent>
          <TooltipComponent content={t("tooltipLanguage")} side="bottom">
            <S.ThemeToggle
              aria-label={t("tooltipLanguage")}
              onClick={toggleLanguage}
              type="button"
            >
              <Languages size={20} />
            </S.ThemeToggle>
          </TooltipComponent>
          <TooltipComponent content={t("tooltipTheme")} side="bottom">
            <S.ThemeToggle
              aria-label={t("tooltipTheme")}
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              type="button"
            >
              {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
            </S.ThemeToggle>
          </TooltipComponent>
        </S.ActionsContainer>
      </S.AppBarActions>
    </S.AppBarContainer>
  );
}
