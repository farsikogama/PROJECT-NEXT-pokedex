/* eslint-disable semi */
import styled from 'styled-components';

// import components
import Link from 'next/link';
import CardImage from '../CardImage/CardImage';

const CardDiv = styled.div`
  flex-basis: 40%;
  align-items: center;
  margin: 1rem;
  border: 1px solid black;
  border-radius: 40px;
  padding: 30px;
  cursor: pointer;
  display: felx;
  justify-content: center;
  align-items: center;
`;

const Card = (props) => {
  return (
    <>
      {props.list.map((poke, index) => (
        <Link key={index} href={`/pokemons/${poke.name}`}>
          <CardDiv onClick={() => props.setUrl(poke.url)}>
            <div>
              <h1>{poke.name}</h1>
            </div>
            <CardImage urlCard={poke.url} />
          </CardDiv>
        </Link>
      ))}
    </>
  );
};

export default Card;
