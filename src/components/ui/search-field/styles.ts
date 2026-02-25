import styled from "@emotion/styled";
import { TextField } from "@radix-ui/themes";

export const SearchFieldContainer = styled(TextField.Root)`
  width: 100%;
  background-color: ${(props) => props.theme["muted-background"]};
  border: 1px solid ${(props) => props.theme.border};
  height: 40px;
  outline: none;

  & input {
    background-color: transparent;
    color: ${(props) => props.theme["primary-text-color"]};
    padding: 0.5rem 1rem;
    color: ${(props) => props.theme["primary-text-color"]};
    ::placeholder {
      color: ${(props) => props.theme["primary-text-color"]};
    }
  }

  &:focus-within {
    border-color: ${(props) => props.theme["green-500"]};
  }
`;
export const SearchFieldIconContainer = styled(TextField.Slot)`
  display: flex;
  padding: 0.5rem 1rem;
  color: ${(props) => props.theme["primary-text-color"]};
`;
