import React, {Component} from 'react';
import { Container, Image, Nav } from 'react-bootstrap';

import Navbar from 'react-bootstrap/Navbar'
import logo from './assets/logo.svg';
import inst from './assets/instagram.svg';
import face from './assets/facebook.svg';
import wats from './assets/whatsup.svg';


import './styles/Navbar.css'

class Navigbar extends Component {
    constructor(props){
      super(props);
    }
 

    render() {
        return (
        <Navbar fixed='top' id='Navigation' bg="black" variant="dark" sm='12'>
          <Container>
          <Navbar.Brand href="#Main" onClick = {e => {
                              let cont = document.getElementById("Main");
                              e.preventDefault();  // Stop Page Reloading
                              cont && cont.scrollIntoView();}}><Image src={logo} alt='logo' className='NavbarLogo' width={64} height={64}/></Navbar.Brand>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#Services" onClick = {e => {
                              let cont = document.getElementById("Services");
                              e.preventDefault();  // Stop Page Reloading
                              cont && cont.scrollIntoView();}}>Услуги</Nav.Link>
              <Nav.Link href="#Portfolio" onClick = {e => {
                              let cont = document.getElementById("Portfolio");
                              e.preventDefault();  // Stop Page Reloading
                              cont && cont.scrollIntoView();}}>Портфолио</Nav.Link>
              <Nav.Link href="#About" onClick = {e => {
                              let cont = document.getElementById("About");
                              e.preventDefault();  // Stop Page Reloading
                              cont && cont.scrollIntoView();}}>Обо мне</Nav.Link>
              <Nav.Link href="#Pros" onClick = {e => {
                              let cont = document.getElementById("Pros");
                              e.preventDefault();  // Stop Page Reloading
                              cont && cont.scrollIntoView();}}>Преимущества</Nav.Link>
              <Nav.Link href="#Steps" onClick = {e => {
                              let cont = document.getElementById("Steps");
                              e.preventDefault();  // Stop Page Reloading
                              cont && cont.scrollIntoView();}}>Этапы работы</Nav.Link>
              <Nav.Link href="#Contacts" onClick = {e => {
                              let cont = document.getElementById("Contacts");
                              e.preventDefault();  // Stop Page Reloading
                              cont && cont.scrollIntoView();}}>Контакты</Nav.Link>
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
