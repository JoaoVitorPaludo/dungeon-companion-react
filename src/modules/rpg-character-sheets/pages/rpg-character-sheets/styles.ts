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
  gap: 1.25rem;
`;

export const CharacterListToolbar = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.5rem 0;

  @media (max-width: 720px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const CharacterListToolbarContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
`;

export const CharacterListTitle = styled.h1`
  margin: 0;
  color: ${(props) => props.theme["primary-text-color"]};
  font-size: clamp(1.9rem, 3vw, 2.6rem);
  line-height: 0.95;
  letter-spacing: -0.06em;
`;

export const CharacterListToolbarCaption = styled.p`
  margin: 0;
  max-width: 56ch;
  color: ${(props) => props.theme.foreground};
  line-height: 1.5;
  opacity: 0.82;
`;

export const CharacterListCreateButton = styled.button`
  min-height: 3rem;
  padding: 0.85rem 1.1rem;
  border: 1px solid rgba(34, 197, 94, 0.28);
  border-radius: 999px;
  background:
    linear-gradient(180deg, rgba(34, 197, 94, 0.18), rgba(34, 197, 94, 0.1)),
    ${(props) => props.theme["muted-background"]};
  color: ${(props) => props.theme["primary-text-color"]};
  cursor: pointer;
  font-weight: 700;
  transition:
    transform 200ms ease,
    border-color 200ms ease,
    box-shadow 200ms ease;

  &:hover {
    transform: translateY(-2px);
    border-color: ${(props) => props.theme["green-500"]};
    box-shadow: 0 12px 24px rgba(15, 23, 42, 0.12);
  }
`;

export const CharacterListGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1rem;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

export const CharacterListEmptyState = styled.div`
  padding: 2rem;
  border: 1px dashed ${(props) => props.theme.border};
  border-radius: 1.5rem;
  background-color: ${(props) => props.theme["muted-background"]};
  color: ${(props) => props.theme.foreground};
  text-align: center;
`;
