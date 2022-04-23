import React, {Component} from 'react';
import { Container, Image, Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'

import logo from './assets/logo.svg';
import inst from './assets/instagram.svg';
import face from './assets/facebook.svg';
import wats from './assets/whatsup.svg';


import './styles/Navbar.css'

class Navigbar extends Component {
    render() {
        return (
        <Navbar sticky='bottom' id='Navigation' bg="black" variant="dark" sm='12'>
          <Container>
          <Navbar.Brand href="#Main"><Image src={logo} alt='logo' className='NavbarLogo' width={64} height={64}/></Navbar.Brand>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#Services">Услуги</Nav.Link>
              <Nav.Link href="#Portfolio">Портфолио</Nav.Link>
              <Nav.Link href="#About">Обо мне</Nav.Link>
              <Nav.Link href="#Pros">Преимущества</Nav.Link>
              <Nav.Link href="#Steps">Этапы работы</Nav.Link>
              <Nav.Link href="#Contacts">Контакты</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#"><Image src={face}/></Nav.Link>
              <Nav.Link href="#"><Image src={wats}/></Nav.Link>
              <Nav.Link href="#"><Image src={inst}/></Nav.Link>
            </Nav>
          </Navbar.Collapse>
          </Container>
  </Navbar>
  

  
  );}
}

export default Navigbar;
