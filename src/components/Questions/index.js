import React, { useState }from 'react';

import arrowDownYellow from '../../icons/arrow-down-yellow.svg';

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import '../../styles/components/Questions/styles.css';


function Questions() {
  
  const [question, setQuestion] = useState('');
  const [searchOk, setSearchOk] = useState(true);

  const handleChange = e => {
    setQuestion(e.target.value);
    setSearchOk(true)
  }

  const search = e => {
 
    var name = document.getElementById("input-text").value;
    var pattern = name.toLowerCase();
  
    var divs = document.getElementsByClassName("title");
    var valid = false;
    for (var i = 0; i < divs.length; i++) {
      var index = divs[i].innerText.toLowerCase().indexOf(pattern);
      if (index !== -1) {
        document.getElementById(divs[i].id).scrollIntoView();
        document.getElementById(divs[i].id).click();
        valid = true;
        break;
      }
    }
    
    setSearchOk(valid)
    
  }

    return (
      <React.Fragment>
        <section className="search-questions">
            <h1>PERGUNTAS FREQUENTES</h1>
            <p>Tire suas dúvidas sobre o Cash Edu nesta seção.</p>

            <div className="input-search">
                <input
                    id="input-text"
                    type="text"
                    name="pesquisar"
                    placeholder="Digite aqui sua dúvida"
                    onChange={handleChange}
                />
                <button onClick={search}>
                    Procurar
                </button>
            </div>
        </section>
        {!searchOk && 
        <div className="search-nok">
          <h1>Infelizmente não enconstramos itens relacionados ao {question}</h1>
          <p>Faça a busca novamente ou navegue pelos itens abaixo</p>
        </div>}
        

        <a className="btn-faq" href="#box-questions">
            <span>Olhe nossa F.A.Q</span>
            <img src={arrowDownYellow} alt="F.A.Q" />
        </a>

        {/* QUESTIONS */}
        <section id="box-questions" className="box-questions">
          <Accordion className="content-question">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className="title-question"
            >
              <Typography id="title1" className="title" >O que é o Cash Edu?</Typography>
            </AccordionSummary>
            <AccordionDetails className="answer">
              <Typography className="content-answer">
                Somos uma plataforma de cashback educacional, fornecendo uma conta digital para o estudante, 
                  na qual o estudante pode gerenciar todas as suas transações conforme um banco convencional. 
                  Obtendo as vantagens de cashback em suas compras online e pagamento dos seus boletos.
                  Esse cashback é utilizado para auxiliar o pagamento de suas mensalidades em sua instituição de ensino.
                  Os alunos além de terem uma conta digital e incentivos de cashback para o pagamento de suas mensalidades, 
                  possuem acesso ao nosso clube de vantagens, tendo benefícios em nossos parceiros.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </section>

        <section className="box-questions">
        <Accordion className="content-question">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className="title-question"
            >
              <Typography id="title" className="title">Como faço para ter a conta digital no Cash Edu?</Typography>
            </AccordionSummary>
            <AccordionDetails className="answer">
              <Typography className="content-answer">
                Você deve baixar o app e realizar seu cadastro dentro do app.
              </Typography>
            </AccordionDetails>
          </Accordion>
          </section>

        <section className="box-questions">
            <Accordion className="content-question">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                className="title-question"
              >
                <Typography id="title2" className="title" >Por que ter uma conta no Cash Edu?</Typography>
              </AccordionSummary>
              <AccordionDetails className="answer">
                <Typography className="content-answer">
                    Se você deseja fazer suas compras em suas lojas favoritas, e também ter uma força extra 
                    para pagar seus estudos o serviço de cashback do Cash Edu, que devolve parte do valor das compras 
                    para o cliente gastar em sua instituição de ensino é a solução perfeita. 
                    O aplicativo, oferece uma conta digital na qual você poderá pagar suas mensalidades, fazer compras online em lojas parceiras sem burocracia, 
                    e também pagar suas contas com praticidade, além de garantir sua economia.  
                    O Cash Edu permite também, transferir dinheiro, solicitar a mesada educacional e obter benefícios com a indicação de amigos.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </section>
      
        <section className="box-questions">
          <Accordion className="content-question">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className="title-question"
            >
              <Typography id="title3" className="title" >Tem alguma tarifa?</Typography>
            </AccordionSummary>
            <AccordionDetails className="answer">
              <Typography className="content-answer">
                O App da CahEdu é gratuito, não tem anuidade, nem taxa de manutenção.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </section>

        <section className="box-questions">
          <Accordion className="content-question">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                className="title-question"
              >
                <Typography id="title4" className="title" >O que é cashback?</Typography>
              </AccordionSummary>
              <AccordionDetails className="answer">
                <Typography className="content-answer">
                    É dinheiro de volta! Quando você faz um pagamento pelo Cash Edu em uma das lojas e estabelecimentos 
                    parceiros, parte do valor dos produtos selecionados volta para você utilizar para pagar suas mensalidades escolares.
                    Esse valor será informado de diversas maneiras: no site da Loja parceiro, 
                    no momento do fechamento da compra e no extrato do Cash Edu.
                </Typography>
              </AccordionDetails>
          </Accordion>
        </section>
        <section className="box-questions">
          <Accordion className="content-question">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                className="title-question"
              >
                <Typography id="title5" className="title" >Como faço para usufruir dos benefícios do cashback?</Typography>
              </AccordionSummary>
              <AccordionDetails className="answer">
                <Typography className="content-answer">
                  Para usufruir do cashback você deve estar matriculado em uma 
                  instituição de ensino que seja parceira.
                </Typography>
              </AccordionDetails>
          </Accordion>
        </section>

        <section className="box-questions">
          <Accordion className="content-question">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className="title-question"
            >
              <Typography id="title6" className="title" >Quando vou receber meu cashback?</Typography>
            </AccordionSummary>
            <AccordionDetails className="answer">
              <Typography className="content-answer">
                Nas compras online para produtos selecionados, você recebe seu Cashback em até 30 dias corridos, 
                  desde que a mercadoria tenha sido entregue!
                  Já nas Lojas Físicas, o Cashback fica disponível em 7 dias corridos.
                  E sem precisar fazer nada, o saldo entra automaticamente na sua conta.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </section>

        <section className="box-questions">
          <Accordion className="content-question">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className="title-question"
            >
              <Typography id="title7" className="title" >Como faço para ver o saldo?</Typography>
            </AccordionSummary>
            <AccordionDetails className="answer">
              <Typography className="content-answer">
                  O saldo aparecerá no meio da tela.
                  Você pode ocultar se quiser clicando no olho mágico.
                  Para desativar essa função, é só clicar novamente no olho, na tela.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </section>

        <section className="box-questions">
          <Accordion className="content-question">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className="title-question"
            >
              <Typography id="title8" className="title" >Como diferencio os tipos de saldo no Cash Edu?</Typography>
            </AccordionSummary>
            <AccordionDetails className="answer">
              <Typography className="content-answer">
                  <p>• Saldo total: total de Cashback, depósito e transferências recebidas;</p>
                  <p>• Saldo de Cashback: é o valor que você ganhou comprando nas lojas parceiras</p>
                  <p>• Saldo de depósito: saldo de depósitos e transferências recebidas.</p>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </section>

        <section className="box-questions">
          <Accordion className="content-question">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className="title-question"
            >
              <Typography id="title9" className="title" >O saldo expira?</Typography>
            </AccordionSummary>
            <AccordionDetails className="answer">
              <Typography className="content-answer">
                O saldo de Cashback não expira.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </section>

        <section className="box-questions">
          <Accordion className="content-question">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className="title-question"
            >
              <Typography id="title10" className="title" >Quais as regras de uso dos diferentes tipos de saldo?</Typography>
            </AccordionSummary>
            <AccordionDetails className="answer">
              <Typography className="content-answer">
                  Saldo de Cashback e mesada educacional: só poderá ser utilizado 
                  no pagamento de suas mensalidades.
                  Saldo de depósito, transferências: poderá ser usado em qualquer 
                  tipo de transação, inclusive para pagamento de mensalidades. Não há restrições para a 
                  utilização desse saldo.ashback não expira.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </section>
      </React.Fragment>
    );
}

export default Questions;