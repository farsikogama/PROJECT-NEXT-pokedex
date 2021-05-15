/* eslint-disable comma-dangle */
/* eslint-disable semi */
import styled from 'styled-components'
import { useContext, useEffect } from 'react'

// import component
import Head from 'next/head'
import Card from '../components/Card/Card'
import Search from '../components/Search/Search'

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
  font-family: 'Arial', sans-serif;
  font-size: calc(1.5rem + 2vw);
  text-align: center;
`

export default function Home() {
  // useContext
  const { list } = useContext(ListContext)
  const { setUrlDetail } = useContext(DetailContext)
  const { searchResult, setSearchResult } = useContext(SearchContext)

  useEffect(() => {
    console.log(process.env.NEXT_PUBLIC_BASE_URL)
  }, [])

  return (
    <>
      <Head>
        <title>Pokedex - Gama</title>
        <meta property='og:image' content='/favicon.ico' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <Heading>Pokedex</Heading>
        <CardWrapper>
          <Search list={list} setSearchResult={setSearchResult} />
          <Card
            list={list}
            setUrl={setUrlDetail}
            searchResult={searchResult}
            CardPoke={true}
          />
        </CardWrapper>
      </main>
    </>
  )
}
