import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';

import M_18 from '../assets/images/M_18.png';
import M_19 from '../assets/images/M_19.png';
import M_20 from '../assets/images/M_20.png';

class Etape3 extends Component {
    render() {
        const breakPoints = [
            {width: 1, itemsToShow: 1},
            {width: 500, itemsToShow: 3},
            {width: 768, itemsToShow: 3},
        ]
        return (
            <div className="Etape Etape-3">
                <div className="Etape-title">
                    <h2>étape 3 : tonifiez</h2>
                    <p className="p-Des">Dernière étape du démaquillage, les lotions toniques sans alcool
                    enrichies en extraits de plantes,
                    <br /> éliminent les résidus de démaquillant tout en apaisant et en réconfortant
                    la peau.
                    </p>
                    <div className="Etape-title-box">
                    <div className="Etape-title-box-title">
                        <span>LE </span><span className="span-plus">+</span>
                    </div>
                    <p className="p-LeCom">Le [MICROBIOTE COMPLEX] optimise l’équilibre du microbiote cutané
                        <br /> et renforce les défenses naturelles, pour une peau en pleine santé.
                    </p>
                    </div>
                    <p className="p-footer">Découvrez nos 3 nouvelles formules fraîches
                    <br /> pour parfaire le démaquillage et rééquilibrer chaque
                    <br /> type de peau
                    </p>
                </div>
                <div className="Etape-products row owl-carousel owl-theme">
                    <Carousel breakPoints={breakPoints}>
                    <div className="item">
                    <img src={M_18} alt="" />
                    <h3 className="h3-red">Lotion Tonique <br />
                        Purifiante</h3>
                    <h3 className="h3-black">Peaux mixtes à grasses
                    </h3>
                    <div className="button">
                        <a href="https://www.kalista-parfums.com/fr/clarins-nettoyants-et-lotions/clarins-lotion-purifiante-30419.html" target="_blank">
                        <div className="button-content">
                            JE DÉMAQUILLE
                        </div>
                        </a>
                    </div>
                    </div>
                    <div className="item">
                    <img src={M_19} alt="" />
                    <h3 className="h3-red">Lotion Tonique <br />
                        Hydratante</h3>
                    <h3 className="h3-black">Peaux normales à sèches
                    </h3>
                    <div className="button">
                        <a href="https://www.marionnaud.fr/soin-visage/nettoyant-et-demaquillant/visage/lotion-tonique-lotion-tonique-hydratante-aux-extraits-d-aloe-vera-fleur-de-safran-clarins/p/101981143" target="_blank">
                        <div className="button-content">
                            JE DÉMAQUILLE
                        </div>
                        </a>
                    </div>
                    </div>
                    <div className="item">
                    <img src={M_20} alt="" />
                    <h3 className="h3-red">Lotion Tonique <br />
                        Apaisante</h3>
                    <h3 className="h3-black">Peaux très sèches ou sensibles
                    </h3>
                    <div className="button">
                        <a href="https://www.kalista-parfums.com/fr/clarins-nettoyants-et-lotions/clarins-lotion-apaisante-30042.html
                        " target="_blank">
                        <div className="button-content">
                            JE DÉMAQUILLE
                        </div>
                        </a>
                    </div>
                    </div>
                    </Carousel>
                    
                </div>
                </div>

        );
    }
}

export default Etape3;
