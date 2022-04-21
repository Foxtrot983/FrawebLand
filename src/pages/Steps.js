import './styles/Steps.css'

export default function Steps() {
    return(
        <div className='Steps'>
            <h1 className='text'>Этапы работы</h1>
            <div className='wrapper'>
            <div className='cell1'>
                <h1>01</h1>
                <hr />
                <p>Оставляете заявку либо связываетесь со мной, мы обсуждаем ваш проект</p>
            </div>
            <div className='cell2'>
                <h1>02</h1>
                <hr />
                <p className="Text">Я составляю протитотип, делаю анализ вашей ЦА, определяю их основные боли и презентую ваш начальный проект со стратегией работы вашего сайта</p>
            </div>
            <div className='cell3'>
                <h1>03</h1>
                <hr />
                <p className="Text">Если вас удовлетворяет начальный результат мы договариваемся об оплате и вы вносите 50% от стоимости проекта</p>
            </div>
            <div className='cell4'>
                <h1>04</h1>
                <hr />
                <p className="Text">Я разрабатываю полностью ваш сайт, мы его тестируем, провожу SEO оптимизацию и, при необходимости, настраиваю Яндекс Директ, Google ADS, Facebook Ads</p>
            </div>
            <div className='cell5'>
                <h1>05</h1>
                <hr />
                <p className="Text">При удовлетворени результата вы оплачиваете полностью весь проект и получаете доступ к вашему сайту и становитесь его владельцем</p>
            </div>
            <div className='cell6'>
                <h1>06</h1>
                <hr />
                <p className="Text">После завершения заказа, я поддерживаю ваш сайт в течении 6 месяцев и устраняю появившиеся ошибки, если они будут</p>
            </div>
            </div>

        </div>
    )
}       
