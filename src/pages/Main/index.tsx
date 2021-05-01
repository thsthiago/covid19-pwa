import React, { memo, useCallback, useEffect, useState } from 'react'
import api from '../../services/api'
import Board, { Data } from './components/Board'
import { Container } from './style'

function Main() {
  const [data, setData] = useState<Data>({} as Data)
  const [country, setCountry] = useState('brazil')
  console.log(data)
  const getCovidData = useCallback((country) => {
    api(country).then((response) => setData(response.data))
  }, [])

  useEffect(() => {
    getCovidData(country)
  }, [getCovidData, country])

  return (
    <Container>
      <div className="mb-2"></div>
      <Board data={data} />
    </Container>
  )
}

// O memo evita de criar reerização desnessesária
export default memo(Main)
