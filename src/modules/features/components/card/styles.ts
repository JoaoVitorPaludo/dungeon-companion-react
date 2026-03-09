import { motion } from "framer-motion";
import styled from "@emotion/styled";

export const FeatsCardContainer = styled.div`
  display: flex;
  padding: 2rem;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const FeatsCardContent = styled(motion.div)`
  background-color: ${(props) => props.theme["muted-background"]};
  padding: 2.5rem;
  border-radius: 1rem;
  border: 1px solid ${(props) => props.theme.border};
  min-width: 500px;
  min-height: 80%;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  max-width: 60%;
  font-family: "Space Grotesk", sans-serif;
  box-shadow:
    0 10px 25px -5px rgba(0, 0, 0, 0.1),
    0 8px 10px -6px rgba(0, 0, 0, 0.1);

  h2 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
    text-transform: capitalize;
    color: ${(props) => props.theme.foreground};
  }
`;

export const ItemHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1rem;
`;

export const BadgeContainer = styled.div`
  display: flex;
  gap: 0.8rem;
  flex-wrap: wrap;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  span {
    font-size: 1.2rem;
    font-weight: 600;
    color: ${(props) => props.theme["green-500"]};
    border-bottom: 1px solid ${(props) => props.theme.border};
    padding-bottom: 0.4rem;
    margin-top: 1rem;
  }

  p {
    line-height: 1.6;
    color: ${(props) => props.theme["primary-text-color"]};
  }
`;

export const FeatsCardNoDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
`;
