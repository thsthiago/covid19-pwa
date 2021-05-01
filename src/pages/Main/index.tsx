import React, { memo, useCallback, useEffect, useState } from 'react'
import api from '../../services/api'
import Board, { Data } from './components/Board'
import Panel from './components/Painel'
import { Container } from './style'

function Main() {
  const [data, setData] = useState<Data>({} as Data)
  const [country, setCountry] = useState('brazil')
  const updateAt = new Date().toLocaleString()

  const getCovidData = useCallback((country: string) => {
    api(country).then((response) => setData(response.data))
  }, [])

  useEffect(() => {
    getCovidData(country)
  }, [getCovidData, country])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const country = e.target.value
    setCountry(country || '')
  }

  return (
    <Container>
      <div className="mb-2">
        <Panel
          data={data}
          updateAt={updateAt}
          onChange={handleChange}
          country={country}
          getCovidData={getCovidData}
        />
      </div>
      <Board data={data} />
    </Container>
  )
}

// O memo evita de criar reerização desnessesária
export default memo(Main)
