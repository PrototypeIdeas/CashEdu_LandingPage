import React, { useState } from 'react';

import ForStudents from '../ForStudents/index';
import Partnership from '../Partnership';
import Questions from '../Questions';

import logo from '../../assets/logo.svg';

import '../../styles/components/Home/styles.css';

function Header() {
    const [forStudentsSelected, setForStudentSelected] = useState(true);
    const [partnershipSelected, setPatnershipSelected] = useState(false);
    const [commonQuestions, setCommonQuestions] = useState(false);
    const [classNameNav, setClassNameNav] = useState('header-content questions');

    function handleForStudents() {
        setForStudentSelected(true);
        setPatnershipSelected(false);
        setCommonQuestions(false);
        setClassNameNav('header-content questions');
    }

    function handlePartnerShip() {
        setPatnershipSelected(true);
        setForStudentSelected(false);
        setCommonQuestions(false);
        setClassNameNav('header-content partner-ship');
    }

    function handleCommonQuestions() {
        setPatnershipSelected(false);
        setForStudentSelected(false);
        setCommonQuestions(true);
        setClassNameNav('header-content questions');
    }

    return (   
        <>   
            <nav className={classNameNav}>
                <a href="/">
                    <img src={logo} alt="Logo CashEdu" />
                </a>
                <div className="buttons">
                    <button
                        id='for-students-button'
                        className={!forStudentsSelected ? ( "buttons buttonDisabled" ) : ( "buttons" )}
                        type="button"
                        onClick={handleForStudents}
                    >
                        Para Estudantes
                    </button>

                    <button
                        id='partnership-button'
                        className={!partnershipSelected ? ( "buttons buttonDisabled" ) : ( "buttons" )}
                        type="button"
                        onClick={handlePartnerShip}
                    >
                        Seja um Parcerio
                    </button>

                    <button
                        id='questions-button'
                        className={!commonQuestions ? ( "buttons buttonDisabled" ) : ( "buttons" )}
                        type="button"
                        onClick={handleCommonQuestions}
                    >
                        D??vidas Frequentes
                    </button>
                </div>               
            </nav>

            { forStudentsSelected ? (
                <>
                    <ForStudents />
                </>
            ) : (
            <>
            { partnershipSelected ? (
                // FUTURE COMPONENT
                <>
                    <Partnership />
                </>
            ) : (
                // FUTURE COMPONENT
                <Questions />
            )}
            </>
            )}
        </>
    );
}

export default Header;
