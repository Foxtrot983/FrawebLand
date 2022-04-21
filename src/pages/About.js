import "./styles/About.css"
import photo from './assets/about.png'

export default function About() {
    let colorStyle = {
        color: '#E2B228',
    }
    return(
        <div className="About">
            <h1>Обо мне</h1>
            <table>
                <tr>
                    <td className='tableP'>
                        <p>Здравствуйте, меня зовут <span style={colorStyle}>Дмитрий Французов</span>, я веб-дизайнер, я разрабатываю дизайн сайтов, а также разрабатываю <span style={colorStyle}>сайты под ключ</span> с помощью таких конструкторов как <span style={colorStyle}>Wordpress</span> и <span style={colorStyle}>Tilda</span>. </p>
                        <p>Вы получите сайт, с <span style={colorStyle}>уникальным дизайном</span>, я не работаю по шаблонным вариантам, который будет отвечать всем требованиям сайтов на коде. <span style={colorStyle}>Моя задача</span> вначале показать свою полезность, я презентую вам <span style={colorStyle}>протип, стратегию</span> работы вашего сайта, основанную на глубоком анализе вашей ЦА их главных болей, чтобы вы сами видели, что покупаете не кота в мешке. </p>
                        <p><span style={colorStyle}>После завершения</span> заказа я в дальнейшем  буду поддерживать ваш сайт, отвечать на все вопросы и устранять все возникшие проблемы, если они бдут. </p>
                        <p><span style={colorStyle}>Моя миссия</span> заключается в том, чтобы разработать вам <span style={colorStyle}>инструмент</span> для решения поставленных целей, а не просто висящую картинку в интернете.</p>
                    </td>
                    <td className='tableIMG'>
                        <img src={photo} />
                    </td>
                </tr>
            </table>
        </div>
    )
}