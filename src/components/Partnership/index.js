import React, {useEffect} from 'react';

import AboutApp from '../AboutApp/index';
import AboutUs from '../AboutUs/index';
import Form from '../Form';

import partnershipImg from '../../assets/partner-image.svg';
import arrowDown from '../../icons/arrow-down.svg';
import framePartner from '../../assets/frame-partner.svg';

import lojista from '../../assets/lojista.svg';
import instituicao from '../../assets/instituicao.svg';
import parceiros from '../../assets/parceiros.svg';


import '../../styles/components/Partnership/styles.css';

function Partnership() {
    
    useEffect(() => {
        document.getElementById('about-app').style.marginTop = "0rem";
    });

    return (
        <>
        <section className="partnership-content">
            <img src={partnershipImg} alt="Parceria" />

            <div className="incentive">
                <h1>Incentive a educação de milhares de jovens.</h1>
                <p>
                    Devolvendo parte do valor para o pagamento de sua mensalidade escolar.
                </p>
            </div>
        </section>

        <a className="btn-see-more" href="#about-us">
            <span>Veja mais</span>
            <img src={arrowDown} alt="Veja mais" />
        </a>

        <AboutUs />

        <section id="for-partner" className="for-partner">
            <h1>Milhares de parceiros utilizam Cash Edu em suas vendas</h1>
            <div className="container-images">
                <img src={framePartner} alt="Imagem do Parceiro" />
                <img src={framePartner} alt="Imagem do Parceiro" />
                <img src={framePartner} alt="Imagem do Parceiro" />
                <img src={framePartner} alt="Imagem do Parceiro" />   
            </div>

            <div className="container-two-images">
                <img src={framePartner} alt="Imagem do Parceiro" />
                <img src={framePartner} alt="Imagem do Parceiro" />
                <img src={framePartner} alt="Imagem do Parceiro" />
                <img src={framePartner} alt="Imagem do Parceiro" />
            </div>

            <a href="#parthner-contact" className="btn-partner">
                <span>Seja um parceiro</span>
            </a>
        </section>

        <section id="type-business" className="type-business">
            <h1>Qual o seu tipo de negócio?</h1>
            <p>
                Não importa qual o tipo do seu negócio, 
                o Cash Edu poderá ajudar no seu crescimento 
                com a melhor solução de CashBack educacional
            </p>

            <div className="cards-business">
                <div className="store">
                    <img src={lojista} alt="Lojista" />
                    <p>Lojista</p>
                </div>

                <div className="institution">
                    <img src={instituicao} alt="Instituição de Ensino" />
                    <p>Instituição de Ensino</p>
                </div>

                <div className="others">
                    <img src={parceiros} alt="Outras Parcerias" />
                    <p>Outras Parcerias</p>
                </div>
            </div>

            <a href='#parthner-contact' className="btn-register">
                Faça seu cadastro
            </a>
        </section>

        <AboutApp />

        <section id="parthner-contact" className="parthner-contact">
            <h1>Seja um Parceiro</h1>
            <p>
                Preencha as informações abaixo e comece a oferecer o cashback em sua loja ou sua instituição de ensino e fomente a educação.
            </p>

            <Form />
        </section>
        </>
    );
}

export default Partnership;