import './styles/Pros.css';
import {Col, Row, Container} from 'react-bootstrap';


function Pros() {
    return(
        <div className="Pros">
            <Container>
                <Row>
                    <Col><h1 className='Proses'>Мои преимущества</h1></Col>
                </Row>
                <Row>
                    <Col sm='3'>
                        <div className='Left'>
                            <h1><li><span>Сайт под ключ</span></li></h1>
                            <hr />
                            <p>Вы получите сайт, который по всем критериям отвечает сайтам созданным на коде, которые создают в студиях за 1000$ и более</p>
                        </div>
                    </Col>
                    <Col sm='6'></Col>
                    <Col sm='3'>
                    <div className='Right'>
                            <h1><li><span>seo оптимизация</span></li></h1>
                            <hr />
                            <p>Ваш сайт будет проиндексирован и оптимизирован под поисковые выдачи, чтобы он был в топе с легальным хостингом и сертификатом безопасности.</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col sm='4'>
                        <div className='Left'>
                            <h1><li><span>Низкая стоимость</span></li></h1>
                            <hr />
                            <p>Вам не нужно будет переплачивать в 3-5 раз благодаря огромным возможностям конструкторов Wordpress и Тильда и этот сайт будет полностью принадлежать вам</p>
                        </div>
                    </Col>
                    <Col sm='5'></Col>
                    <Col sm='3'>
                        <div className='Right'>
                            <h1><li><span>бонус</span></li></h1>
                            <hr />
                            <p>Я настрою вам базовую рекламу в Яндекс Директ и Google ADS и таргетированную рекламу в Facebook и это не входит в стоимость разработки сайта, а мой бонус в подарок</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col sm='4'></Col>
                    <Col sm='4'>
                        <div className='Center'>
                            <h1><li><span>Никаких рисков</span></li></h1>
                            <hr />
                            <p>Вы ничем не рискуете, я разработаю протип и стратегию работы вашего сайта с полноценным анализом вашей ЦА их болей, чтобы вы сами видели, за что вы будете платить</p>
                        </div>
                    </Col>
                    <Col sm='4'></Col>
                </Row>
            </Container>
        </div>
    )
}

export default Pros;