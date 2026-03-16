import { Loading3D } from "../../../../commons/animations/d20-dice";
import { BadgeComponent } from "../../../../components/ui/badge/badge";
import * as S from "./styles";
import { useCard } from "./use-card";

export function SkillsCard() {
  const { data, t, url, isLoading } = useCard();

  return (
    <S.SkillsCardContainer>
      {isLoading ? (
        <S.SkillsCardNoDataContainer>
          <Loading3D />
          Loading...
        </S.SkillsCardNoDataContainer>
      ) : (
        <S.SkillsCardContent>
          <h2> {t(url.pathname.split("/").slice(-1)[0])}</h2>
          {data?.ability_score && (
            <S.BadgeContainer>
              <BadgeComponent variant="primary" size="small">
                {data?.ability_score.name}
              </BadgeComponent>
            </S.BadgeContainer>
          )}
          <S.DescriptionContainer>
            <S.Section>
              <h3>{t("description")}</h3>
              <ul>
                {data?.desc.map((item, index) => <li key={index}>{item}</li>)}
              </ul>
            </S.Section>
          </S.DescriptionContainer>
        </S.SkillsCardContent>
      )}
    </S.SkillsCardContainer>
  );
}
