import MyCard from '../components/MyCard';
import { Container } from 'react-bootstrap';

function MainSection({data}) {

  const dataList = data.map(e => <MyCard key={e.id} title={e.title} description={e.description} price = {e.price} img={e.img}/> );
  
  return (
      <Container className='main-section my-4'>
        {data.length ? dataList : <h1>No data</h1>}
      </Container>
  )
}

export default MainSection;