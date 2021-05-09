/* eslint-disable indent */
/* eslint-disable semi */
// import interface
import { PokemonInterface } from '../../interface/index'
import styled, { css } from 'styled-components'

// import components
import Link from 'next/link'
import CardImage from '../CardImage/CardImage'

// Type Checking
type Props = {
  list?: Array<PokemonInterface | null>
  searchResult?: Array<PokemonInterface | null>
  setSearchResult?: (searchValue: Array<PokemonInterface | null>) => void
  setUrl?: (urlValue: string) => void | null
  CardPoke?: boolean
  CardDetail?: any
  PokeName?: string
  height?: number
  weight?: number
  image?: string
}

// Styling
const CardWrapper = styled.div`
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 100vh;
  flex-wrap: wrap;
`

const CardDiv = styled.div`
  ${(props: Props) =>
    props.CardPoke &&
    css`
      flex-basis: 30%;
      margin: 0.5rem;
      border: 1px solid black;
      border-radius: 20px;
      padding: 30px;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      &:hover {
        background: aquamarine;
      }
    `}
  ${(props: Props) =>
    props.CardDetail &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      flex-basis: 100%;
      border: 1px solid black;
      border-radius: 50px;
      padding: 30px;
      margin-bottom: -20px;
    `}
`
const Heading = styled.h1`
  font-size: 1.5rem;
`

const Card = (props: Props) => {
  return (
    <>
      {props.CardPoke &&
        (props.searchResult?.length
          ? props.searchResult.map((poke, index) => {
              if (poke) {
                return (
                  <Link key={index} href={`/pokemons/${poke.name}`}>
                    <CardDiv
                      onClick={() =>
                        props.setUrl ? props.setUrl(poke.url) : null
                      }
                      CardPoke={props.CardPoke}
                    >
                      <div>
                        <Heading>{poke.name}</Heading>
                      </div>
                      <CardImage urlCard={poke.url} />
                    </CardDiv>
                  </Link>
                )
              } else {
                return null
              }
            })
          : props.list?.map((poke, index) => {
              if (poke) {
                return (
                  <Link key={index} href={`/pokemons/${poke.name}`}>
                    <CardDiv
                      onClick={() =>
                        props.setUrl ? props.setUrl(poke.url) : null
                      }
                      CardPoke={props.CardPoke}
                    >
                      <div>
                        <Heading>{poke.name}</Heading>
                      </div>
                      <CardImage urlCard={poke.url} />
                    </CardDiv>
                  </Link>
                )
              } else {
                return null
              }
            }))}

      {props.CardDetail && (
        <CardWrapper>
          <CardDiv CardDetail={props.CardDetail}>
            <img src={props.image} width='150px' height='150px' />
            <h1>{props.PokeName}</h1>
            <h1>Height: {props.height}</h1>
            <h1>Weight: {props.weight}</h1>
          </CardDiv>
          <Link href='/'>
            <button>back to home</button>
          </Link>
        </CardWrapper>
      )}
    </>
  )
}

export default Card
