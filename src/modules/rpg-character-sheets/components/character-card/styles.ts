import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { cardVariants } from "../../../../commons/animations/variants";

export { cardVariants };

export const CharacterCardContainer = styled(motion.button)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  padding: 1.25rem;
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 1.25rem;
  background:
    linear-gradient(135deg, rgba(34, 197, 94, 0.08), transparent 45%),
    ${(props) => props.theme["muted-background"]};
  color: ${(props) => props.theme.foreground};
  cursor: pointer;
  text-align: left;
  transition:
    transform 200ms ease,
    border-color 200ms ease,
    box-shadow 200ms ease;

  &:hover {
    transform: translateY(-4px);
    border-color: ${(props) => props.theme["green-500"]};
    box-shadow: 0 16px 32px rgba(15, 23, 42, 0.16);
  }
`;

export const CharacterCardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

export const CharacterCardBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.35rem 0.75rem;
  border-radius: 999px;
  background-color: rgba(34, 197, 94, 0.14);
  color: ${(props) => props.theme["green-300"]};
  font-size: 0.8rem;
  font-weight: 600;
`;

export const CharacterCardArrow = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 999px;
  background-color: ${(props) => props.theme.secondary};
`;

export const CharacterCardName = styled.h2`
  margin: 0;
  color: ${(props) => props.theme["primary-text-color"]};
  font-size: 1.35rem;
`;

export const CharacterCardMetaList = styled.div`
  display: grid;
  gap: 0.75rem;
`;

export const CharacterCardMetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 0.95rem;
`;

export const CharacterCardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-top: auto;
`;

export const CharacterCardLevel = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 0.4rem 0.75rem;
  border-radius: 999px;
  background-color: ${(props) => props.theme.secondary};
  color: ${(props) => props.theme["primary-text-color"]};
  font-weight: 700;
`;

export const CharacterCardUpdatedAt = styled.span`
  font-size: 0.85rem;
  opacity: 0.85;
`;
