import React, { useState } from 'react';

import '../../styles/components/SuccessBox/styles.css';
import Form from '../Form';

function SuccessBox() {
    const [form, setForm] = useState(false);

    function handleBackForm() {
        setForm(true);
    }

    return (
        <div>
            { form ? (
                 <Form />
            ) : (
            <div className="box-container">
                <div className="text">
                    <h1>Informações enviadas</h1>
                    <p>Em breve um especialista da equipe do Cash Edu irá análisar e entrar em contato. Obrigado!</p>
                </div>

                <button 
                    className="back-btn"
                    onClick={handleBackForm}
                >
                    Voltar ao formulário
                </button>
            </div>
            )}
        </div>
    );
}

export default SuccessBox;