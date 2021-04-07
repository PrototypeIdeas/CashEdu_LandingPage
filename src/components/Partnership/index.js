import React from 'react';

import AboutApp from '../AboutApp/index';
import AboutUs from '../AboutUs/index';

import partnershipImg from '../../assets/partnership-image.png';
import arrowDown from '../../icons/arrow-down.svg';
import framePartner from '../../assets/frame-partner.svg';
import frameBusiness from '../../assets/frame-business.svg';

import '../../styles/components/Partnership/styles.css';

function Partnership() {
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

        <button className="btn-see-more">
            <span>Veja mais</span>
            <img src={arrowDown} alt="Veja mais" />
        </button>

        <AboutUs />

        <section className="for-partner">
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

            <button className="btn-partner">
                <span>Seja um parceiro</span>
            </button>
        </section>

        <section className="type-business">
            <h1>Qual o seu tipo de negócio?</h1>
            <p>
                Não importa qual o tipo do seu negócio, 
                o CashEdu poderá ajudar no seu crescimento 
                com a melhor solução de CashBack educacional
            </p>

            <div className="cards-business">
                <div className="store">
                    <img src={frameBusiness} alt="Lojista" />
                    <p>Lojista</p>
                </div>

                <div className="institution">
                    <img src={frameBusiness} alt="Instituição de Ensino" />
                    <p>Instituição de Ensino</p>
                </div>

                <div className="others">
                    <img src={frameBusiness} alt="Outras Parcerias" />
                    <p>Outras Parcerias</p>
                </div>
            </div>

            <button className="btn-register">
                Faça seu cadastro
            </button>
        </section>

        <AboutApp />

        <section className="contact">
            <h1>Seja um Parceiro</h1>
            <p>
                Preenchar as informações abaixo e comece a oferecer o cashback em sua loja ou sua instituição de ensino e fomente a educação.
            </p>
            <form>
                <input 
                    type="text"
                    name="name"
                    placeholder="Nome"
                />

                <input 
                    type="number"
                    name="telephone"
                    placeholder="Telefone"
                />

                <input
                    type="email"
                    name="email"
                    placeholder="E-mail"
                />

                <input 
                    type="textarea"
                    name="observacao"
                    placeholder="Observação"
                />

                <button>Enviar</button>
            </form>
        </section>
        </>
    );
}

export default Partnership;