import styled from "@emotion/styled";

export const RpgCharacterSheetWorkspaceContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
  border-radius: 1.5rem;
  border: 1px solid ${(props) => props.theme.border};
  background-color: ${(props) => props.theme["muted-background"]};
`;

export const RpgCharacterSheetWorkspaceTitle = styled.h1`
  margin: 0;
  color: ${(props) => props.theme["primary-text-color"]};
  font-size: 2rem;
`;

export const RpgCharacterSheetWorkspaceDescription = styled.p`
  margin: 0;
  color: ${(props) => props.theme.foreground};
  line-height: 1.6;
`;
