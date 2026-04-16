import styled from "@emotion/styled";

export const CreateCharacterCtaContainer = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.65rem;
  width: 100%;
  max-width: 210px;
  height: 100%;
  min-height: 0;
  padding: 0.9rem;
  border-radius: 1.3rem;
  border: 1px dashed ${(props) => props.theme["border-strong"]};
  background: ${(props) => props.theme.surface};
  color: ${(props) => props.theme["primary-text-color"]};
  cursor: pointer;
  text-align: center;
  transition:
    transform 160ms ease,
    border-color 200ms ease,
    box-shadow 200ms ease;

  &:hover {
    transform: translateY(-1px);
    border-color: ${(props) => props.theme["green-500"]};
    box-shadow: 0 2px 8px rgba(15, 23, 42, 0.06);
  }

  &:active {
    transform: scale(0.99);
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
  width: 2.6rem;
  height: 2.6rem;
  color: ${(props) => props.theme["green-500"]};
`;

export const CreateCharacterCtaTitle = styled.h2`
  margin: 0;
  color: ${(props) => props.theme["primary-text-color"]};
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  letter-spacing: -0.02em;
  line-height: 1.3;
`;
