import styled from 'styled-components'
import { Typography, CardContent as CardContentStyled, Card } from 'components'

export const CardUi = styled(Card)`
  background: #292929;
`

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
  color: #fff;
`

export const CardPanelContent = styled(CardContentStyled)`
  display: flex;
  justify-content: space-between;
  padding: 25px;
`

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  min-height: 150px;
`
