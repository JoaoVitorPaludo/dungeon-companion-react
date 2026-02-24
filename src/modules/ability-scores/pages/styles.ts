import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const AbilityScoresContainer = styled(motion.div)`
  width: 100%;
  inset: 0;
  gap: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;

export const AbilityScoresCardContainer = styled(motion.div)`
  display: flex;
  gap: 1rem;
  align-items: center;
  padding: 1rem 2rem;
  border: 1px solid ${(props) => props.theme.border};
  background-color: ${(props) => props.theme["muted-background"]};
  border-radius: 0.5rem;
  height: 100px;
  cursor: pointer;

  &:hover {
    transition: all 0.2s ease-in-out;
    transform: translateY(-3px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    border-color: ${(props) => props.theme["green-500"]};
  }
`;
export const AbilityScoresNoDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
`;
