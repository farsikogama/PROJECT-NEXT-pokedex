import { useState } from 'react'
import styled from 'styled-components'
import { PokemonList } from '../../interface/index'

// import components

// Type Checking
type Props = {
  list: PokemonList[]
  setSearchResult: (c: PokemonList[]) => void
}

// Styling
const InputForm = styled.input`
  flex-basis: 60%;
  margin: 10px;
  border-radius: 2px;
  border: 1px solid grey;
  height: 30px;
`
const FormWrapper = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80vw;
  margin: auto;
`

const Input = (props: Props) => {
  // useState
  const [inputSearch, setInputSearch] = useState('')

  return (
    <>
      <FormWrapper
        onSubmit={e => {
          e.preventDefault()
          const search = props.list.filter(item => {
            return item.name.includes(inputSearch)
              ? item.name && item.url
              : null
          })
          search.length > 0
            ? props.setSearchResult(search)
            : alert('Cannot find Pokemon')
        }}
      >
        <InputForm
          type='text'
          placeholder='Enter Pokemon name Here'
          value={inputSearch}
          onChange={e => setInputSearch(e.target.value)}
        ></InputForm>
        <button>Search</button>
      </FormWrapper>
    </>
  )
}

export default Input
