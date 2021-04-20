/* eslint-disable comma-dangle */
/* eslint-disable semi */
import { createContext, useEffect, useState, ReactNode } from 'react'
import { PokemonList } from '../interface/index'

// import API
import { getAllPoke } from '../API/fetchAPI'

// Type Checking
type ListContent = {
  list: PokemonList[]
  setList: (c: PokemonList[]) => void
}

type DetailContent = {
  urlDetail: string
  setUrlDetail: (c: string) => void
}

type SearchContent = {
  searchResult: PokemonList[]
  setSearchResult: (c: PokemonList[]) => void
}

type Props = {
  children?: ReactNode
}

// export context
export const ListContext = createContext<ListContent>({
  list: [],
  setList: () => {},
})
export const DetailContext = createContext<DetailContent>({
  urlDetail: '',
  setUrlDetail: () => {},
})
export const SearchContext = createContext<SearchContent>({
  searchResult: [],
  setSearchResult: () => {},
})

export default function AppContext({ children }: Props) {
  const [list, setList] = useState<PokemonList[]>([])
  const [urlDetail, setUrlDetail] = useState<string>('')
  const [searchResult, setSearchResult] = useState<PokemonList[]>([])

  const getPoke = async () => {
    try {
      const response = await getAllPoke(
        'https://pokeapi.co/api/v2/pokemon?limit=100&offset=200'
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
    <ListContext.Provider value={{ list, setList }}>
      <DetailContext.Provider value={{ urlDetail, setUrlDetail }}>
        <SearchContext.Provider value={{ searchResult, setSearchResult }}>
          {children}
        </SearchContext.Provider>
      </DetailContext.Provider>
    </ListContext.Provider>
  )
}
