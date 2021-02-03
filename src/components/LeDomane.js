import React, { Component } from 'react';
import M_15 from '../assets/images/M_15.png';
import M_24 from '../assets/images/M_24.png';

class LeDomane extends Component {
    render() {
        return (
            <div className="LeDomane">
                <div className="LeDomane-wrap">
                    <img src={M_24} alt="" />
                </div>
                <div className="LeDomane-empty" />
                <div className="LeDomane-contain">
                    <div className="logo"><img src={M_15} alt="" /></div>
                    <div className="heading">
                    <h2>Le Domaine Clarins : <br /> un laboratoire à ciel ouvert</h2>
                    </div>
                    <div className="main">
                    <div className="video">
                        <iframe width={560} height={315} src="https://www.youtube.com/embed/6kH8QR9rcB8" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                    </div>
                    <div className="des">
                        <p>
                        Un site unique et préservé, niché à 1 400
                        <br /> mètres d’altitude au cœur des Alpes
                        <br /> où les plantes poussent au rythme
                        <br /> des saisons.
                        <br /><br />
                        Un véritable écrin de pureté sans
                        <br /> pollution de l’air et des sols sur lequel
                        <br /> Clarins, élabore ses propres extraits
                        <br /> de plantes gorgés d’actifs, dont la
                        <br /> gentiane jaune bio et mélisse bio :
                        <br /> des ingrédients purs et naturellement
                        <br /> efficaces.
                        </p>
                    </div>
                    </div>
                </div>
                </div>

        );
    }
}

export default LeDomane;
