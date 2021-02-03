import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';

import M_10 from '../assets/images/M_10.png';
import M_11 from '../assets/images/M_11.png';
import M_12 from '../assets/images/M_12.png';
import M_13 from '../assets/images/M_13.png';
import M_14 from '../assets/images/M_14.png';

class Etape2 extends Component {
    render() {
        const breakPoints = [
            {width: 1, itemsToShow: 1},
            {width: 500, itemsToShow: 4},
            {width: 768, itemsToShow: 4},
        ]
        return (
            <div className="Etape Etape-2">
            <div className="Etape-title">
              <h2>étape 2 : nettoyez</h2>
              <p className="p-Des">Une offre complète pour nettoyer la peau, éliminer les impuretés et
                particules de pollution.
                <br /> Grâce au [COMPLEXE DOUCEUR], la peau est apaisée et adoucie !
              </p>
              <div className="Etape-title-box">
                <div className="Etape-title-box-title">
                  <span>LE </span><span className="span-plus">+</span>
                </div>
                <p className="p-LeCom">L’extrait de Saponaire Bio, présent dans les nettoyants Clarins
                  <br /> est un agent moussant naturel, idéal pour nettoyer la peau tout en douceur !
                </p>
              </div>
              <p className="p-footer">Découvrez nos 4 nouvelles formules <br /> adaptées à tous les besoins
                et types de peaux</p>
            </div>
            <div className="Etape-plan">
              <p className="name-plan">Saponaire bio</p>
              <img src={M_10} alt="" />
            </div>
            <div className="Etape-products row owl-carousel owl-theme" id="Etape-products-2">
                <Carousel breakPoints={breakPoints}>
                <div className="item item-col-3">
                <img src={M_11} alt="" />
                <h3 className="h3-red">Doux Nettoyant <br />
                  Moussant Puriefiant</h3>
                <h3 className="h3-black">Peaux mixtes à grasses
                </h3>
                <div className="button">
                  <a href="https://www.kalista-parfums.com/fr/clarins-nettoyants-et-lotions/clarins-doux-nettoyant-purifiant-30422.html" target="_blank">
                    <div className="button-content">
                      JE DÉMAQUILLE
                    </div>
                  </a>
                </div>
              </div>
              <div className="item item-col-3">
                <img src={M_12} alt="" />
                <h3 className="h3-red">Doux Nettoyant <br />
                  Moussant Hydratant</h3>
                <h3 className="h3-black">Peaux normales à sèches
                </h3>
                <div className="button">
                  <a href="https://www.kalista-parfums.com/fr/clarins-nettoyants-et-lotions/clarins-doux-nettoyant-hydratant-30423.html" target="_blank">
                    <div className="button-content">
                      JE DÉMAQUILLE
                    </div>
                  </a>
                </div>
              </div>
              <div className="item item-col-3">
                <img src={M_13} alt="" />
                <h3 className="h3-red">Doux Nettoyant <br />
                  Moussant Apaiesant</h3>
                <h3 className="h3-black">Peaux très sèches ou
                </h3>
                <div className="button">
                  <a href="https://www.kalista-parfums.com/fr/clarins-nettoyants-et-lotions/clarins-doux-nettoyant-apaisant-30424.html" target="_blank">
                    <div className="button-content">
                      JE DÉMAQUILLE
                    </div>
                  </a>
                </div>
              </div>
              <div className="item item-col-3">
                <img src={M_14} alt="" />
                <h3 className="h3-red">Mousse Nettoyante <br />
                  Peau Neuve</h3>
                <h3 className="h3-black">Toutes peaux
                </h3>
                <div className="button">
                  <a href="https://www.kalista-parfums.com/fr/clarins-nettoyants-et-lotions/clarins-mousse-nettoyante-peau-neuve-30425.html" target="_blank">
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

export default Etape2;
