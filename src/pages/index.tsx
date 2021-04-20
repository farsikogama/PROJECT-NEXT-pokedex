/* eslint-disable comma-dangle */
/* eslint-disable semi */
import styled from 'styled-components'
import { useContext } from 'react'

// import component
import Card from '../components/Card/Card'
import Input from '../components/Search/Search'

// import Context
import {
  ListContext,
  DetailContext,
  SearchContext,
} from '../contexts/AppContext'

// Styling
const CardWrapper = styled.div`
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 80vw;
`
const Heading = styled.h1`
  font-family: 'Anton', sans-serif;
  font-size: calc(2.5rem + 4vw);
  text-align: center;
`

export default function Home() {
  // useContext
  const { list } = useContext(ListContext)
  const { setUrlDetail } = useContext(DetailContext)
  const { searchResult, setSearchResult } = useContext(SearchContext)

  return (
    <>
      <Heading>POKEDEX</Heading>
      <Input list={list} setSearchResult={setSearchResult} />
      <CardWrapper>
        <Card
          list={list}
          setUrl={setUrlDetail}
          searchResult={searchResult}
          CardPoke={true}
        />
      </CardWrapper>
    </>
  )
}
