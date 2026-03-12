import { motion } from "framer-motion";
import styled from "@emotion/styled";

export const ProficienciesCardContainer = styled.div`
  display: flex;
  padding: 2rem;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const ProficienciesCardContent = styled(motion.div)`
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
export const ProficienciesCardNoDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;
`;

export const BadgeContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

export const StatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background-color: ${(props) => props.theme.background};
  padding: 1rem;
  border-radius: 0.5rem;
  border: 1px solid ${(props) => props.theme.border};

  p {
    margin: 0;
    font-size: 1.1rem;
  }
  strong {
    color: ${(props) => props.theme["green-500"]};
  }
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

  h3 {
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
