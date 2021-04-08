import React from 'react';

// import iconSearch from '../../icons/search.svg';
import arrowDownYellow from '../../icons/arrow-down-yellow.svg';
// import arrowQuestions from '../../icons/arrow-questions.svg';

import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import '../../styles/components/Questions/styles.css';

const useStyles = makeStyles((theme) => ({
    // root: {
    //   width: '100%',
    // },
    // heading: {
    //   fontSize: theme.typography.pxToRem(15),
    //   fontWeight: theme.typography.fontWeightRegular,
    // },
  }));

function Questions() {
    const classes = useStyles();

    return (
      <>
        <section className="search-questions">
            <h1>PERGUNTAS FREQUENTES</h1>
            <p>Tire suas dúvidas sobre o CashEdu nesta seção.</p>

            <div className="input-search">
                <input
                    type="text"
                    name="pesquisar"
                    placeholder="Digite aqui sua dúvida"
                />
                {/* <img src={iconSearch} alt="Pesquisar" /> */}
                <button>
                    Procurar
                </button>
            </div>
        </section>

        <button className="btn-faq">
            <span>Olhe nossa F.A.Q</span>
            <img src={arrowDownYellow} alt="F.A.Q" />
        </button>
        <section className="questions">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography >Accordion 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
              sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Accordion 2</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
              sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        </section>
      </>
    );
}

export default Questions;