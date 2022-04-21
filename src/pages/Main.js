import './styles/Main.css';
import {Col, Row, Container} from 'react-bootstrap'

export default function Main(){
    return(
        <div className='Main'>
        <Container>
            <Row>
                <Col sm='6'><h1>Разработка сайтов под ключ</h1></Col>
                <Col sm='6'></Col>
            </Row>
            <Row></Row>
            <Row>
                <Col sm='4'></Col>
                <Col sm='8'><p>Создание сайтов любой сложности по приемлемым ценам, с SEO-оптимизацией и базовой настройкой Яндекс Директ Google ADS, Facebook Ads</p></Col>
            </Row>
        </Container>
        </div>
    )
}