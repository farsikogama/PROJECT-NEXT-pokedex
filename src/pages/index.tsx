/* eslint-disable comma-dangle */
/* eslint-disable semi */
import styled from 'styled-components'
import { useContext, useEffect } from 'react'
import { device } from '../components/MediaQueries'

// import API
import { getAllPoke } from '../API/fetchAPI'

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

export default function Home() {
  // useContext
  const { list, setList } = useContext(ListContext)
  const { setUrlDetail } = useContext(DetailContext)
  const { searchResult, setSearchResult } = useContext(SearchContext)

  const getPoke = async () => {
    try {
      const response = await getAllPoke(
        `${process.env.NEXT_PUBLIC_BASE_URL}pokemon?limit=100&offset=200`
      )
      const data = response.results

      setList(data)
    } catch (err) {
      console.error(err.message)
    }
  }

  useEffect(() => {
    getPoke()
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

// Styling
const CardWrapper = styled.div`
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  @media ${device.mobileS} {
    width: 65vw;
  }
  @media ${device.mobileM} {
  }
  @media ${device.mobileL} {
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
    width: 80vw;
  }
  @media ${device.laptopL} {
    width: 70vw;
  }
`
const Heading = styled.h1`
  font-family: 'Arial', sans-serif;
  font-size: calc(1.5rem + 2vw);
  text-align: center;
`
