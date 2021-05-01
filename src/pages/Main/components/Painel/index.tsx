import React, { memo } from 'react'
import { Card, Typography, Button, Select, MenuItem } from 'components'
import COUNTRIES from 'commons/constants/countries'
import { CardPanelContent, Item } from './style'
import { Data } from '../Board'

interface PanelData {
  updateAt: string
  onChange(e: React.ChangeEvent<HTMLInputElement>): void
  data: Data
  country: string
  getCovidData(country: string): void
}

interface Country {
  label: string
  value: string
  flag: string
}

function Panel({ updateAt, onChange, data, country, getCovidData }: PanelData) {
  const { cases, deaths, recovered, todayCases, todayDeaths } = data

  function detectarMobile() {
    if (
      navigator.userAgent.match(/Android/i) ||
      navigator.userAgent.match(/webOS/i) ||
      navigator.userAgent.match(/iPhone/i) ||
      navigator.userAgent.match(/iPad/i) ||
      navigator.userAgent.match(/iPod/i) ||
      navigator.userAgent.match(/BlackBerry/i) ||
      navigator.userAgent.match(/Windows Phone/i)
    ) {
      return true
    } else {
      return false
    }
  }

  const renderCountries = (country: Country, index: number) => (
    <MenuItem key={`country-${index}`} value={country.value}>
      <Item>
        <div>{country.label}</div>
        <img src={country.flag} alt={`País-${country.label}`} />
      </Item>
    </MenuItem>
  )

  const textCovid19 = `País: ${country} - recuperados: ${recovered}`

  const copyInfo = () => {
    navigator.clipboard.writeText(textCovid19)
  }

  const shareInfo = () => {
    navigator.share({
      title: `Dados do Covid19 - ${country}`,
      text: textCovid19,
      url: 'http://colocarurl'
    })
  }

  const renderShareButton = (
    <div>
      <Button variant="contained" color="primary" onClick={shareInfo}>
        Compartilhar
      </Button>
    </div>
  )

  const renderCopyButton = (
    <div>
      <Button variant="contained" color="primary" onClick={copyInfo}>
        Copiar
      </Button>
    </div>
  )

  return (
    <Card>
      <CardPanelContent>
        <div>
          <Typography variant="h5" component="span" color="primary">
            COVID19 | PWA
          </Typography>
          <Typography variant="h6" component="span" color="primary">
            Painel Coronavirus
          </Typography>
          <Typography variant="body2" component="span" color="primary">
            Atualizado em: {updateAt}
          </Typography>
          <div className="pt-2">
            <Select
              onChange={(e) =>
                onChange(e as React.ChangeEvent<HTMLInputElement>)
              }
              value={country}>
              {COUNTRIES.map(renderCountries)}
            </Select>
          </div>
        </div>
        {detectarMobile() ? renderShareButton : renderCopyButton}
      </CardPanelContent>
    </Card>
  )
}

export default memo(Panel)
