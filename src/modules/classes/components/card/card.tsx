import { Loading3D } from "../../../../commons/animations/d20-dice";
import * as S from "./styles";
import { useCard } from "./use-card";
export function ClassesCard() {
  const { data, t, url, isLoading } = useCard();

  return (
    <S.ClassesCardContainer>
      {isLoading ? (
        <S.ClassesCardNoDataContainer>
          <Loading3D />
          Loading...
        </S.ClassesCardNoDataContainer>
      ) : (
        <S.ClassesCardContent>
          <h2>{t(url.pathname.split("/").slice(-1)[0])}</h2>
          <span>{t("hit_dice")}</span>
          <p>d{data?.hit_die}</p>

          <span>{t("proficiencies_choices")}</span>
          <ul>
            {data?.proficiency_choices.map((item, index) => (
              <li key={index}>{item.desc}</li>
            ))}
          </ul>

          <span>{t("proficiencies")}</span>
          <ul>
            {data?.proficiencies.map((item, index) => (
              <li key={index}>{item.name}</li>
            ))}
          </ul>

          <span>{t("saving_throws")}</span>
          <ul>
            {data?.saving_throws.map((item, index) => (
              <li key={index}>{item.name}</li>
            ))}
          </ul>

          <span>{t("starting_equipment")}</span>
          <ul>
            {data?.starting_equipment.map((item, index) => (
              <>
                <li key={index}>
                  {item.equipment.name} - Quantity: {item.quantity}
                </li>
              </>
            ))}
          </ul>

          <span>{t("subclasses")}</span>
          <ul>
            {data?.subclasses.map((item, index) => (
              <>
                <li key={index}>{item.name}</li>
              </>
            ))}
          </ul>
        </S.ClassesCardContent>
      )}
    </S.ClassesCardContainer>
  );
}
