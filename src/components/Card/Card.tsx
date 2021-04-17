/* eslint-disable semi */
import styled from 'styled-components';

// import components
import Link from 'next/link';

const CardDiv = styled.div`
  flex-basis: 40%;
  align-items: center;
  margin: 2rem;
  border: 1px solid black;
  border-radius: 20px;
  padding: 10px;
`;

const Card = (props) => {
  return (
    <>
      {props.list.map((poke, index) => (
        <CardDiv key={index}>
          <h1>{poke.name}</h1>
          <Link href={`/pokemons/${poke.name}`}>
            <button onClick={() => props.setUrl(poke.url)}>See Details</button>
          </Link>
        </CardDiv>
      ))}
    </>
  );
};

export default Card;
