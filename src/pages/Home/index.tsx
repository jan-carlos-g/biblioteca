import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { Button, Container, Row, Col, Card, Stack, CardGroup, ButtonGroup, Navbar, NavDropdown, Nav, FormControl, Form } from 'react-bootstrap';
import { FaFacebook } from 'react-icons/fa'
import { BsInstagram, BsTwitter, BsGoogle, BsTwitch } from 'react-icons/bs'
import logo from './../../assets/logo.png'
import Admin from '../Admin';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";


function Home() {
  
  const books = [
    {
      "id": 1,
      "name": "Auto da Compadecida",
      "genre": "Comédia",
      "description": "Auto da Compadecida é uma peça teatral em forma de auto, em três atos, escrita pelo autor brasileiro Ariano Suassuna em 1955.",
      "image": "https://www.themoviedb.org/t/p/w500/m8eFedsS7vQCZCS8WGp5n1bVD0q.jpg"
    },
    {
      "id": 2,
      "name": "Dom Casmurro",
      "genre": "Romance",
      "description": "Dom Casmurro é um romance escrito por Machado de Assis, publicado em 1899 pela Livraria Garnier. Escrito para publicação em livro, o que ocorreu em 1900",
      "image": "https://m.media-amazon.com/images/I/41FvGDc26RL._SY346_.jpg"
    },
    {
      "id": 3,
      "name": "O Cortiço",
      "genre": "Romance",
      "description": "O Cortiço é um romance naturalista do brasileiro Aluísio Azevedo publicado em 1890 que denuncia a exploração e as péssimas condições de vida dos moradores das estalagens ou dos cortiços cariocas do final do século XIX",
      "image": "https://images-na.ssl-images-amazon.com/images/I/613Tio4QJIL._SY344_BO1,204,203,200_QL70_ML2_.jpg"
    },
    {
      "id": 4,
      "name": "Quincas Berro D'água",
      "genre": "Romance",
      "description": "A Morte e a Morte de Quincas Berro d'Água é uma novela do escritor brasileiro Jorge Amado, membro da Academia Brasileira de Letras, publicada pela primeira vez em junho de 1959, na revista Senhor, com ilustrações de Glauco Rodrigues",
      "image": "https://www.coladaweb.com/wp-content/uploads/a-morte-ea-morte-de-quincas.jpg"
    },
    {
      "id": 3,
      "name": "O Cortiço",
      "genre": "Romance",
      "description": "O Cortiço é um romance naturalista do brasileiro Aluísio Azevedo publicado em 1890 que denuncia a exploração e as péssimas condições de vida dos moradores das estalagens ou dos cortiços cariocas do final do século XIX",
      "image": "https://www.themoviedb.org/t/p/w500/m8eFedsS7vQCZCS8WGp5n1bVD0q.jpg"
    },
    {
      "id": 3,
      "name": "O Cortiço",
      "genre": "Romance",
      "description": "O Cortiço é um romance naturalista do brasileiro Aluísio Azevedo publicado em 1890 que denuncia a exploração e as péssimas condições de vida dos moradores das estalagens ou dos cortiços cariocas do final do século XIX",
      "image": "https://www.themoviedb.org/t/p/w500/m8eFedsS7vQCZCS8WGp5n1bVD0q.jpg"
    }
    ,
    {
      "id": 3,
      "name": "O Cortiço",
      "genre": "Romance",
      "description": "O Cortiço é um romance naturalista do brasileiro Aluísio Azevedo publicado em 1890 que denuncia a exploração e as péssimas condições de vida dos moradores das estalagens ou dos cortiços cariocas do final do século XIX",
      "image": "https://www.themoviedb.org/t/p/w500/m8eFedsS7vQCZCS8WGp5n1bVD0q.jpg"
    }
    ,
    {
      "id": 3,
      "name": "O Cortiço",
      "genre": "Romance",
      "description": "O Cortiço é um romance naturalista do brasileiro Aluísio Azevedo publicado em 1890 que denuncia a exploração e as péssimas condições de vida dos moradores das estalagens ou dos cortiços cariocas do final do século XIX",
      "image": "https://www.themoviedb.org/t/p/w500/m8eFedsS7vQCZCS8WGp5n1bVD0q.jpg"
    }
    ,
    {
      "id": 3,
      "name": "O Cortiço",
      "genre": "Romance",
      "description": "O Cortiço é um romance naturalista do brasileiro Aluísio Azevedo publicado em 1890 que denuncia a exploração e as péssimas condições de vida dos moradores das estalagens ou dos cortiços cariocas do final do século XIX",
      "image": "https://www.themoviedb.org/t/p/w500/m8eFedsS7vQCZCS8WGp5n1bVD0q.jpg"
    }
    ,
    {
      "id": 3,
      "name": "O Cortiço",
      "genre": "Romance",
      "description": "O Cortiço é um romance naturalista do brasileiro Aluísio Azevedo publicado em 1890 que denuncia a exploração e as péssimas condições de vida dos moradores das estalagens ou dos cortiços cariocas do final do século XIX",
      "image": "https://www.themoviedb.org/t/p/w500/m8eFedsS7vQCZCS8WGp5n1bVD0q.jpg"
    }

  ]
  return (
    <div >
     
      <Navbar bg="dark" variant="dark" expand="lg">
        <img src={logo} className="imgLogo" />
        <Container fluid>
          <Router >
            <Navbar.Brand >Reviews of  books</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link href="#action1" as={NavLink} to="/">Home</Nav.Link>
                <Nav.Link href="#action2" >Login</Nav.Link>
                <Nav.Link href="#"> Todos os Livros </Nav.Link>
                <NavDropdown title="Mais" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Por Gênero</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Em Alta</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Editar seus Dados
                  </NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/admin">
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
          </Router>
        </Container>
      </Navbar>
      <body className="todo">
        <Row xs={1} md={1} className="g-4" key={"index1"}>
          <CardGroup>{books.map((book, variant, idx) =>
            <Col key={"index"}>
              <Card className='cards' key={"cards"}>
                <Card.Img variant="top" style={{ width: 105, height: 160, marginTop: 5, borderRadius: 2 }} src={book.image} />
                <Card.Body>
                  <Card.Title>{book.name}</Card.Title>
                  <Card.Text>
                    {book.genre}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          )}</CardGroup>
        </Row>
        <Navbar bg="dark" expand="lg" className='bottom' >
          <FaFacebook color='white' style={{ width: 50 }} />
          <BsInstagram color='white' style={{ width: 50 }} />
          <BsTwitter color='white' style={{ width: 50 }} />
          <BsGoogle color='white' style={{ width: 50 }} />
          <BsTwitch color='white' style={{ width: 50 }} />
        </Navbar>
      </body>
    </div>
  );
}

export default Home;
