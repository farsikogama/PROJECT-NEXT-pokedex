/* eslint-disable semi */
import { createContext, useEffect, useState } from 'react';

// import API
import { getAllPoke } from '../API/fetchAPI';

// export context
export const ListContext = createContext({});
export const DetailContext = createContext({});

export default function AppContext({ children }) {
  const [list, setList] = useState([]);
  const [urlDetail, setUrlDetail] = useState('');

  const getPoke = async () => {
    try {
      const response = await getAllPoke(
        'https://pokeapi.co/api/v2/pokemon?limit=100&offset=200'
      );

      setList(response.results);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getPoke();
  }, []);

  return (
    <ListContext.Provider value={{ list, setList }}>
      <DetailContext.Provider value={{ urlDetail, setUrlDetail }}>
        {children}
      </DetailContext.Provider>
    </ListContext.Provider>
  );
}

// DEPRECATED FUNCTION
// const getPoke = () => {
//   setList(postData);
// };

// export async function getServerSideProps() {
//   try {
//     const response = await getAllPoke(
//       'https://pokeapi.co/api/v2/pokemon?limit=100&offset=200'
//     );
//     console.log(response);

//     return {
//       props: { postData: response.results },
//     };
//   } catch (err) {
//     console.error(err.message);
//   }
// }
