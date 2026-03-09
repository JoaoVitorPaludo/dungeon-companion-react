import { motion } from "framer-motion";
import styled from "@emotion/styled";

export const SchoolsCardContainer = styled.div`
  display: flex;
  padding: 2rem;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const SchoolsCardContent = styled(motion.div)`
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

export const ImageContainer = styled.div`
  flex-shrink: 0;
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.theme.background};
  border-radius: 0.5rem;
  border: 1px solid ${(props) => props.theme.border};
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    padding: 1rem;
    filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.2));
  }
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;
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

  ul {
    list-style: none;
    gap: 0.8rem;
    display: flex;
    flex-direction: column;
  }

  li {
    line-height: 1.6;
    color: ${(props) => props.theme["primary-text-color"]};

    &:first-of-type {
      font-style: italic;
      color: ${(props) => props.theme.foreground};
      opacity: 0.8;
    }
  }
`;

export const SchoolsCardNoDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
`;
