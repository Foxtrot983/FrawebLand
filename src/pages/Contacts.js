import {Col, Row, Container, Form, Button, ButtonGroup, Image} from 'react-bootstrap';
import React, {Component} from 'react';


import './styles/Contacts.css';

import img1 from './assets/ContIMG1.png';
import img2 from './assets/ContIMG2.png';

import IMGInst from './assets/IMGInst.png';
import IMGWats from './assets/IMGWats.png';
import IMGTele from './assets/IMGTele.png';
import IMGFace from './assets/IMGFace.png';

export default class Contacts extends Component{
    constructor(props){
        super(props);
    }

    
    render() {return(
        <div id='Contacts'>
            <Container>
                <Row>
                    <Col sm='4'></Col>
                    <Col id='Head' sm='4'>
                    <h1>Контакты</h1>
                    </Col>
                    <Col sm='4'></Col>
                </Row>

                <Row>
                    <Col sm='4'></Col>
                    <Col id='Text' sm='4'>
                        <p>Оставьте заявку и получите готовую стратегию работы вашего сайта и прототип бесплатно</p>
                    </Col>
                    <Col sm='4'></Col>

                </Row>
                <Row id='Widgets'>
                    <Col sm='4'></Col>
                    <Col sm='1'><Image src={IMGFace} /></Col>
                    <Col sm='1'><Image src={IMGWats} /></Col>
                    <Col sm='1'><Image src={IMGInst} /></Col>
                    <Col sm='1'><Image src={IMGTele} /></Col>
                    <Col sm='4'></Col>
                </Row>
                <Row id='Forms'>
                    <Col sm='2'></Col>
                    <Col sm='4'>
                        <Row>
                            <Form id='LForms'>
                                <Form.Group>
                                    <Form.Control size='lg' placeholder='Ваше имя'></Form.Control>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Control size='lg' placeholder='Ваш e-mail'></Form.Control>
                                </Form.Group>
                            </Form>
                        </Row>
                        <Row>
                            <ButtonGroup gap={2} id='LGroup'>
                                <Button variant='dark' size='lg'><Image src={img1} />Attach Tech</Button>
                                <Button variant='dark' size='sm'><Image src={img2} />Скачать пример <br />технического задания</Button>
                            </ButtonGroup>
                        </Row>
                    </Col>
                    <Col sm='4'>
                        <Form>
                            <Form.Control size='lg' as='textarea' rows={5} placeholder='Описание'></Form.Control>
                        </Form>
                    </Col>
                    <Col sm='2'></Col>
                </Row>
                <br/>
                <Row rows={4}>
                    <Col sm='4'></Col>
                    <Col id='SButton'>
                        <p>Нажимая на кнопку “отправить” вы соглашаетесь с условиями Политики конфиденциальности</p>
                        <Button size='lg' variant='warning'>Отправить</Button>
                    </Col>
                    <Col sm='4'></Col>
                </Row>
            </Container>
        </div>
    )
    }
}

