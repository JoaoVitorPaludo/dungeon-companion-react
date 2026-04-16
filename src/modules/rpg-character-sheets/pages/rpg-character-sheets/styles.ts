import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { listVariants } from "../../../../commons/animations/variants";

export { listVariants };

export const RpgCharacterSheetsContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-block: 1.5rem 2.25rem;
`;

export const CharacterListContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.4rem;
  width: 100%;
`;

export const CharacterListHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: stretch;
  gap: 0.45rem;
  margin-bottom: 0.45rem;
`;

export const CharacterListGreeting = styled.p`
  margin: 0;
  color: ${(props) => props.theme.foreground};
  font-size: clamp(1.18rem, 2.2vw, 1.52rem);
  line-height: 1.2;
  opacity: 0.95;
  font-family: "Cinzel", Georgia, serif;
  letter-spacing: 0.015em;
`;

export const CharacterListSubtitle = styled.h1`
  margin: 0;
  color: ${(props) =>
    props.theme.foreground === "#fff"
      ? "#e2e8f0"
      : props.theme["primary-text-color"]};
  font-size: clamp(1rem, 1.8vw, 1.2rem);
  line-height: 1.35;
  letter-spacing: 0.01em;
  font-weight: 500;
  text-align: center;
  font-family: "Cinzel", Georgia, serif;
`;

export const CharacterListGrid = styled(motion.div)`
  display: grid;
  width: 100%;
  max-width: 1080px;
  align-self: flex-start;
  margin-top: 60px;
  align-items: stretch;
  justify-content: start;
  justify-items: start;
  grid-template-columns: repeat(auto-fit, minmax(180px, 210px));
  gap: 1.15rem;

  @media (max-width: 720px) {
    grid-template-columns: repeat(auto-fit, minmax(156px, 1fr));
    gap: 0.9rem;
  }
`;

export const CharacterListEmptyState = styled.div`
  width: 100%;
  max-width: 680px;
  padding: 2rem;
  border: 1px dashed ${(props) => props.theme["border-strong"]};
  border-radius: 1.5rem;
  background-color: ${(props) => props.theme.surface};
  color: ${(props) => props.theme.foreground};
  text-align: center;
`;
