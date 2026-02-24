import * as S from './styles'
interface TooltipComponentProps {
  content?: string
  align?: 'center' | 'end' | 'start'
  side?: 'top' | 'right' | 'bottom' | 'left'
  children?: React.ReactNode
}
export function TooltipComponent({
  content,
  align,
  side,
  children,
}: TooltipComponentProps) {
  return (
    <S.TooltipContainer align={align} content={content} side={side}>
      {children}
    </S.TooltipContainer>
  )
}
