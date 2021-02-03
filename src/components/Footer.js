import React, { Component } from 'react';
import M_21 from '../assets/images/M_21.png';
import M_22 from '../assets/images/M_22.png';


class Footer extends Component {
    render() {
        return (
            <div className="Footer-box">
                <div className="Footer">
                    <div className="text">
                    <div className="text-icons">
                        <img src={M_21} alt="" className="icon-1" />
                        <img src={M_22} alt="" className="icon-2" />
                    </div>
                    <h2 className="text-title">
                        Tout comprendre <br /> sur le microbiote
                    </h2>
                    <p className="text-p">Chaque individu possède son propre microbiote
                        cutané, un écosystème qui vit à la surface
                        et dans les couches superficielles de l’épiderme.
                        <br /> En tout, il existe 1000 milliards de bactéries,
                        dont l’équilibre agit sur l’apparence de la peau.
                    </p>
                    <div className="text-box">
                        <div className="text-box-pad">
                        <span>Les produits cosmétiques non adaptés,
                            un démaquillage agressif et la pollution
                            peuvent le déséquilibrer. La peau devient
                            plus inconfortable, perd en éclat et présente
                            des rougeurs et imperfections.</span>
                        <br /><br /><br />
                        <span className="span-bold">Si le microbiote cutané est équilibré,
                            <br /> la peau l’est aussi : elle est belle et saine.</span>
                        </div>
                    </div>
                    </div>
                    <div className="video">
                    <iframe width={560} height={315} src="https://www.youtube.com/embed/6kH8QR9rcB8" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                    </div>
                </div>
                </div>

        );
    }
}

export default Footer;
