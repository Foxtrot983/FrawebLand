import './styles/Main.css';
import {Col, Row, Container, Button, Image} from 'react-bootstrap'
import React, {Component} from 'react';
import arrow from './assets/arrow.png'

export default class Main extends Component{
    constructor(props){
        super(props);
    }

    render(){return(
        <div id='Main'>
        <Container>
            <Row>
                <Col sm='7' id='textBox'><h1>Разработка сайтов <br/> под ключ</h1></Col>
                <Col sm='5'></Col>
            </Row>
            <Row>
                <Col sm='5'><p>Создание сайтов любой сложности по приемлемым ценам, с SEO-оптимизацией и базовой настройкой Яндекс Директ Google ADS, Facebook Ads</p></Col>
                <Col sm='7'></Col>
            </Row>
            <Row>
                <Col sm='6'>
                    <Button id='send' variant='yellow'>Отправить заявку</Button>
                </Col>
            </Row>
            <Row id='btnArrow'>
                <Col sm='12'>
                    <button className='arrowBTN'><Image src={arrow} alt='arrow' onClick={ e => {
                        let cont = document.getElementById('Services');
                        e.preventDefault();
                        cont && cont.scrollIntoView(cont);
                    }} /> </button>
                </Col>


            </Row>
        </Container>
        </div>
    )}
}