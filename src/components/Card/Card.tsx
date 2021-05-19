/* eslint-disable indent */
/* eslint-disable semi */
// import interface
import { PokemonInterface } from '../../interface/index'

// import components
import Link from 'next/link'
import CardImage from '../CardImage/CardImage'
import { CardDiv, Heading } from './StyledCard'

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

// import styling

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
                      <CardImage urlCard={poke.url} />
                      <div>
                        <Heading>{poke.name}</Heading>
                      </div>
                    </CardDiv>
                  </Link>
                )
              } else {
                return null
              }
            }))}

      {props.CardDetail && (
        <>
          <CardDiv CardDetail={props.CardDetail}>
            <img src={props.image} width='150px' height='150px' />
            <h1>{props.PokeName}</h1>
            <h3>Height: {props.height}</h3>
            <h3>Weight: {props.weight}</h3>
          </CardDiv>
        </>
      )}
    </>
  )
}

export default Card
