import React, {Component} from 'react';

import {Col, Row, Image, Container} from 'react-bootstrap';

import "./styles/Portfolio.css";

import img1 from './assets/Portfolio1.png';
import img2 from './assets/Portfolio2.png';
import img3 from './assets/Portfolio3.png';
import img4 from './assets/Portfolio4.png';
import img5 from './assets/Portfolio5.png';
import img6 from './assets/Portfolio6.png';

export default class Portfolio extends Component {
    constructor(props){
        super(props);
    }
    
    render() {
        return(
            <div id="Portfolio">
            <Container>
                <Row>
                    <Col>
                        <h1>Портфолио</h1>
                    </Col>
                </Row>
                <div id='PortTable'>
                <Row>
                    <Col><Image src={img1} alt='img1' /></Col>
                    <Col><Image src={img2} alt='img2'/></Col>
                    <Col><Image src={img3} alt='img3'/></Col>
                </Row>
                <Row>
                    <Col><Image src={img4} alt='img4'/></Col>
                    <Col><Image src={img5} alt='img5'/></Col>
                    <Col><Image src={img6} alt='img6'/></Col>
                </Row>
                </div>
            </Container>
        </div>
    )}
}