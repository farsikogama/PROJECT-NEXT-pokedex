/* eslint-disable semi */
import styled from 'styled-components'
import { useContext } from 'react'

// import component
import Card from '../components/Card/Card'

// import Context
import { ListContext, DetailContext } from '../contexts/AppContext'

// Styling
const CardContainer = styled.div`
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 80vw;
`
const Heading = styled.h1`
  font-family: 'Anton', sans-serif;
  font-size: calc(2.5rem + 2vw);
  text-align: center;
`

export default function Home() {
  const { list } = useContext(ListContext)
  const { setUrlDetail } = useContext(DetailContext)

  return (
    <>
      <Heading>Pokemon List</Heading>
      <CardContainer>
        <Card list={list} setUrl={setUrlDetail} />
      </CardContainer>
    </>
  )
}
