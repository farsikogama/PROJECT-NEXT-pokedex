/* eslint-disable comma-dangle */
/* eslint-disable camelcase */
/* eslint-disable semi */
import { useEffect, useState, useContext } from 'react'
import styled from 'styled-components'

// import component
import Card from '../../components/Card/Card'
import Link from 'next/link'

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
    <CardWrapper>
      <Card
        PokeName={detail.name}
        height={detail.height}
        weight={detail.weight}
        image={image}
        CardDetail={true}
      />
      <Link href='/'>
        <button>back to home</button>
      </Link>
    </CardWrapper>
  )
}

// import styling
export const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`
