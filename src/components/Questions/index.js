import React from 'react';

// import iconSearch from '../../icons/search.svg';
import arrowDownYellow from '../../icons/arrow-down-yellow.svg';
import arrowQuestions from '../../icons/arrow-questions.svg';

import '../../styles/components/Questions/styles.css';

function Questions() {
    return (
        <>
        <section className="search-questions">
            <h1>PERGUNTAS FREQUENTES</h1>
            <p>Tire suas dúvidas sobre o CashEdu nesta seção.</p>

            <div className="input-search">
                <input
                    type="text"
                    name="pesquisar"
                    placeholder="Digite aqui sua dúvida"
                />
                {/* <img src={iconSearch} alt="Pesquisar" /> */}
                <button>
                    Procurar
                </button>
            </div>
        </section>

        <button className="btn-faq">
            <span>Olhe nossa F.A.Q</span>
            <img src={arrowDownYellow} alt="F.A.Q" />
        </button>

        <section className="questions">
            <h1>Vitae at sit mattis facilisi et ultrices.</h1>
            <div className="text-question">
                <div className="title">
                    <h1>O que é o CashEdu?</h1>
                    <button>
                        <img src={arrowQuestions} alt="Exibir Pergunta" />
                    </button>
                </div>

                <p className="answer">
                    Somos uma plataforma de cashback educacional, fornecendo uma conta digital para o estudante, 
                    na qual o estudante pode gerenciar todas as suas transações conforme um banco convencional. 
                    Obtendo as vantagens de cashback em suas compras online e pagamento dos seus boletos.
                    Esse cashback é utilizado para auxiliar o pagamento de suas mensalidades em sua instituição de ensino.
                    Os alunos além de terem uma conta digital e incentivos de cashback para o pagamento de suas mensalidades, 
                    possuem acesso ao nosso clube de vantagens, tendo benefícios em nossos parceiros.
                </p>
            </div>

            <div className="text-question">
                <div className="title">
                    <h1>Como faço para ter a conta digital no CashEdu?</h1>
                    <button>
                        <img src={arrowQuestions} alt="Exibir Pergunta" />
                    </button>
                </div>

                <p className="answer">
                    Você deve baixar o app e realizar seu cadastro dentro do app.
                </p>
            </div>

            <div className="text-question">
                <div className="title">
                    <h1>Por que ter uma conta no CashEdu?</h1>
                    <button>
                        <img src={arrowQuestions} alt="Exibir Pergunta" />
                    </button>
                </div>

                <p className="answer">
                    Se você deseja fazer suas compras em suas lojas favoritas, e também ter uma força extra para pagar seus estudos o serviço de cashback do CashEdu, que devolve parte do valor das compras 
                    para o cliente gastar em sua instituição de ensino é a solução perfeita. 
                    O aplicativo, oferece uma conta digital na qual você poderá pagar suas mensalidades, fazer compras online em lojas parceiras sem burocracia, e também pagar suas contas com praticidade, além de garantir sua economia.  
                    O CASHEDU permite também, transferir dinheiro, solicitar a mesada educacional e obter benefícios com a indicação de amigos.
                </p>
            </div>

            <div className="text-question">
                <div className="title">
                    <h1>Tem alguma tarifa?</h1>
                    <button>
                        <img src={arrowQuestions} alt="Exibir Pergunta" />
                    </button>
                </div>

                <p className="answer">
                    O App da CahEdu é gratuito, não tem anuidade, nem taxa de manutenção.
                </p>
            </div>

            <div className="text-question">
                <div className="title">
                    <h1>O que é cashback?</h1>
                    <button>
                        <img src={arrowQuestions} alt="Exibir Pergunta" />
                    </button>
                </div>

                <p className="answer">
                    É dinheiro de volta!
                    Quando você faz um pagamento pelo CashEdu em uma das lojas e estabelecimentos 
                    parceiros, parte do valor dos produtos selecionados volta para você utilizar para pagar suas mensalidades escolares.
                    Esse valor será informado de diversas maneiras: no site da Loja parceiro, 
                    no momento do fechamento da compra e no extrato do CashEdu. 
                </p>
            </div>

            <div className="text-question">
                <div className="title">
                    <h1>Como faço para usufruir dos benefícios do cashback?</h1>
                    <button>
                        <img src={arrowQuestions} alt="Exibir Pergunta" />
                    </button>
                </div>

                <p className="answer">
                    Para usufruir do cashback você deve estar matriculado em uma 
                    instituição de ensino que seja parceira.
                </p>
            </div>
        
            <div className="text-question">
                <div className="title">
                    <h1>Quando vou receber meu cashback?</h1>
                    <button>
                        <img src={arrowQuestions} alt="Exibir Pergunta" />
                    </button>
                </div>

                <p className="answer">
                    Nas compras online para produtos selecionados, você recebe seu Cashback em até 30 dias corridos, 
                    desde que a mercadoria tenha sido entregue!
                    Já nas Lojas Físicas, o Cashback fica disponível em 7 dias corridos.
                    E sem precisar fazer nada, o saldo entra automaticamente na sua conta.
                </p>
            </div>

            <div className="text-question">
                <div className="title">
                    <h1>Como faço para ver o saldo?</h1>
                    <button>
                        <img src={arrowQuestions} alt="Exibir Pergunta" />
                    </button>
                </div>

                <p className="answer">
                    O saldo aparecerá no meio da tela.
                    Você pode ocultar se quiser clicando no olho mágico.
                    Para desativar essa função, é só clicar novamente no olho, na tela.
                </p>
            </div>

            <div className="text-question">
                <div className="title">
                    <h1>Como diferencio os tipos de saldo no CashEdu?</h1>
                    <button>
                        <img src={arrowQuestions} alt="Exibir Pergunta" />
                    </button>
                </div>

                <p className="answer">
                    <p>• Saldo total: total de Cashback, depósito e transferências recebidas;</p>
                    <p>• Saldo de Cashback: é o valor que você ganhou comprando nas lojas parceiras</p>
                    <p>• Saldo de depósito: saldo de depósitos e transferências recebidas.</p>
                </p>
            </div>

            <div className="text-question">
                <div className="title">
                    <h1>O saldo expira?</h1>
                    <button>
                        <img src={arrowQuestions} alt="Exibir Pergunta" />
                    </button>
                </div>

                <p className="answer">
                    O saldo de Cashback não expira.
                </p>
            </div>

            <div className="text-question">
                <div className="title">
                    <h1>Quais as regras de uso dos diferentes tipos de saldo?</h1>
                    <button>
                        <img src={arrowQuestions} alt="Exibir Pergunta" />
                    </button>
                </div>

                <p className="answer">
                    Saldo de Cashback e mesada educacional: só poderá ser utilizado 
                    no pagamento de suas mensalidades.
                    Saldo de depósito, transferências: poderá ser usado em qualquer 
                    tipo de transação, inclusive para pagamento de mensalidades. Não há restrições para a 
                    utilização desse saldo.ashback não expira.
                </p>
            </div>
        </section>
        </>
    );
}

export default Questions;