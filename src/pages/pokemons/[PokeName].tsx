/* eslint-disable comma-dangle */
/* eslint-disable camelcase */
/* eslint-disable semi */
import { useEffect, useState, useContext } from 'react'

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
      <div>
        <h1>{detail.name}</h1>
        <h1>{detail.height}</h1>
        <h1>{detail.weight}</h1>
        <img src={image} width='500px' height='500px' />
      </div>
    </>
  )
}
