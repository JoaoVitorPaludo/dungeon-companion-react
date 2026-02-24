import styled from "@emotion/styled";

export const AppBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 2rem;
  border: 1px solid ${(props) => props.theme.border};
  background-color: ${(props) => props.theme["muted-background"]};
  border-radius: 2rem;
  margin-bottom: 2rem;
`;
export const AppBarTitle = styled.h1`
  font-size: 1.2rem;
  font-weight: bold;
  color: ${(props) => props.theme["primary-text-color"]};
  display: flex;
  align-items: center;
  gap: 0.5rem;
  svg {
    cursor: pointer;
  }
`;
export const AppBarActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
export const ThemeToggle = styled.button`
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: ${(props) => props.theme.secondary};
  /* background-color: ${(props) => props.theme.background}; */
  color: ${(props) => props.theme.foreground};
  border: none;
  cursor: pointer;
  transition: background-color 300ms;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.8;
  }
`;
