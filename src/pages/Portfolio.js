import React, {Component} from 'react';

import "./styles/Portfolio.css"

import img1 from './assets/Portfolio1.png'
import img2 from './assets/Portfolio2.png'
import img3 from './assets/Portfolio3.png'
import img4 from './assets/Portfolio4.png'
import img5 from './assets/Portfolio5.png'
import img6 from './assets/Portfolio6.png'

export default class Portfolio extends Component {
    constructor(props){
        super(props);
    }
    
    render() {
        return(
        <div id="Portfolio">
            <h1>Портфолио</h1>
            <table className="PortTable">
                <tr>
                    <td><img src={img1}/></td>
                    <td><img src={img2}/></td>
                    <td><img src={img3}/></td>
                </tr>
                <tr>
                    <td><img src={img4}/></td>
                    <td><img src={img5}/></td>
                    <td><img src={img6}/></td>
                </tr>
            </table>
        </div>
    )}
}