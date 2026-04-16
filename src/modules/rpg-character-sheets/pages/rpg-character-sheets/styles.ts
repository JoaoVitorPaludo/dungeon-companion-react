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
  align-items: center;
  gap: 1.4rem;
  width: 100%;
`;

export const CharacterListHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.45rem;
  margin-bottom: 0.45rem;
`;

export const CharacterListGreeting = styled.p`
  margin: 0;
  color: ${(props) => props.theme.foreground};
  font-size: clamp(1.1rem, 2vw, 1.4rem);
  line-height: 1.2;
  opacity: 0.92;
  font-family: "Cinzel", Georgia, serif;
  letter-spacing: 0.01em;
`;

export const CharacterListSubtitle = styled.h1`
  margin: 0;
  color: ${(props) => props.theme.foreground};
  font-size: clamp(1.2rem, 2vw, 1.45rem);
  line-height: 1.15;
  letter-spacing: 0.01em;
  font-weight: 600;
  text-align: center;
  font-family: "Cinzel", Georgia, serif;
`;

export const CharacterListGrid = styled(motion.div)`
  display: grid;
  width: 100%;
  max-width: 1080px;
  justify-content: center;
  justify-items: center;
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
