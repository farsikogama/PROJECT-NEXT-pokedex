/* eslint-disable semi */
import styled from 'styled-components';
import { useContext } from 'react';

// import component
import Card from '../../components/Card/Card';

// import Context
import { ListContext } from '../../contexts/AppContext';
import { DetailContext } from '../../contexts/AppContext';

const CardContainer = styled.div`
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 80vw;
  background: red;
`;

export default function Home() {
  const { list } = useContext(ListContext);
  const { setUrlDetail } = useContext(DetailContext);

  return (
    <CardContainer>
      <Card list={list} setUrl={setUrlDetail} />
    </CardContainer>
  );
}
