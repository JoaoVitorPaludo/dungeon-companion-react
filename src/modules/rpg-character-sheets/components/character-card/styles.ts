import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { cardVariants } from "../../../../commons/animations/variants";

export { cardVariants };

export const CharacterCardContainer = styled(motion.button)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  width: 100%;
  max-width: 210px;
  min-width: 0;
  min-height: 280px;
  padding: 0.9rem;
  border: 1px solid ${(props) => props.theme["border-strong"]};
  border-radius: 1.3rem;
  background:
    linear-gradient(145deg, rgba(34, 197, 94, 0.08), transparent 48%),
    ${(props) => props.theme.surface};
  color: ${(props) => props.theme.foreground};
  cursor: pointer;
  text-align: center;
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
    max-width: 100%;
  }
`;

export const CharacterCardPortraitContainer = styled.div`
  overflow: hidden;
  width: 100%;
  aspect-ratio: 4 / 3;
  border-radius: 1rem;
  background:
    radial-gradient(circle at top, rgba(34, 197, 94, 0.25), transparent 45%),
    linear-gradient(180deg, rgba(15, 23, 42, 0.1), rgba(15, 23, 42, 0.24));
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
  align-items: center;
  gap: 0.35rem;
  min-width: 0;
`;

export const CharacterCardName = styled.h2`
  margin: 0;
  color: ${(props) => props.theme["primary-text-color"]};
  font-size: 1rem;
  letter-spacing: -0.04em;
  line-height: 1.2;
  max-width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CharacterCardClassLevel = styled.p`
  margin: 0;
  color: ${(props) => props.theme.foreground};
  font-size: 0.84rem;
  line-height: 1.35;
  opacity: 0.82;
`;
