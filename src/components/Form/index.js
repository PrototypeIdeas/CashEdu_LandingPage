import React, { useState } from 'react';

import '../../styles/components/Form/styles.css';
import SuccessBox from '../SuccessBox';

import InputMask from "react-input-mask";


function Form() {
    const [success, setSuccess] = useState(false);
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [observacao, setObservacao] = useState('');
    const [nomeValid, setNomeValid] = useState(true);
    const [telefoneValid, setTelefoneValid] = useState(true);
    const [emailValid, setEmailValid] = useState(true);
    const [observacaoValid, setObservacaoValid] = useState(true);

    const submitForm = e => {
        setEmailValid(true)
        setTelefoneValid(true)
        setNomeValid(true)
        setObservacaoValid(true)

        if(validate()){
            document.getElementById('nome').setAttribute("disabled","disabled");
            document.getElementById('telefone').setAttribute("disabled","disabled");
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
                "text": "<strong>Nome: </strong>" + nome + "<br><strong>Telefone: </strong>" + telefone + 
                "<br><strong>Email: </strong>" + email + "<br><strong>OBS: </strong>" + observacao
            })
            }
            ).then(resp => {
                if (resp.ok) {
                    setSuccess(true);
                } else {
                    document.getElementById('nome').removeAttribute("disabled");
                    document.getElementById('telephone').removeAttribute("disabled");
                    document.getElementById('email').removeAttribute("disabled");
                    document.getElementById('observacao').removeAttribute("disabled");
                }
            })
        }

    };

    const validate = () => {
        
        var validate = true;

        if(nome.trim().length < 1){
            setNomeValid(false)
            validate = false;
        }
        if(telefone.trim().length < 9){
            setTelefoneValid(false)
            validate = false;
        }
        if(!(email.length > 6 && email.indexOf('@') > -1 && email.split('@')[1].length > 3)){
            setEmailValid(false)
            validate = false;
        }
        if(observacao.trim().length < 1){
            setObservacaoValid(false)
            validate = false;
        }

        return validate;
    }
    return (
        <div>
        { success ? (
            <SuccessBox />
        ) : (
            <div className="form">
                <InputMask id="nome" name="nome" placeholder="Nome" onChange={(e) => setNome(e.target.value)}/>
                { !nomeValid && <p>Campo Obrigatório</p>}
                <InputMask id="telefone" mask="(99)99999-9999" name="telefone" placeholder="Telefone" onChange={(e) => setTelefone(e.target.value)}/>
                { !telefoneValid && <p>Campo Obrigatório</p>}
                <InputMask id="email" name="email" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)}/>
                { !emailValid && <p>Entre com um email válido</p>}
                <InputMask id="observacao" name="observacao" placeholder="Observação" onChange={(e) => setObservacao(e.target.value)}/>
                { !observacaoValid && <p>Campo Obrigatório</p>}
                <button className="send-btn" onClick={submitForm}> Enviar </button>
            </div>
        )}
        </div>
    )
}

export default Form;