import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { Button, Container, Row, Col, Card, Stack, CardGroup, ButtonGroup, Navbar, NavDropdown, Nav, FormControl, Form} from 'react-bootstrap';
import {FaFacebook} from 'react-icons/fa'
import {BsInstagram,BsTwitter,BsGoogle,BsTwitch} from 'react-icons/bs'
import logo from './../../assets/logo.png'

function Admin() {
 
  return (
    <div >
      <header className='topo' >
        
      </header>
      <Navbar bg="dark" variant="dark" expand="lg">
      <img src={logo} className="imgLogo" />
        <Container fluid>
          
          <Navbar.Brand href="#">Reviews of  books</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Login</Nav.Link>
              <Nav.Link href="#"> Todos os Livros </Nav.Link>
              <NavDropdown title="Mais" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Por Gênero</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Em Alta</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                 Editar seus Dados
                </NavDropdown.Item>
                <NavDropdown.Item href="#action5">
                 Área do Adm
                </NavDropdown.Item>
              </NavDropdown>
              
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <body className="todo">
       dldkld
      </body>
    </div>
  );
}

export default Admin;
