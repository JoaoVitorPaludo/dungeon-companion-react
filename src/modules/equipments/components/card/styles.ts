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
  min-width: 50%;
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
`;
export const EquipmentCardNoDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  h2 {
    font-size: 1.4rem;
    color: ${(props) => props.theme["green-500"]};
    border-bottom: 1px solid ${(props) => props.theme.border};
    padding-bottom: 0.3rem;
  }

  ul {
    list-style: inside;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  li {
    line-height: 1.5;
  }
`;

export const SectionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;

  div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  h3 {
    font-size: 1.1rem;
    color: ${(props) => props.theme["green-500"]};
  }
`;
