import styled from "@emotion/styled";

export const SteppComponentContainer = styled.nav`
  display: flex;
  width: 100%;
  overflow-x: auto;
  padding: 0.5rem;
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 0.75rem;
  background-color: ${(props) => props.theme.surface};
`;

export const SteppComponentList = styled.ol`
  display: flex;
  align-items: center;
  gap: 0.45rem;
  min-width: fit-content;
  list-style: none;
`;

export const SteppComponentItem = styled.li<{
  isActive: boolean;
  isDone: boolean;
}>`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.42rem 0.62rem;
  border-radius: 0.5rem;
  border: 1px solid
    ${(props) =>
      props.isActive
        ? props.theme["green-500"]
        : props.isDone
          ? props.theme["border-strong"]
          : props.theme.border};
  background-color: ${(props) =>
    props.isActive
      ? props.theme["surface-accent"]
      : props.isDone
        ? props.theme["muted-background"]
        : props.theme.surface};
  color: ${(props) =>
    props.isActive ? props.theme["green-500"] : props.theme["primary-text-color"]};
  white-space: nowrap;
`;

export const SteppComponentIndex = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 0.35rem;
  background-color: ${(props) => props.theme.surface};
  border: 1px solid ${(props) => props.theme.border};
  font-size: 0.72rem;
  font-weight: 700;
`;

export const SteppComponentLabel = styled.span`
  font-size: 0.76rem;
  line-height: 1.2;
  letter-spacing: 0.02em;
`;
