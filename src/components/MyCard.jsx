import React from 'react'
import {  Card } from 'react-bootstrap'


const MyCard = ({title,description,price,img}) => {
  return (
    <>
    <Card className='scale-up-center' >
        <Card.Img className='img-width' variant="top" src={img} />
        <Card.Body>
          <div className='d-flex justify-content-between'>
          <Card.Title>{title}</Card.Title>
          <p className='text-danger'>Price: {price}$</p>
          </div>
          <Card.Text>
            {description}
          </Card.Text>
          
        </Card.Body>
    </Card>
    </>
  )
}

export default MyCard