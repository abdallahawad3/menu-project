import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { b1 } from '../assets'

const MyCard = ({title,description,price,img}) => {
  return (
    <>
    <Card >
        <Card.Img className='img-width' variant="top" src={img} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
          <p variant="primary">Price: {price }</p>
        </Card.Body>
    </Card>
    </>
  )
}

export default MyCard