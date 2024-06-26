import React, { useState } from 'react'
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap'

const NavBar = ({searchMeal}) => {

  const [word,setWord] = useState("");
  function searchForMeal(word){
    searchMeal(word.toLowerCase());
  }
  return (
    <Navbar className='navbar' expand="lg" style={{background:"#153448 !important"}} >
      <Container className='py-2 ' >
        <Navbar.Brand className='navbar-link' href="#">New Restaurants</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={word}
              onChange={(e)=>{
              setWord(e.target.value);
            }}
           />
            <Button onClick={(e)=>{
              e.preventDefault();
              searchForMeal(word);
              setWord("");
            }} variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar

/**
 * 
 * import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavScrollExample() {
  return (
    
  );
}

export default NavScrollExample;
 */