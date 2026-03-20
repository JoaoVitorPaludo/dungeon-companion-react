import { motion } from "framer-motion";
import styled from "@emotion/styled";

export const AbilityScoresCardContainer = styled.div`
  display: flex;
  padding: 2rem;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const AbilityScoresCardContent = styled(motion.div)`
  background-color: ${(props) => props.theme["muted-background"]};
  padding: 2rem;
  border-radius: 0.5rem;
  border: 1px solid ${(props) => props.theme.border};
  min-width: 300px;
  min-height: 80%;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  max-width: 60%;
  font-family: "Space Grotesk", sans-serif;
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
export const AbilityScoresCardNoDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
`;
export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 1rem;
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
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      margin-bottom: 0.8rem;
      line-height: 1.5;
    }
  }
`;
