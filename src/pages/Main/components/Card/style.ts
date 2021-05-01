import styled from 'styled-components'
import { Typography, CardContent as CardContentStyled } from 'components'

export const Label = styled(Typography)`
  font-weight: 500;
  font-size: 1.5rem;
`
export const Value = styled(Typography)`
  font-weight: 400;
  font-size: 2.5rem;
`

export const CardContent = styled(CardContentStyled)`
  border-left: 8px solid ${({ color }) => color || '#5d78ff'};
`
