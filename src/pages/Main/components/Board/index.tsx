import React, { memo } from 'react'
import { Grid, Skeleton } from 'components'
import Card from '../Card'

export interface Data {
  cases: number
  todayDeaths: number
  recovered: number
  deaths: number
  todayCases: number
}

interface BoardData {
  data: Data
}

function Board({ data }: BoardData) {
  const { cases, deaths, recovered, todayCases, todayDeaths } = data

  console.log(todayCases)
  console.log(todayDeaths)

  const getValue = (value: number) => {
    return value >= 0 ? (
      value
    ) : (
      <Skeleton variant="text" width={182} height={182} />
    )
  }

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={3}>
        <Card label="Total de casos" color="#5d78ff" value={getValue(cases)} />
      </Grid>

      <Grid item xs={12} md={3}>
        <Card
          label="óbitos hoje"
          color="#f7bb29"
          value={getValue(todayDeaths)}
        />
      </Grid>

      <Grid item xs={12} md={3}>
        <Card label="Casos hoje" color="#2c2c2c" value={getValue(todayCases)} />
      </Grid>

      <Grid item xs={12} md={3}>
        <Card
          label="Total de mortos"
          color="#e95078"
          value={getValue(deaths)}
        />
      </Grid>

      <Grid item xs={12} md={3}>
        <Card
          label="Total de recuperados"
          color="#67c887"
          value={getValue(recovered)}
        />
      </Grid>
    </Grid>
  )
}

export default memo(Board)
