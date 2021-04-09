import React from 'react';

import aboutImage from '../../assets/about-image.svg';

import '../../styles/components/AboutUs/styles.css';

function AboutUs() {
    return (
        <section className="about-us">
            <div className="text-about-us">
                <h1>Quem somos</h1>
                <p>
                    Somos uma plataforma de cashback educacional, fornecendo uma conta digital para o estudante, 
                    na qual o estudante pode gerenciar todas as suas transações conforme um banco convencional. 
                    Obtendo as vantagens de cashback em suas compras online e pagamento dos seus boletos.
                </p>

                <p>
                    Esse cashback é utilizado para auxiliar o 
                    pagamento de suas mensalidades em sua instituição de ensino.
                </p>

                <p>
                    O alunos além de terem uma conta digital e incentivos de cashback para o pagamento de suas mensalidades, 
                    possuem acesso ao nosso clube de vantagens, tendo benefícios em nossos parceiros.
                </p>

                <p className="text-bold">Equipe Cashedu</p>
            </div>
            <img src={aboutImage} alt="Frame provisório" />
        </section>
    );
}

export default AboutUs;