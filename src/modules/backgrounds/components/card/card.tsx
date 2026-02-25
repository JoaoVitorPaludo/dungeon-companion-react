import { Loading3D } from "../../../../commons/animations/d20-dice";
import * as S from "./styles";
import { useCard } from "./use-card";
export function BackgroundCard() {
  const { data, t, url, isLoading } = useCard();

  return (
    <S.BackgroundCardContainer>
      {isLoading ? (
        <S.BackgroundCardNoDataContainer>
          <Loading3D />
          Loading...
        </S.BackgroundCardNoDataContainer>
      ) : (
        <S.BackgroundCardContent>
          <h2>{t(url.pathname.split("/").slice(-1)[0])}</h2>
          <span>
            {t("feature")}: {data?.feature.name}
          </span>
          <ul>
            {data?.feature.desc.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <span>{t("bonds")}</span>
          <ul>
            {data?.bonds.from?.options.map((item, index) => (
              <li key={index}>{item.string}</li>
            ))}
          </ul>
          <span>{t("flaws")}</span>
          <ul>
            {data?.flaws.from?.options.map((item, index) => (
              <li key={index}>{item.string}</li>
            ))}
          </ul>
          <span>{t("ideals")}</span>
          <ul>
            {data?.ideals.from?.options.map((item, index) => (
              <li key={index}>{item.desc}</li>
            ))}
          </ul>
          <span>{t("personality_traits")}</span>
          <ul>
            {data?.personality_traits.from?.options.map((item, index) => (
              <li key={index}>{item.string}</li>
            ))}
          </ul>
          <span>{t("starting_equipment")}</span>
          <ul>
            {data?.starting_equipment?.map((item, index) => (
              <>
                <li key={index}>Item: {item.equipment.name}</li>
                <li key={index}>Quantity: {item.quantity}</li>
              </>
            ))}
          </ul>
          <span>{t("starting_equipment_options")}</span>
          <ul>
            {data?.starting_equipment_options?.map((item, index) => (
              <li key={index}>{item.from.equipment_category.name}</li>
            ))}
          </ul>
          <span>{t("starting_proficiencies")}</span>
          <ul>
            {data?.starting_proficiencies?.map((item, index) => (
              <li key={index}>{item.name}</li>
            ))}
          </ul>
        </S.BackgroundCardContent>
      )}
    </S.BackgroundCardContainer>
  );
}
