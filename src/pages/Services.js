import './styles/Services.css'
import { Button } from 'react-bootstrap';
import SerIMG1 from './assets/ServicesIMG1.png';
import SerIMG2 from './assets/ServicesIMG2.png';
import SerIMG3 from './assets/ServicesIMG3.png';
import SerIMG4 from './assets/ServicesIMG4.png';



export default function Services(){
    let style = {
        color: '#E2B228',
    }
    return(
        <div className='Services'>
            <div className='ServicesText'>
                <h1>Услуги</h1>
                <p>В cтоимость входит разработка <span style={style}>десктопной, планшетной, мобильной</span> версии, <span style={style}>логотипа</span> а также обеспечение <span style={style}>100% защиты</span>  вашего сайта от вирусов, взлома, спама и кражи личных данных</p>
            </div>
            <div>
                <table className='priceList'>
                    <tr className='tableIMG'>
                        <td><img src={SerIMG1}/></td>
                        <td><img src={SerIMG2}/></td>
                        <td><img src={SerIMG3}/></td>
                        <td><img src={SerIMG4}/></td>
                    </tr>
                    <tr className='TableUpper'>
                        <td>landing page</td>
                        <td>Сайт-визитка</td>
                        <td>Корпоративный сайт</td>
                        <td>интернет-магазин</td>
                    </tr>
                    <tr>
                        <td>~400€</td>
                        <td>~425€</td>
                        <td>~625€</td>
                        <td>~750€</td>
                    </tr>
                    <tr className="Text">
                        <td>Веб-страница, основной задачей которой является сбор контактных данных целевой аудитории. Используется для усиления эффективности рекламы, увеличения аудитории. Целевая страница обычно содержит информацию о товаре или услуге.</td>
                        <td>Небольшой сайт, как правило, состоящий из одной (или нескольких) веб-страниц и содержащий основную информацию об организации, частном лице, компании, товарах или услугах, прейскуранты, контактные данные</td>
                        <td>Многофункциональный ресурс, назначением которого является предоставление сведений о компании, ее товарах или услугах. Информирует клиента о направлении бизнеса и преимуществах обращения именно в эту фирму, выделяет сильные стороны предлагаемой продукции.</td>
                        <td>Сайт со сложным функционалом, предназначенный для продажи товаров или услуг. Содержит иллюстрированный каталог с описанием продуктов, опцию выбора способа оплаты и корзину с товарами.</td>
                    </tr>
                    <tr>
                        <td><Button variant='warning' size='lg'>Оставить заявку</Button></td>
                        <td><Button variant='warning' size='lg'>Оставить заявку</Button></td>
                        <td><Button variant='warning' size='lg'>Оставить заявку</Button></td>
                        <td><Button variant='warning' size='lg'>Оставить заявку</Button></td>
                    </tr>
                </table>
            </div>
        </div>
    )
}