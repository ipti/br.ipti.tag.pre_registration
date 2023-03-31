import React from "react";

// Material UI
import Grid from "@material-ui/core/Grid";
import { createMuiTheme, makeStyles, ThemeProvider } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

import { Paginator } from "../../components/Paginator";
import { BoxBig, BoxDiscriptionClassroom } from "../../components/Boxes";
import List from "../../components/List";

// Styles
import styles from "./styles";
import styleBase from "../../styles";
import { Link } from "react-router-dom";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: styleBase.colors.purple
    }
  }
});

const useStyles = makeStyles(theme => styles);


const Stage = ({ stages, pagination, handlePage, activePage }) => {
  const classes = useStyles();

  if (!stages) return null;


  const stage = () => {
    return stages.map((stage, index) => {

      // const {} = useFetchRequestStagevsmodality(year);

      return (
        <Grid key={index} item md={4} sm={4} xs={12}>
          <BoxBig
            link={`turmas/${stage.id}`}
            title={stage.name}
            subtitle="Turma"
            addCursor={true}
            textRight=""
          >
            <BoxDiscriptionClassroom
              title={`ano: ${stage.school_year}`}
            //  registrationConfirmed={`${stage.student_pre_identification.length}`}
            />
          </BoxBig>
        </Grid>
      );
    });
  };

  return (
    <div style={{ position: "relative" }}>
      <Grid container direction="row">
        <Grid className={classes.boxTitlePagination} item xs={12}>
          <div style={{ display: 'flex', flexDirection: "row" }}> 
            <h1 className={`${classes.title} ${classes.floatLeft}`}>Turmas </h1> 
            {/* <p style={{marginLeft: 'auto'}}> Será valido o último ano escolar para cada estagio</p> */}
          </div>
          <div className={`${classes.floatRight}`}>
            <Paginator
              pagination={pagination}
              handlePage={handlePage}
              activePage={activePage}
            />
          </div>
        </Grid>
      </Grid>
      <Grid container direction="row" spacing={3}>
        <List items={stage()}>
          <Grid item xs={12}>
            <Alert variant="outlined" severity="warning">
              Nenhuma turma cadastrada
            </Alert>
          </Grid>
        </List>
      </Grid>
      <Link to="/estagios/adicionar" className={`${classes.addStage}`}>
        <ThemeProvider theme={theme}>
          <Fab color="primary" aria-label="add">
            <AddIcon />
          </Fab>
        </ThemeProvider>
      </Link>
    </div>
  );
};

export default Stage;
