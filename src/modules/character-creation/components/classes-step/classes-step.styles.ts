import styled from "@emotion/styled";

export const StepContentSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const StepStateCard = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 9rem;
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 0.8rem;
  background-color: ${(props) => props.theme.surface};
  color: ${(props) =>
    props.theme.foreground === "#fff" ? "#d1d5db" : "#475569"};
  font-size: 0.95rem;
`;

export const ClassCardsGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
  gap: 0.85rem;
`;

export const ClassCardButton = styled.button<{ isSelected: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.6rem;
  width: 100%;
  height: 100%;
  padding: 0.75rem;
  border: 1px solid
    ${(props) =>
      props.isSelected ? props.theme["green-500"] : props.theme.border};
  border-radius: 0.7rem;
  background-color: ${(props) =>
    props.isSelected ? props.theme["surface-accent"] : props.theme.surface};
  color: ${(props) => props.theme["primary-text-color"]};
  text-align: left;
  cursor: pointer;
  transition:
    border-color 140ms ease,
    background-color 140ms ease,
    transform 140ms ease;

  &:hover {
    border-color: ${(props) => props.theme["border-strong"]};
  }

  &:focus-visible {
    outline: 2px solid ${(props) => props.theme["green-500"]};
    outline-offset: 2px;
  }

  &:active {
    transform: scale(0.99);
  }
`;

export const ClassCardImageWrapper = styled.div`
  width: 100%;
  border-radius: 0.55rem;
  border: 1px solid ${(props) => props.theme.border};
  overflow: hidden;
  background-color: ${(props) => props.theme["muted-background"]};
`;

export const ClassCardImage = styled.img`
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  display: block;
`;

export const ClassCardTitle = styled.h2`
  margin: 0;
  font-size: 0.98rem;
  line-height: 1.2;
  letter-spacing: -0.01em;
`;

export const ClassCardSubtitle = styled.p`
  margin: 0;
  font-size: 0.81rem;
  line-height: 1.45;
  color: ${(props) =>
    props.theme.foreground === "#fff" ? "#d1d5db" : "#475569"};
`;

export const SelectedInfoPanel = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 0.8rem;
  background-color: ${(props) => props.theme.surface};
  padding: 1rem;
`;

export const SelectedInfoHeader = styled.header`
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
`;

export const SelectedInfoTitle = styled.h3`
  margin: 0;
  font-size: 1.12rem;
  line-height: 1.2;
  color: ${(props) => props.theme["primary-text-color"]};
`;

export const SelectedInfoDescription = styled.p`
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.5;
  color: ${(props) =>
    props.theme.foreground === "#fff" ? "#d1d5db" : "#475569"};
`;

export const SelectedQuickFactsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
  gap: 0.65rem;
`;

export const SelectedQuickFactCard = styled.article`
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 0.5rem;
  padding: 0.65rem 0.75rem;
  background-color: ${(props) => props.theme["muted-background"]};
`;

export const SelectedQuickFactLabel = styled.p`
  margin: 0;
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${(props) =>
    props.theme.foreground === "#fff" ? "#d1d5db" : "#475569"};
`;

export const SelectedQuickFactValue = styled.p`
  margin: 0.22rem 0 0;
  font-size: 0.87rem;
  line-height: 1.35;
  font-weight: 600;
  color: ${(props) => props.theme["primary-text-color"]};
`;

export const SelectedInfoColumns = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 0.75rem;
`;

export const SelectedInfoSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 0.55rem;
  padding: 0.72rem;
  background-color: ${(props) => props.theme.surface};
`;

export const SelectedInfoSectionTitle = styled.h4`
  margin: 0;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: ${(props) =>
    props.theme.foreground === "#fff" ? "#d1d5db" : "#475569"};
`;

export const SelectedInfoTagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
`;

export const SelectedInfoTag = styled.span`
  display: inline-flex;
  align-items: center;
  min-height: 1.8rem;
  padding: 0.2rem 0.6rem;
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 9999px;
  background-color: ${(props) => props.theme["muted-background"]};
  color: ${(props) => props.theme["primary-text-color"]};
  font-size: 0.8rem;
  line-height: 1.2;
`;

export const SelectedInfoList = styled.ul`
  margin: 0;
  padding-left: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  color: ${(props) =>
    props.theme.foreground === "#fff" ? "#d1d5db" : "#475569"};

  li {
    font-size: 0.84rem;
    line-height: 1.35;
  }
`;
