import React, { memo } from 'react'
import { Label, Value, CardContent } from './style'
import { Card as CardUi } from 'components'

interface CardData {
  color: string
  label: string
  value: React.ReactNode
}

function Card({ value, color, label }: CardData) {
  return (
    <CardUi>
      <CardContent color={color}>
        <Value>{value}</Value>
        <Label>{label}</Label>
      </CardContent>
    </CardUi>
  )
}

export default memo(Card)
