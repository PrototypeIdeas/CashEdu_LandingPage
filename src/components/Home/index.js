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
    const [navClassName, setNavClassName] = useState('header-content for-student');


    function handleForStudents() {
        setForStudentSelected(true);
        setPatnershipSelected(false);
        setCommonQuestions(false);
        setNavClassName('header-content for-student')
    }

    function handlePartnerShip() {
        setPatnershipSelected(true);
        setForStudentSelected(false);
        setCommonQuestions(false);
        setNavClassName('header-content partner-ship')
    }

    function handleCommonQuestions() {
        setPatnershipSelected(false);
        setForStudentSelected(false);
        setCommonQuestions(true);
        setNavClassName('header-content questions')
    }

    return (   
        <>   
            <nav className={navClassName}>
                <img src={logo} alt="Logo CashEdu" />
                <div className="buttons">
                    <button
                        className={!forStudentsSelected ? ( "buttons buttonDisabled" ) : ( "buttons" )}
                        type="button"
                        onClick={handleForStudents}
                    >
                        Para estudantes
                    </button>

                    <button
                        className={!partnershipSelected ? ( "buttons buttonDisabled" ) : ( "buttons" )}
                        type="button"
                        onClick={handlePartnerShip}
                    >
                        Seja um parcerio
                    </button>

                    <button
                        className={!commonQuestions ? ( "buttons buttonDisabled" ) : ( "buttons" )}
                        type="button"
                        onClick={handleCommonQuestions}
                    >
                        Dúvidas frequentes
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