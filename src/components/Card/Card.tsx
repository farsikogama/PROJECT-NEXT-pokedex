/* eslint-disable semi */
// import components
import Link from 'next/link'
import CardImage from '../CardImage/CardImage'

// Styling
import styled from 'styled-components'
const CardDiv = styled.div`
  flex-basis: 30%;
  align-items: center;
  margin: 0.5rem;
  border: 1px solid black;
  border-radius: 20px;
  padding: 30px;
  cursor: pointer;
  display: felx;
  justify-content: center;
  align-items: center;
`
const Heading = styled.h1`
  font-size: 1.5rem;
`

// Type Checking
type PokemonList = {
  name: string
  url: string
}

type Props = {
  list: PokemonList[]
  setUrl: (c: string) => void
}

const Card = (props: Props) => {
  return (
    <>
      {props.list.map((poke, index) => (
        <Link key={index} href={`/pokemons/${poke.name}`}>
          <CardDiv onClick={() => props.setUrl(poke.url)}>
            <div>
              <Heading>{poke.name}</Heading>
            </div>
            <CardImage urlCard={poke.url} />
          </CardDiv>
        </Link>
      ))}
    </>
  )
}

export default Card
