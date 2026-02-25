import { Search } from "lucide-react";
import * as S from "./styles";
interface SearchFieldProps {
  placeholder?: string;
  width?: string;
  handleSearch?: (value: string) => void;
}
export function SearchField({
  placeholder,
  width,
  handleSearch,
}: SearchFieldProps) {
  return (
    <S.SearchFieldContainer
      placeholder={placeholder || "Search..."}
      style={{ width }}
      onChange={(e) => handleSearch?.(e.currentTarget.value)}
    >
      <S.SearchFieldIconContainer side="right">
        <Search size={16} />
      </S.SearchFieldIconContainer>
    </S.SearchFieldContainer>
  );
}
