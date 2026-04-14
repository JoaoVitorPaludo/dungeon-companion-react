import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { cardVariants } from "../../../../commons/animations/variants";

export { cardVariants };

export const CharacterCardContainer = styled(motion.button)`
  display: grid;
  grid-template-columns: 88px minmax(0, 1fr);
  gap: 0.85rem;
  width: 100%;
  min-width: 0;
  padding: 0.95rem;
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 1.2rem;
  background:
    linear-gradient(145deg, rgba(34, 197, 94, 0.08), transparent 48%),
    ${(props) => props.theme["muted-background"]};
  color: ${(props) => props.theme.foreground};
  cursor: pointer;
  text-align: left;
  transition:
    transform 200ms ease,
    border-color 200ms ease,
    box-shadow 200ms ease;

  &:hover {
    transform: translateY(-3px);
    border-color: ${(props) => props.theme["green-500"]};
    box-shadow: 0 14px 28px rgba(15, 23, 42, 0.14);
  }

  &:focus-visible {
    outline: 2px solid ${(props) => props.theme["green-500"]};
    outline-offset: 3px;
  }

  @media (max-width: 720px) {
    grid-template-columns: 76px minmax(0, 1fr);
  }
`;

export const CharacterCardPortraitContainer = styled.div`
  overflow: hidden;
  min-height: 104px;
  border-radius: 1rem;
  background:
    radial-gradient(circle at top, rgba(34, 197, 94, 0.25), transparent 45%),
    linear-gradient(180deg, rgba(15, 23, 42, 0.12), rgba(15, 23, 42, 0.28));
`;

export const CharacterCardPortrait = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

export const CharacterCardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
  min-width: 0;
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
  max-width: calc(100% - 2.5rem);
  padding: 0.28rem 0.65rem;
  border-radius: 999px;
  background-color: rgba(34, 197, 94, 0.14);
  color: ${(props) => props.theme["green-300"]};
  font-size: 0.72rem;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CharacterCardArrow = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.85rem;
  height: 1.85rem;
  border-radius: 999px;
  background-color: ${(props) => props.theme.secondary};
  flex-shrink: 0;
`;

export const CharacterCardName = styled.h2`
  margin: 0;
  color: ${(props) => props.theme["primary-text-color"]};
  font-size: 1.1rem;
  letter-spacing: -0.04em;
  line-height: 1.05;
`;

export const CharacterCardMetaList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
`;

export const CharacterCardMetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.45rem;
  min-height: 1.85rem;
  padding: 0.35rem 0.65rem;
  border: 1px solid rgba(148, 163, 184, 0.18);
  border-radius: 999px;
  background-color: rgba(148, 163, 184, 0.08);
  font-size: 0.78rem;
`;

export const CharacterCardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  margin-top: auto;
`;

export const CharacterCardLevel = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 0.38rem 0.68rem;
  border-radius: 999px;
  background-color: rgba(34, 197, 94, 0.16);
  color: ${(props) => props.theme["primary-text-color"]};
  font-weight: 700;
  font-size: 0.78rem;
`;

export const CharacterCardUpdatedAt = styled.span`
  font-size: 0.74rem;
  opacity: 0.85;
`;
