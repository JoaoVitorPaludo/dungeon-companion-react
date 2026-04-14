import styled from "@emotion/styled";

export const CreateCharacterCtaContainer = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem;
  border-radius: 1.5rem;
  border: 1px solid ${(props) => props.theme.border};
  background:
    linear-gradient(180deg, rgba(34, 197, 94, 0.16), transparent 70%),
    ${(props) => props.theme["muted-background"]};
`;

export const CreateCharacterCtaIcon = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: 1rem;
  background-color: rgba(34, 197, 94, 0.14);
  color: ${(props) => props.theme["green-300"]};
`;

export const CreateCharacterCtaTitle = styled.h2`
  margin: 0;
  color: ${(props) => props.theme["primary-text-color"]};
  font-size: 1.4rem;
`;

export const CreateCharacterCtaDescription = styled.p`
  margin: 0;
  color: ${(props) => props.theme.foreground};
  line-height: 1.6;
`;

export const CreateCharacterCtaButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  min-height: 2.75rem;
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 999px;
  background-color: ${(props) => props.theme["green-500"]};
  color: #04130a;
  cursor: pointer;
  font-weight: 700;
  transition:
    transform 200ms ease,
    opacity 200ms ease;

  &:hover {
    transform: translateY(-2px);
    opacity: 0.92;
  }
`;
