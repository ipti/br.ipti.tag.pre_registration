import React from "react";

// Material UI
import Grid from "@material-ui/core/Grid";
import { ThemeProvider, createMuiTheme, makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";

import Select from "react-select";

import { BoxBig, BoxDiscriptionClassroom } from "../../components/Boxes";
import List from "../../components/List";
import { Paginator } from "../../components/Paginator";

// Styles
import { Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { StageContext } from "../../containers/Stage/context/context";
import { getYearClassRoom, yearClassroom } from "../../services/auth";
import styleBase from "../../styles";
import styles from "./styles";

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

  const { year, setYear } = useContext(StageContext)

  if (!stages) return null;


  const currentYear = new Date().getFullYear();

  const numYears = 10;

  const yearArray = Array.from({ length: numYears }, (v, i) => ({
    year: currentYear - i,
    id: i
  }));

  const year_classrrom = [{year: "Todos", id: 11}, ...yearArray];
  
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
              title={`Ano: ${stage.school_year}`}
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
          <div className={`${classes.spaceBetween}`}>
            <div style={{ width: '200px' }}>
              <Select
                className="basic-single"
                classNamePrefix="select"
                placeholder="Digite o ano"
                options={year_classrrom}
                defaultValue={getYearClassRoom()}
                onChange={selectedOption => {
                  if(selectedOption.year === 'Todos'){
                    yearClassroom('');
                    window.location.reload()
                  }else{
                    yearClassroom(selectedOption.year)
                    window.location.reload()
                  }
                  
                  
                }}
                getOptionValue={opt => opt.year}
                getOptionLabel={opt => opt.year}
              />
            </div>
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
      <Link to="/turmas/adicionar" className={`${classes.addStage}`}>
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
