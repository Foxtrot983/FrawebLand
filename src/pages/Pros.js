import './styles/Pros.css';
import {Col, Row, Container} from 'react-bootstrap';


function Pros() {
    return(
        <div className="Pros">
            <Container>
                <Row>
                    <Col><h1>Мои преимущества</h1></Col>
                </Row>
                <Row></Row>
                <Row>
                    <Col md='4'></Col>
                    <Col md='4'></Col>
                    <Col md='4'></Col>
                </Row>
            </Container>
            <h1>Мои преимущества</h1>
        </div>
    )
}