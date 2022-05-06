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
            <Nav className="me-auto" id='links'>
              <Nav.Link href="#Services" id='link' onClick = {e => {
                              let cont = document.getElementById("Services");
                              e.preventDefault();  // Stop Page Reloading
                              cont && cont.scrollIntoView();}}>услуги</Nav.Link>
              <Nav.Link href="#Portfolio" id='link' onClick = {e => {
                              let cont = document.getElementById("Portfolio");
                              e.preventDefault();  // Stop Page Reloading
                              cont && cont.scrollIntoView();}}>портфолио</Nav.Link>
              <Nav.Link href="#About" id='link' onClick = {e => {
                              let cont = document.getElementById("About");
                              e.preventDefault();  // Stop Page Reloading
                              cont && cont.scrollIntoView();}}>обо мне</Nav.Link>
              <Nav.Link href="#Pros" id='link' onClick = {e => {
                              let cont = document.getElementById("Pros");
                              e.preventDefault();  // Stop Page Reloading
                              cont && cont.scrollIntoView();}}>преимущества</Nav.Link>
              <Nav.Link href="#Steps" id='link' onClick = {e => {
                              let cont = document.getElementById("Steps");
                              e.preventDefault();  // Stop Page Reloading
                              cont && cont.scrollIntoView();}}>этапы работы</Nav.Link>
              <Nav.Link href="#Contacts" id='link' onClick = {e => {
                              let cont = document.getElementById("Contacts");
                              e.preventDefault();  // Stop Page Reloading
                              cont && cont.scrollIntoView();}}>контакты</Nav.Link>
            </Nav>
            <Nav id='socials'>
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
