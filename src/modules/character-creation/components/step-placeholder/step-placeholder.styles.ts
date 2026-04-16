import styled from "@emotion/styled";

export const StepPlaceholderContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  border: 1px dashed ${(props) => props.theme["border-strong"]};
  border-radius: 0.8rem;
  background-color: ${(props) => props.theme.surface};
  padding: 1.3rem;
`;

export const StepPlaceholderTitle = styled.h2`
  margin: 0;
  font-size: 1.1rem;
  color: ${(props) => props.theme["primary-text-color"]};
`;

export const StepPlaceholderDescription = styled.p`
  margin: 0;
  font-size: 0.92rem;
  line-height: 1.5;
  color: ${(props) =>
    props.theme.foreground === "#fff" ? "#d1d5db" : "#475569"};
`;
