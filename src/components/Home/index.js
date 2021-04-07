import React, { useState } from 'react';

import ForStudents from '../ForStudents/index';
import Partnership from '../Partnership';

import logo from '../../assets/logo.svg';

import '../../styles/components/Home/styles.css';

function Header() {
    const [forStudentsSelected, setForStudentSelected] = useState(true);
    const [partnershipSelected, setPatnershipSelected] = useState(false);
    const [commonQuestions, setCommonQuestions] = useState(false);

    function handleForStudents() {
        setForStudentSelected(true);
        setPatnershipSelected(false);
        setCommonQuestions(false);
    }

    function handlePartnerShip() {
        setPatnershipSelected(true);
        setForStudentSelected(false);
        setCommonQuestions(false);
    }

    function handleCommonQuestions() {
        setPatnershipSelected(false);
        setForStudentSelected(false);
        setCommonQuestions(true);
    }

    return (   
        <>   
            <nav 
                className=
                {forStudentsSelected ? ( "header-content for-student" 
                ) : ( 
                "header-content partner-ship" 
                )}
            >
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
                <section></section>
            )}
            </>
            )}
        </>
    );
}

export default Header;
