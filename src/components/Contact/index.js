import React from 'react';

import '../../styles/components/Contact/styles.css';

function Contact() {
    return (
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
    );
}

export default Contact;