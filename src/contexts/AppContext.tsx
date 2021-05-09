/* eslint-disable comma-dangle */
/* eslint-disable semi */
import { createContext, useEffect, useState, ReactNode } from 'react'
import { PokemonInterface } from '../interface/index'

// import API
import { getAllPoke } from '../API/fetchAPI'

// Type Checking
type ListContent = {
  list: Array<PokemonInterface>
  setList: (listValue: Array<PokemonInterface>) => void
}

type DetailContent = {
  urlDetail: string
  setUrlDetail: (urlValue: string) => void
}

type SearchContent = {
  searchResult: Array<PokemonInterface>
  setSearchResult: (searchValue: Array<PokemonInterface>) => void
}

type AppContextProps = {
  children: ReactNode
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

export default function AppContext({ children }: AppContextProps) {
  // pisah contextnya
  // bikin object baru yang isinya ada detail pokemonnya
  const [list, setList] = useState<Array<PokemonInterface>>([])

  const [urlDetail, setUrlDetail] = useState<string>('')
  const [searchResult, setSearchResult] = useState<Array<PokemonInterface>>([])

  // fetching API seharusnya di level pages
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
    <ListContext.Provider value={{ list, setList }}>
      <DetailContext.Provider value={{ urlDetail, setUrlDetail }}>
        <SearchContext.Provider value={{ searchResult, setSearchResult }}>
          {children}
        </SearchContext.Provider>
      </DetailContext.Provider>
    </ListContext.Provider>
  )
}
