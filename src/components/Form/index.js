import React, { useState } from 'react';

import '../../styles/components/Form/styles.css';
import SuccessBox from '../SuccessBox';

import InputMask from "react-input-mask";


function Form() {
    const [success, setSuccess] = useState(false);



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
            setSuccess(true);
        } else {
            document.getElementById('nome').removeAttribute("disabled");
            document.getElementById('telephone').removeAttribute("disabled");
            document.getElementById('email').removeAttribute("disabled");
            document.getElementById('observacao').removeAttribute("disabled");
        }
    })
};

    return (
        <div>
        { success ? (
            <SuccessBox />
        ) : (
            <div className="form">
                <InputMask id="nome" name="nome" placeholder="Nome"/>
                <InputMask id="telephone" mask="(99)99999-9999" name="telephone" placeholder="Telefone"/>
                <InputMask 
                    id="email" 
                    name="email" 
                    placeholder="E-mail" 
                />
                <InputMask id="observacao" name="observacao" placeholder="Observação"/>
                <button
                    className="send-btn" 
                    onClick={submitForm}
                >
                    Enviar
                </button>
            </div>
        )}
        </div>
    )
}

export default Form;