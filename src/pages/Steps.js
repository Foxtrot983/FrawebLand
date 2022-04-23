import { Container, Col, Row } from 'react-bootstrap'
import './styles/Steps.css'

import React, {Component} from 'react';
export default class Steps extends Component {
    constructor(props){
        super(props);
    }

    
    render() {
        return(
            <div id='Steps'>
            <Container>
                <Row>
                    <Col><h1 id='text'>Этапы работы</h1></Col>
                </Row>
                <Row>
                    <Col sm='1'></Col>
                    <Col><h1>01</h1><hr /><p>Оставляете заявку либо связываетесь со мной, мы обсуждаем ваш проект</p></Col>
                    <Col>
                        <h1>02</h1>
                        <hr />
                        <p id="Text">Я составляю протитотип, делаю анализ вашей ЦА, определяю их основные боли и презентую ваш начальный проект со стратегией работы вашего сайта</p>
                    </Col>
                    <Col>
                        <h1>03</h1>
                        <hr />
                        <p id="Text">Если вас удовлетворяет начальный результат мы договариваемся об оплате и вы вносите 50% от стоимости проекта</p>
                    </Col>
                </Row>
                <Row>
                <Col sm='1'></Col>
                    <Col>                
                        <h1>04</h1>
                        <hr />
                        <p id="Text">Я разрабатываю полностью ваш сайт, мы его тестируем, провожу SEO оптимизацию и, при необходимости, настраиваю Яндекс Директ, Google ADS, Facebook Ads</p>
    </Col>
                    <Col>                
                        <h1>05</h1>
                        <hr />
                        <p id="Text">При удовлетворени результата вы оплачиваете полностью весь проект и получаете доступ к вашему сайту и становитесь его владельцем</p>
    </Col>
                    <Col>
                        <h1>06</h1>
                        <hr />
                        <p id="Text">После завершения заказа, я поддерживаю ваш сайт в течении 6 месяцев и устраняю появившиеся ошибки, если они будут</p>

                    </Col>
                </Row>
                <br />
            </Container>
            </div>

    )}
}       
