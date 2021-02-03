import React, { Component } from 'react';
import M_01 from '../assets/images/M_01.png';
import M_02 from '../assets/images/M_02.png';
import M_03 from '../assets/images/M_03.png';

class Header extends Component {
    render() {
        return (
            <div className="Header">
                <img className="Header-img-1" src={M_01} alt="Header-img-1" />
                <img className="Header-img-2" src={M_02} alt="Header-img-2" />
                <img className="Header-img-3" src={M_03} alt="Header-img-3" />
                <div className="Header-text">
                    <p className="Header-text-1">Nouveau</p>
                    <p className="Header-text-2">Les experts démaquillants aux Herbes des Alpes</p>
                    <p className="Header-text-3">La pureté des montagnes pour votre peau</p>
                </div>
            </div>
        );
    }
}

export default Header;
