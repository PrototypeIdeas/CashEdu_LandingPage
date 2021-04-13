import React, {useEffect} from 'react';

import AboutApp from '../AboutApp/index';
import AboutUs from '../AboutUs';

import headerImage from '../../assets/header-image.svg';
import arrowDown from '../../icons/arrow-down.svg';
import playStore from '../../assets/play-store.svg';
import appleStore from '../../assets/apple-store.svg';
import cashback from '../../assets/cashback.svg';
import mesada from '../../assets/mesada.svg';
import indicacao from '../../assets/indicacao.svg';
import carteiraDigital from '../../assets/carteira-digital.svg';

import InputMask from "react-input-mask";

import '../../styles/components/ForStudents/styles.css';


function Header() {
    
    useEffect(() => {
        if(window.innerWidth > 1100){
            document.getElementById('about-app').style.marginTop = "-10rem";
        }
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
            "subject": "Contato - Para Estudantes",
            "text": "<strong>Nome: </strong>" + document.getElementById('nome').value + "<br><strong>Telefone: </strong>" + document.getElementById('telephone').value + 
            "<br><strong>Email: </strong>" + document.getElementById('email').value + "<br><strong>OBS: </strong>" + document.getElementById('observacao').value
          })
        }
        ).then(resp => {
            if (resp.ok) {
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
        <section className="presentation">
            <div id="present" className="title">
                <h1>INVESTINDO NA SUA FORMAÇÃO</h1>
                <p>
                    Maior programa de Cashback do mundo!
                    Você realiza uma compra nas lojas cadastradas e recebe parte do dinheiro de volta
                    para pagar seus estudos.
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
            <img src={headerImage} alt="Estudos" />
        </section>

        <a className="see-more" href="#about-us">
            <span>Veja mais</span>
            <img src={arrowDown} alt="Veja mais" />
        </a>

        <AboutUs />

        <section id="beneficts" className="cards">
            <div>
                <div className="cashback-option">
                    <div className="frame">
                        <img src={cashback} alt="Avatar" />
                    </div>
                    <div className="text">
                        <h1>Cashback Educacional</h1>
                        <p>
                            Você pode também receber o cashback através do pagamento da sua mensalidade na sua instituição de ensino, 
                            assim terá uma força a mais para a próxima mensalidade.
                        </p>
                    </div>
                </div>

                <div className="mesada-option">
                    <div className="frame">
                        <img src={mesada} alt="Avatar" />
                    </div>                    
                        <div className="text">
                            <h1>Mesada</h1>
                            <p>
                                Onde é possível editar e escolher contatos para ajuda no pagamento de uma mensalidade, 
                                através do envio de mensagens solicitando ajuda com e sem valor direcionado. 
                                Podendo ser realizado via Pix e/ou boleto.
                            </p>
                        </div>
                </div>

                <div className="indicacoes-option">
                    <div className="frame">
                        <img src={indicacao} alt="Avatar" />
                    </div>
                        <div className="text">
                            <h1>Indicações de amigo</h1>
                            <p>
                                Você pode indicar amigos para se matricular na sua instituição e 
                                abrir uma conta no CashEdu, recebendo cashback caso seu amigo faça a adesão.
                            </p>
                        </div>
                </div>

                <div className="carteira-option">
                    <div className="frame">
                        <img src={carteiraDigital} alt="Avatar" />
                    </div>
                        <div className="text">
                            <h1>Carteira Digital</h1>
                            <p>
                                Você tem sua conta digital aprovada, onde você pode realizar depósitos, 
                                transferências, pagamento de contas e boletos através do pix.
                            </p>
                        </div>
                </div>
            </div>

            <div className="beneficios">
                <h1>BENEFICIOS!</h1>
                <h2>COMO O CASH EDU PODE AJUDAR NA SUA EDUCAÇÃO</h2>
                <p>
                    Se você deseja fazer suas compras em suas lojas favoritas, e também ter uma força extra para pagar seus estudos o serviço de cashback do CashEdu, que devolve parte do valor das compras 
                    para o cliente gastar em sua instituição de ensino é a solução perfeita. 
                </p>
            </div>
        </section>

        <AboutApp />
        
        <section id="students-contact" className="students-contact">
            <h1>ENTRE EM CONTATO</h1>
            <p>Ainda precisa de ajuda? Envie uma mensagem para gente para que possamos te auxiliar!</p>
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

export default Header;