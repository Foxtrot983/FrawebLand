import React, {Component} from 'react';

import "./styles/Calling.css";
import {Button} from 'react-bootstrap';


export default class Calling extends Component {
    render() { 
        return(
        <div className='Calling'>
            <div className="CallingText">
                <h1>Готовы прямо сейчас оставить заявку на разработку сайта?</h1>
                <p>Свяжитесь со мной, я отвечу на любые интересущиеся вас вопросы и расскажу свою стратегию работы, каким я вижу ваш сайт, как он будет работать и выполнять поставленные задачи!</p>
                <Button variant='outline-dark' size='lg'>СВЯЗАТЬСЯ СО МНОЙ</Button>
            </div>
        </div>
    )
    }
}