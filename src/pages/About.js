import React, {Component} from 'react';

import "./styles/About.css";
import photo from './assets/about.png';

export default class About extends Component {
    constructor(props){
        super(props);

        this.colorStyle = {color: '#E2B228',}
    }

    render(){
        return(
            <div className="About">
                <h1>Обо мне</h1>
                <table>
                    <tr>
                        <td className='tableP'>
                            <p>Здравствуйте, меня зовут <span style={this.colorStyle}>Дмитрий Французов</span>, я веб-дизайнер, я разрабатываю дизайн сайтов, а также разрабатываю <span style={this.colorStyle}>сайты под ключ</span> с помощью таких конструкторов как <span style={this.colorStyle}>Wordpress</span> и <span style={this.colorStyle}>Tilda</span>. </p>
                            <p>Вы получите сайт, с <span style={this.colorStyle}>уникальным дизайном</span>, я не работаю по шаблонным вариантам, который будет отвечать всем требованиям сайтов на коде. <span style={this.colorStyle}>Моя задача</span> вначале показать свою полезность, я презентую вам <span style={this.colorStyle}>протип, стратегию</span> работы вашего сайта, основанную на глубоком анализе вашей ЦА их главных болей, чтобы вы сами видели, что покупаете не кота в мешке. </p>
                            <p><span style={this.colorStyle}>После завершения</span> заказа я в дальнейшем  буду поддерживать ваш сайт, отвечать на все вопросы и устранять все возникшие проблемы, если они бдут. </p>
                            <p><span style={this.colorStyle}>Моя миссия</span> заключается в том, чтобы разработать вам <span style={this.colorStyle}>инструмент</span> для решения поставленных целей, а не просто висящую картинку в интернете.</p>
                        </td>
                        <td className='tableIMG'>
                            <img src={photo} />
                        </td>
                    </tr>
                </table>
            </div>
        )
    
    }
}