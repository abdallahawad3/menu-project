import React from 'react'
import { Button } from 'react-bootstrap'

const Filtration = () => {
  return (
    <div className='text-center mt-2'>
      <div>
        <h1>Food List</h1>
      </div>
      <div className='all-btn d-flex justify-content-center  gap-2 '>
        <Button className='btn-filtration' variant="outline-primary">All</Button>
        <Button className='btn-filtration' variant="outline-primary">BreAKfast</Button>
        <Button className='btn-filtration' variant="outline-primary">Lunch</Button>
        <Button className='btn-filtration' variant="outline-primary">Dinner</Button>
      </div>
    </div>
  )
}

export default Filtration