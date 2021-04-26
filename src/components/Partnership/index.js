import React, {useEffect} from 'react';

import AboutApp from '../AboutApp/index';
import AboutUs from '../AboutUs/index';

import partnershipImg from '../../assets/partner-image.svg';
import arrowDown from '../../icons/arrow-down.svg';
import framePartner from '../../assets/frame-partner.svg';

import lojista from '../../assets/lojista.svg';
import instituicao from '../../assets/instituicao.svg';
import parceiros from '../../assets/parceiros.svg';

import InputMask from "react-input-mask";

import '../../styles/components/Partnership/styles.css';

function Partnership() {
    
    useEffect(() => {
        document.getElementById('about-app').style.marginTop = "0rem";
    });

    const submitForm = e => {
        document.getElementById('nome').setAttribute("disabled","disabled");
        document.getElementById('telephone').setAttribute("disabled","disabled");
        document.getElementById('email').setAttribute("disabled","disabled");
        document.getElementById('observacao').setAttribute("disabled","disabled");

        fetch(`https://landing-page-dot-cashedu.uc.r.appspot.com/send-email`,
        {
          method: "POST",
          headers: new Headers({
            'Content-Type': 'application/json',
            'Accept': '*/*',
            'Access-Control-Allow-Origin': '*',
          }),
          body: JSON.stringify({
            "subject": "Contato - Seja Parceiro",
            "text": "<strong>Nome: </strong>" + document.getElementById('nome').value + "<br><strong>Telefone: </strong>" + document.getElementById('telephone').value + 
            "<br><strong>Email: </strong>" + document.getElementById('email').value + "<br><strong>OBS: </strong>" + document.getElementById('observacao').value
          })
        }
        ).then(resp => {
            if (resp.ok) {
                alert("Enviado com sucesso!")
                document.location.reload(true);
            } else {
                document.getElementById('nome').removeAttribute("disabled");
                document.getElementById('telephone').removeAttribute("disabled");
                document.getElementById('email').removeAttribute("disabled");
                document.getElementById('observacao').removeAttribute("disabled");
            }
        })
    };

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
            <h1>Milhares de parceiros utilizam CashEdu em suas vendas</h1>
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
                o CashEdu poderá ajudar no seu crescimento 
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
                Preenchar as informações abaixo e comece a oferecer o cashback em sua loja ou sua instituição de ensino e fomente a educação.
            </p>
            <div className="form">
                <InputMask id="nome" name="nome" placeholder="Nome"/>
                <InputMask id="telephone" mask="(99)99999-9999" name="telephone" placeholder="Telefone"/>
                <InputMask id="email" name="email" placeholder="E-mail"/>
                <InputMask id="observacao" name="observacao" placeholder="Observação"/>
                <button onClick={submitForm}>Enviar</button>
            </div>
        </section>
        </>
    );
}

export default Partnership;