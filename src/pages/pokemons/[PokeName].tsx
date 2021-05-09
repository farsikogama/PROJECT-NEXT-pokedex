/* eslint-disable comma-dangle */
/* eslint-disable camelcase */
/* eslint-disable semi */
import { useEffect, useState, useContext } from 'react'

// import component
import Card from '../../components/Card/Card'

// import API
import { getPokeDetail } from '../../API/fetchAPI'

// import context
import { DetailContext } from '../../contexts/AppContext'

// Type Checking
type Props = {
  name: string
  weight: number
  height: number
}

export default function Detail() {
  const { urlDetail } = useContext(DetailContext)

  const [image, setImage] = useState()
  const [detail, setDetail] = useState<Props>({
    name: '',
    weight: 0,
    height: 0,
  })

  const pokeDetail = async () => {
    try {
      const response = await getPokeDetail(urlDetail)
      setImage(response.sprites.front_default)
      setDetail({
        name: response.name,
        height: response.height,
        weight: response.weight,
      })
    } catch (error) {}
  }

  useEffect(() => {
    pokeDetail()
  }, [])

  return (
    <>
      <Card
        PokeName={detail.name}
        height={detail.height}
        weight={detail.weight}
        image={image}
        CardDetail={true}
      />
    </>
  )
}
