import styled from "@emotion/styled";
import * as RadixAccordion from "@radix-ui/react-accordion";

export const AccordionRoot = styled(RadixAccordion.Root)`
  border-radius: 0.375rem;
  width: 100%;
  overflow: hidden;
`;

export const AccordionItem = styled(RadixAccordion.Item)`
  overflow: hidden;
  margin-bottom: 0.5rem;
  background-color: ${(props) => props.theme.background};
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 0.375rem;
  transition: all 0.2s ease;

  &:hover {
    border-color: ${(props) => props.theme["green-500"]};
    box-shadow: 0 0 8px rgba(34, 197, 94, 0.1);
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

export const AccordionHeader = styled(RadixAccordion.Header)`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 0rem;

  &[data-state="open"] {
    padding-bottom: 0rem;
  }
`;

export const AccordionTrigger = styled(RadixAccordion.Trigger)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1rem;
  background-color: ${(props) => props.theme["muted-background"]};
  color: ${(props) => props.theme.foreground};
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  border: none;
  transition: all 0.2s ease;

  svg {
    cursor: pointer;
  }
  &:focus-visible {
    outline: 2px solid ${(props) => props.theme["green-500"]};
    outline-offset: -2px;
  }
  &[data-state="open"] {
    background-color: ${(props) => props.theme["green-500"]};
    color: #131a29 !important;
    svg {
      transform: rotate(180deg);
    }
  }
`;

export const AccordionContent = styled(RadixAccordion.Content)`
  padding: 1rem;
  background-color: ${(props) => props.theme.background};
  border-top: 1px solid ${(props) => props.theme.border};
  font-size: 0.95rem;
  line-height: 1.6;

  /* animation: slideDown 0.3s ease-out;

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  } */
`;
