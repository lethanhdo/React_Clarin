import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';
import M_05 from '../assets/images/M_05.png';
import M_06 from '../assets/images/M_06.png';
import M_07 from '../assets/images/M_07.png';
import M_08 from '../assets/images/M_08.png';
import M_09 from '../assets/images/M_09.png';

class Etape1 extends Component {

   
    render() {
        const breakPoints = [
            {width: 1, itemsToShow: 1},
            {width: 500, itemsToShow: 3},
            {width: 768, itemsToShow: 3},
        ]
        return (
            <div className="Etape Etape-1">
            <div className="Etape-title">
              <h2>étape 1 : démaquillez</h2>
              <p className="p-Des">Des démaquillants qui retirent le maquillage, les impuretés et les traces de
                pollution en douceur <br /> et en respectant de la flore cutanée.</p>
              <div className="Etape-title-box">
                <div className="Etape-title-box-title">
                  <span>LE </span><span className="span-plus">+</span>
                </div>
                <p className="p-LeCom">Le [COMPLEXE DOUCEUR], qui associe deux plantes issues du Domaine Clarins :
                  <br /> la gentiane jaune bio et la mélisse bio, contribue à apaiser, calmer et adoucir la.          </p>
              </div>
              <p className="p-footer">Découvrez nos 3 nouvelles formules <br /> adaptées à tous les
                maquillages et toutes les habitudes</p>
            </div>
            <div className="Etape-flower">
              <p className="name-flower">Gentiane jaune bio</p>
              <img src={M_05} alt="" />
            </div>
            <div className="Etape-plan">
              <p className="name-plan">Mélisse bio</p>
              <img src={M_06} alt="" />
            </div>
            <div className="Etape-products row owl-carousel owl-theme">
                <Carousel breakPoints={breakPoints} loop={true}>
                    <div className="item">
                    <img src={M_07} alt="" />
                    <h3 className="h3-red">Lait Velours <br /> Démaquillant</h3>
                    <h3 className="h3-black">Il s’adresse aux adeptes
                    <br /> de confort, de textures onctueuses
                    <br /> et de maquillages légers.
                    <br /> Idéal pour un démaquillage
                    <br /> tout en douceur.
                    </h3>
                    <div className="button">
                        <a href="https://www.kalista-parfums.com/fr/clarins-nettoyants-et-lotions/clarins-lait-velours-demaquillant-30420.html" target="_blank">
                            <div className="button-content">
                            JE DÉMAQUILLE
                            </div>
                        </a>              
                    </div>
                    </div>

                    <div className="item">
                        <img src={M_08} alt="" />
                        <h3 className="h3-red">Eau Micellaire <br /> Démaquillante</h3>
                        <h3 className="h3-black">Elle convient aux peaux sensibles
                        <br /> ou aux adeptes de démaquillages
                        <br /> légers et de textures fraîches.
                        <br /> Idéale pour un
                        <br /> démaquillage rapide.
                        </h3>
                        <div className="button">
                        <a href="https://www.marionnaud.fr/soin-visage/nettoyant-et-demaquillant/visage/eau-micellaire-demaquillante-eau-micellaire-demaquillante-formulee-a-base-d-ingredients-d-origine-naturelle-clarins/p/101981127" target="_blank">
                            <div className="button-content">
                            JE DÉMAQUILLE
                            </div>
                        </a>
                        </div>
                    </div>

                    <div className="item">
                        <img src={M_09} alt="" />
                        <h3 className="h3-red">Huile <br /> Très Démaquillante</h3>
                        <h3 className="h3-black">Elle séduit les amoureuses
                        <br /> de maquillages intenses,
                        <br /> waterproofs et de
                        <br /> textures
                        <br /> enveloppantes.
                        </h3>
                        <div className="button">
                        <a href="https://www.kalista-parfums.com/fr/clarins-nettoyants-et-lotions/clarins-huile-tres-demaquillante-30421.html" target="_blank">
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

export default Etape1;
