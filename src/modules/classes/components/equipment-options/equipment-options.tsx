import { useNavigate } from "react-router";
import {
  StartingEquipmentOptionFrom,
  StartingEquipmentOptionItem,
} from "../card/card.interfaces";
import * as S from "./styles";
import {
  EQUIPMENT_CATEGORIES_DETAIL_PATH,
  EQUIPMENT_DETAIL_PATH,
} from "../../../../app/routes/routes.constants";

interface EquipmentOptionsProps {
  from: StartingEquipmentOptionFrom;
}

export function EquipmentOptionsAccordionContent({
  from,
}: EquipmentOptionsProps) {
  const navigate = useNavigate();

  const renderOptionItem = (
    item: StartingEquipmentOptionItem,
    index: number,
  ) => {
    switch (item.option_type) {
      case "counted_reference": {
        const prerequisite = item.prerequisites?.[0]?.proficiency?.name;

        return (
          <li
            onClick={() =>
              navigate(EQUIPMENT_DETAIL_PATH.replace(":id", item.of.index))
            }
            key={`${item.of.index}-${index}`}
          >
            {`${item.count}x - ${item.of.name}`}
            {prerequisite ? ` (requer ${prerequisite})` : ""}
          </li>
        );
      }

      case "multiple":
        return item.items.map((subItem, subIndex) => (
          <li
            onClick={() =>
              navigate(EQUIPMENT_DETAIL_PATH.replace(":id", subItem.of.index))
            }
            key={`${subItem.of.index}-${index}-${subIndex}`}
          >
            {`${subItem.count}x - ${subItem.of.name}`}
          </li>
        ));

      case "choice": {
        if (item.choice.from.option_set_type === "equipment_category") {
          return (
            <li
              onClick={() =>
                navigate(
                  EQUIPMENT_CATEGORIES_DETAIL_PATH.replace(
                    ":id",
                    item.choice.from.equipment_category.index,
                  ),
                )
              }
              key={`choice-category-${index}`}
            >
              {`${item.choice.choose}x - ${item.choice.from.equipment_category.name}`}
            </li>
          );
        }

        return <li key={`choice-${index}`}>{item.choice.desc}</li>;
      }

      case "equipment_category":
        return (
          <li
            onClick={() =>
              navigate(
                EQUIPMENT_CATEGORIES_DETAIL_PATH.replace(
                  ":id",
                  item.equipment_category.index,
                ),
              )
            }
            key={`equipment-category-${index}`}
          >
            {item.equipment_category.name}
          </li>
        );

      default:
        return null;
    }
  };

  return (
    <S.ClassesEquipmentOptionsContainer>
      {from.option_set_type === "equipment_category" ? (
        <li
          onClick={() =>
            navigate(
              EQUIPMENT_CATEGORIES_DETAIL_PATH.replace(
                ":id",
                from.equipment_category.index,
              ),
            )
          }
        >
          {from.equipment_category.name}
        </li>
      ) : (
        from.options.map((item, index) => renderOptionItem(item, index))
      )}
    </S.ClassesEquipmentOptionsContainer>
  );
}
