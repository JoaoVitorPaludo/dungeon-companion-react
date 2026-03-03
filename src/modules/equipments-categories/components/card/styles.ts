import { motion } from "framer-motion";
import styled from "@emotion/styled";

export const EquipmentCardContainer = styled.div`
  display: flex;
  padding: 2rem;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const EquipmentCardContent = styled(motion.div)`
  background-color: ${(props) => props.theme["muted-background"]};
  padding: 2rem;
  border-radius: 0.5rem;
  border: 1px solid ${(props) => props.theme.border};
  min-width: 700px;
  min-height: 80%;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  max-width: 60%;
  font-family: "Space Grotesk", sans-serif;
  ul {
    list-style: inside;
    gap: 0.5rem;
    display: flex;
    flex-direction: column;
  }
  h2 {
    font-size: 1.9rem;
  }
  span {
    font-size: 1.2rem;
    color: ${(props) => props.theme["green-500"]};
  }
  p {
  }
`;
export const EquipmentCardNoDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
`;

export const EquipmentSideInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  flex-wrap: wrap;
`;
