import styled from "@emotion/styled";

export const CharacterCreationContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  min-height: calc(100vh - 10rem);
  padding-bottom: 1rem;
`;

export const SteppContainer = styled.section`
  width: 100%;
`;

export const HeroHeader = styled.header`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  padding: 1rem 1.1rem;
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 0.8rem;
  background:
    radial-gradient(circle at top right, rgba(0, 0, 0, 0.02), transparent 45%),
    ${(props) => props.theme.surface};
`;

export const HeroTitle = styled.h1`
  margin: 0;
  font-size: clamp(1.5rem, 2.2vw, 2rem);
  line-height: 1.15;
  color: ${(props) => props.theme["primary-text-color"]};
  font-family: "Cinzel", Georgia, serif;
  letter-spacing: -0.02em;
`;

export const HeroSubtitle = styled.p`
  margin: 0;
  font-size: 0.98rem;
  line-height: 1.5;
  color: ${(props) =>
    props.theme.foreground === "#fff" ? "#d1d5db" : "#475569"};
`;

export const FooterActions = styled.footer`
  margin-top: auto;
  padding-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.8rem;

  @media (max-width: 640px) {
    flex-direction: column-reverse;

    button {
      width: 100%;
    }
  }
`;
