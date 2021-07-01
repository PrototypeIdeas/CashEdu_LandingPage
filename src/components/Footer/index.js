import React from 'react';

import logo from '../../assets/logo.svg';
import twitterLogo from '../../icons/twitter.svg';
import instagramLogo from '../../icons/instagram.svg';
import linkedinLogo from '../../icons/linkedin.svg';
import facebookLogo from '../../icons/facebook.svg';


import '../../styles/components/Footer/styles.css';

function Footer() {

    function handleForStudents() {
        document.getElementById('for-students-button').click();
    }

    function handlePartnerShip() {
        document.getElementById('partnership-button').click();
    }

    function handleCommonQuestions() {
        document.getElementById('questions-button').click();
    }

    return (       
    <footer className="footer">
            <img src={logo} alt="Logo" />

            <div className="student"> 
            <p>Estudante</p>
            <ul>
                <li><a href="#" onClick={handleForStudents}>Apresentação</a></li>
                <li><a href="#about-us" onClick={handleForStudents}>Quem somos</a></li>
                <li><a href="#beneficts" onClick={handleForStudents}>Beneficíos</a></li>
                <li><a href="#about-app"onClick={handleForStudents}>Sobre o APP</a></li>
                <li><a href="#students-contact" onClick={handleForStudents}>Entre em contato</a></li>
            </ul>
            </div>
        
            <div className="patnership">
            <p>Parcerias</p>
            <ul>
                <li><a href="#" onClick={handlePartnerShip}>Apresentação</a></li>
                <li><a href="#about-us" onClick={handlePartnerShip}>Quem somos</a></li>
                <li><a href="#for-partner" onClick={handlePartnerShip}>Nossos parceiros</a></li>
                <li><a href="#type-business" onClick={handlePartnerShip}>Tipos de Negócios</a></li>
                <li><a href="#about-app" onClick={handlePartnerShip}>Sobre o APP</a></li>
                <li><a href="#parthner-contact" onClick={handlePartnerShip}>Entre em contato</a></li>
            </ul>
            </div>

            <a href="#" onClick={handleCommonQuestions}>Perguntas Frequentes</a>

            <div className="social-media">
                <p>Nos Encontre:</p>
                <div className="icons">
                    <img src={facebookLogo} alt="Facebook" />
                    <img src={twitterLogo} alt="Twitter" />
                    <img src={linkedinLogo} alt="linkedin" />
                    <img src={instagramLogo} alt="Instagram" />
                </div>
            </div>
        </footer>
    );
}

export default Footer;
