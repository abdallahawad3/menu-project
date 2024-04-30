import React, { useContext } from 'react'
import MyCard from '../components/MyCard';
import { Container } from 'react-bootstrap';
import { DataApi } from '../context/DataApi';

function MainSection() {

  const data = useContext(DataApi);
  const dataList = data.map(e => <MyCard key={e.id} title={e.title} description={e.description} price = {e.price} img={e.img}/> )
  return (
      <Container className='main-section my-4'>
        {dataList}
      </Container>
  )
}

export default MainSection;