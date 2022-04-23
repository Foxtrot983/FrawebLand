import './styles/Services.css'

import React, {Component} from 'react';
import { Button, Col, Container, Row, Image} from 'react-bootstrap';

import SerIMG1 from './assets/ServicesIMG1.png';
import SerIMG2 from './assets/ServicesIMG2.png';
import SerIMG3 from './assets/ServicesIMG3.png';
import SerIMG4 from './assets/ServicesIMG4.png';



export default class Services extends Component{
    constructor(props){
        super(props);

        this.style ={
            color: '#E2B228',
        }
    }
    
    render(){
    return(
        <div className='Services'>
        <Container>
        <Row>
        <Col sm='1'></Col>
        <Col sm='10'>
                <Row>
                    <Col id='ServicesText'><h1>Услуги</h1></Col>
                </Row>
                <Row>
                    <Col id='ServicesText'>
                        <p>В cтоимость входит разработка <span style={this.style}>десктопной, планшетной, мобильной</span> версии, <span style={this.style}>логотипа</span> а также обеспечение <span style={this.style}>100% защиты</span>  вашего сайта от вирусов, взлома, спама и кражи личных данных</p>
                    </Col>
                </Row>
                <Row id='tableIMG'>
                    <Col><Image src={SerIMG1}/></Col>
                    <Col><Image src={SerIMG2}/></Col>
                    <Col><Image src={SerIMG3}/></Col>
                    <Col><Image src={SerIMG4}/></Col>
                </Row>
                <Row id='TableUpper'>
                    <Col>landing page<hr /></Col>
                    <Col>Сайт-визитка<hr /></Col>
                    <Col>Корпоративный сайт<hr /></Col>
                    <Col>интернет-магазин<hr /></Col>
                </Row>
                <Row id='Money'>
                    <Col>~400€</Col>
                    <Col>~425€</Col>
                    <Col>~625€</Col>
                    <Col>~750€</Col>
                </Row>
                <Row id='Text'>
                    <Col>Веб-страница, основной задачей которой является сбор контактных данных целевой аудитории. Используется для усиления эффективности рекламы, увеличения аудитории. Целевая страница обычно содержит информацию о товаре или услуге.</Col>
                    <Col>Небольшой сайт, как правило, состоящий из одной (или нескольких) веб-страниц и содержащий основную информацию об организации, частном лице, компании, товарах или услугах, прейскуранты, контактные данные</Col>
                    <Col>Многофункциональный ресурс, назначением которого является предоставление сведений о компании, ее товарах или услугах. Информирует клиента о направлении бизнеса и преимуществах обращения именно в эту фирму, выделяет сильные стороны предлагаемой продукции.</Col>
                    <Col>Сайт со сложным функционалом, предназначенный для продажи товаров или услуг. Содержит иллюстрированный каталог с описанием продуктов, опцию выбора способа оплаты и корзину с товарами.</Col>
                </Row>
                <Row>
                    <Col><Button variant='warning' size='lg'>Оставить заявку</Button></Col>
                    <Col><Button variant='warning' size='lg'>Оставить заявку</Button></Col>
                    <Col><Button variant='warning' size='lg'>Оставить заявку</Button></Col>
                    <Col><Button variant='warning' size='lg'>Оставить заявку</Button></Col>
                </Row>
            </Col>
            <Col sm='1'></Col>
        </Row>
        </Container>
        </div>
    )}
}