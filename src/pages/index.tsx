/* eslint-disable semi */
import styled from 'styled-components'
import { useContext } from 'react'

// import component
import Card from '../components/Card/Card'

// import Context
import { ListContext, DetailContext } from '../contexts/AppContext'

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
  const { list } = useContext(ListContext)
  const { setUrlDetail } = useContext(DetailContext)

  return (
    <>
      <Heading>POKEDEX</Heading>
      <CardWrapper>
        <Card list={list} setUrl={setUrlDetail} CardPoke={true} />
      </CardWrapper>
    </>
  )
}
