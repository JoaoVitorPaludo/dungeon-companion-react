import type {
  ClassCardContent,
  ClassDetail,
  ClassOption,
} from "../../pages/character-creation.types";

export interface ClassesStepProps {
  classes: ClassOption[];
  classDetail: ClassDetail | null;
  selectedClassIndex: string | null;
  classCardContentMap: Record<string, ClassCardContent>;
  defaultClassCardContent: ClassCardContent;
  isLoadingStepTwo: boolean;
  hasStepTwoError: boolean;
  handleSelectClass: (classIndex: string) => void;
}
