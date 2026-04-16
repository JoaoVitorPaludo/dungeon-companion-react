import styled from "@emotion/styled";

export const CreateCharacterCtaContainer = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  max-width: 210px;
  min-height: 280px;
  padding: 1rem;
  border-radius: 1.3rem;
  border: 2px dashed ${(props) => props.theme["border-strong"]};
  background:
    linear-gradient(180deg, rgba(34, 197, 94, 0.12), transparent 72%),
    ${(props) => props.theme.surface};
  color: ${(props) => props.theme["primary-text-color"]};
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

export const CreateCharacterCtaIcon = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 1rem;
  background-color: rgba(34, 197, 94, 0.12);
  color: ${(props) => props.theme["green-500"]};
`;

export const CreateCharacterCtaTitle = styled.h2`
  margin: 0;
  color: ${(props) => props.theme["primary-text-color"]};
  font-size: 1rem;
  letter-spacing: -0.03em;
`;
