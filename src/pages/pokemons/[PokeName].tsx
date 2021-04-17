/* eslint-disable semi */
import styled from 'styled-components';
import { useEffect, useState, useContext } from 'react';

// import API
import { getPokeDetail } from '../../API/fetchAPI';

// import component
import Image from 'next/image';

// import context
import { DetailContext } from '../../contexts/AppContext';

export default function Detail() {
  const { urlDetail } = useContext(DetailContext);

  const [image, setImage] = useState();
  const [detail, setDetail] = useState({});

  const pokeDetail = async () => {
    try {
      const response = await getPokeDetail(urlDetail);
      console.log(response);
      setImage(response.sprites.front_shiny);
      setDetail(response);
    } catch (error) {}
  };

  useEffect(() => {
    pokeDetail();
  }, []);
  return (
    <>
      <div>
        <h1>{detail.name}</h1>
        <h1>{detail.height}</h1>
        <h1>{detail.weight}</h1>
        <img src={image} width='500px' height='500px' />
      </div>
    </>
  );
}
