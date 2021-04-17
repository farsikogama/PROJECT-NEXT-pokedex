/* eslint-disable semi */
import { useState, useEffect } from 'react';

// import API
import { getPokeDetail } from '../../API/fetchAPI';

const CardImage = (props) => {
  const [image, setImage] = useState();

  const pokeDetail = async () => {
    try {
      const response = await getPokeDetail(props.urlCard);
      console.log(response);
      setImage(response.sprites.front_shiny);
    } catch (error) {}
  };

  useEffect(() => {
    pokeDetail();
  }, []);

  return (
    <>
      <img src={image} />
    </>
  );
};

export default CardImage;
