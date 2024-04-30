import React from 'react'
import { Button } from 'react-bootstrap'

const Filtration = ({filter,category}) => {

  // filter the Category buttons
  const buttonCategory = category.map(e=>
  <Button 
    key={Math.random()*10} 
    onClick={()=>{
      finalData(e.toLowerCase())}} 
    className='btn-filtration' 
    variant="outline-primary">
      {e.toUpperCase()}
  </Button>)
  // Filter the Category
  function finalData (cat) {
    filter(cat);
  }

  return (
    <div className='text-center mt-2'>
      <div>
        <h1>Food List</h1>
      </div>
      <div className='all-btn d-flex justify-content-center gap-2 flex-wrap'>
        {buttonCategory}
      </div>
    </div>
  )
}

export default Filtration