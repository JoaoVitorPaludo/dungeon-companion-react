export interface SteppItem {
  id: number;
  label: string;
}

export interface SteppComponentProps {
  activeStep: number;
  steps: SteppItem[];
}
