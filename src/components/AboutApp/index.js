import React from 'react';

import '../../styles/components/AboutApp/styles.css';

import playStore from '../../assets/play-store.svg';
import appleStore from '../../assets/apple-store.svg';
import mobile from '../../assets/mobile.jpeg';

function AboutApp() {
    return (
        <section className="about-app">
            <div className="text-about-app">
                <h1>SOBRE O APP</h1>
                <p>
                    O aplicativo, que pode ser instalado tanto na App Store quanto na 
                    Google Play, oferece uma conta digital na qual você poderá pagar suas 
                    mensalidades, fazer compras online em lojas parceiras sem burocracia, e 
                    também pagar suas contas com praticidade, além de garantir sua economia.
                </p>
                <p>
                    O CashEdu permite também, transferir dinheiro, solicitar a mesada educacional e 
                    obter benefícios com a indicação de amigos.
                </p>

                <div className="selos-store">
                    <a href="#">
                        <img src={playStore} alt="Download Play Store" />
                    </a>
                    <a href="#">                                          
                        <img src={appleStore} alt="Download Apple Store" />
                    </a>
                </div>
            </div>

            <img src={mobile} alt="Teste" />     
        </section>
    );
}

export default AboutApp;