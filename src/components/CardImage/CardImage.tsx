/* eslint-disable semi */
import { useState, useEffect } from 'react'

// import API
import { getPokeDetail } from '../../API/fetchAPI'

// Type Checking
type Props = {
  urlCard: string
}

const CardImage = (props: Props) => {
  const [image, setImage] = useState()

  const pokeDetail = async () => {
    try {
      const response = await getPokeDetail(props.urlCard)
      console.log(response)
      // eslint-disable-next-line no-undef
      setImage(response.sprites.front_default)
    } catch (error) {}
  }

  useEffect(() => {
    pokeDetail()
  }, [])

  return (
    <>
      <img src={image} />
    </>
  )
}

export default CardImage
