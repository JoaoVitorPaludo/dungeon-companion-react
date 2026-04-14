import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { listVariants } from "../../../../commons/animations/variants";

export { listVariants };

export const RpgCharacterSheetsContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const RpgCharacterSheetsSubtitle = styled.p`
  margin: 0;
  color: ${(props) => props.theme.foreground};
  opacity: 0.8;
`;

export const CharacterListContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const CharacterListHeroSection = styled.section`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(280px, 360px);
  gap: 1rem;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`;

export const CharacterListHeroContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 2rem;
  border-radius: 1.5rem;
  border: 1px solid ${(props) => props.theme.border};
  background:
    radial-gradient(circle at top left, rgba(34, 197, 94, 0.16), transparent 45%),
    ${(props) => props.theme["muted-background"]};
`;

export const CharacterListEyebrow = styled.span`
  color: ${(props) => props.theme["green-300"]};
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
`;

export const CharacterListTitle = styled.h1`
  margin: 0;
  color: ${(props) => props.theme["primary-text-color"]};
  font-size: clamp(2rem, 4vw, 3rem);
  line-height: 1;
`;

export const CharacterListDescription = styled.p`
  margin: 0;
  max-width: 60ch;
  color: ${(props) => props.theme.foreground};
  line-height: 1.6;
`;

export const CharacterListGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1rem;
`;

export const CharacterListEmptyState = styled.div`
  padding: 2rem;
  border: 1px dashed ${(props) => props.theme.border};
  border-radius: 1.5rem;
  background-color: ${(props) => props.theme["muted-background"]};
  color: ${(props) => props.theme.foreground};
  text-align: center;
`;
