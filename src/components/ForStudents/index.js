import React from 'react';

import AboutApp from '../AboutApp/index';
import AboutUs from '../AboutUs';

import avatar from '../../assets/image.svg';
import headerImage from '../../assets/header-image.png';
import arrowDown from '../../icons/arrow-down.svg';
import playStore from '../../assets/play-store.svg';
import appleStore from '../../assets/apple-store.svg';

import '../../styles/components/ForStudents/styles.css';

function Header() {
    return (
        <>
        <section className="presentation">
            <div className="title">
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

        <button className="see-more">
            <span>Veja mais</span>
            <img src={arrowDown} alt="Veja mais" />
        </button>

        <AboutUs />

        <section className="cards">
            <div>
                <div className="cashback">
                    <img src={avatar} alt="Avatar" />
                    <div className="text">
                        <h1>Cashback Educacional</h1>
                        <p>
                            Você pode também receber o cashback através do pagamento da sua mensalidade na sua instituição de ensino, 
                            assim terá uma força a mais para a próxima mensalidade.
                        </p>
                    </div>
                </div>

                <div className="mesada">
                    <img src={avatar} alt="Avatar" />
                        <div className="text">
                            <h1>Mesada</h1>
                            <p>
                                Onde é possível editar e escolher contatos para ajuda no pagamento de uma mensalidade, 
                                através do envio de mensagens solicitando ajuda com e sem valor direcionado. 
                                Podendo ser realizado via Pix e/ou boleto.
                            </p>
                        </div>
                </div>

                <div className="indicacoes">
                    <img src={avatar} alt="Avatar" />
                        <div className="text">
                            <h1>Indicações de amigo</h1>
                            <p>
                                Você pode indicar amigos para se matricular na sua instituição e 
                                abrir uma conta no CashEdu, recebendo cashback caso seu amigo faça a adesão.
                            </p>
                        </div>
                </div>

                <div className="carteira">
                    <img src={avatar} alt="Avatar" />
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
        
        <section className="contact">
            <h1>ENTRE EM CONTATO</h1>
            <p>Ainda precisa de ajuda? Envie uma mensagem para gente para que possamos te auxiliar!</p>
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

export default Header;