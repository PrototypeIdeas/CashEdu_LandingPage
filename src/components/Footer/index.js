import React from 'react';

import logo from '../../assets/logo.svg';
import twitterLogo from '../../icons/twitter.svg';
import instagramLogo from '../../icons/instagram.svg';
import linkedinLogo from '../../icons/linkedin.svg';
import facebookLogo from '../../icons/facebook.svg';

import '../../styles/components/Footer/styles.css';

function Footer() {
    return (       
    <footer className="footer">
            <img src={logo} alt="Logo" />

            <div className="student"> 
            <p>Estudante</p>
            <ul>
                <li><a href="#">Apresentação</a></li>
                <li><a href="#">Quem somos</a></li>
                <li><a href="#">Beneficíos</a></li>
                <li><a href="#">Sobre o APP</a></li>
                <li><a href="#">Entre em contato</a></li>
            </ul>
            </div>
        
            <div className="patnership">
            <p>Parcerias</p>
            <ul>
                <li><a href="#">Apresentação</a></li>
                <li><a href="#">Quem somos</a></li>
                <li><a href="#">Nossos parceiros</a></li>
                <li><a href="#">Tipos de Negócios</a></li>
                <li><a href="#">Sobre o APP</a></li>
                <li><a href="#">Entre em contato</a></li>
            </ul>
            </div>

            <a href="#">Perguntas Frequentes</a>

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
