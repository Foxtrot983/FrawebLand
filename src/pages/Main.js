import './styles/Main.css';
import {Col, Row, Container} from 'react-bootstrap'
import React, {Component} from 'react';

export default class Main extends Component{
    constructor(props){
        super(props);
    }

    render(){return(
        <div id='Main'>
        <Container>
            <Row>
                <Col sm='7'><h1>Разработка сайтов под ключ</h1></Col>
                <Col sm='5'></Col>
            </Row>
            <Row>
                <Col sm='6'><p>Создание сайтов любой сложности по приемлемым ценам, с SEO-оптимизацией и базовой настройкой Яндекс Директ Google ADS, Facebook Ads</p></Col>
                <Col sm='6'></Col>
            </Row>
        </Container>
        </div>
    )}
}