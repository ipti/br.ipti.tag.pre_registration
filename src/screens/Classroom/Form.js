import React from "react";

// Material UI
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";

// Third party

// Components
import { BoxRegistration } from "../../components/Boxes";
import List from "../../components/List";
import { TitleWithLine } from "../../components/Titles";

// Styles
import styles from "./styles";
import { ArrowBack } from "@material-ui/icons";
import { useHistory } from "react-router";

const useStyles = makeStyles(theme => styles);

const Create = props => {
  const classes = useStyles();

  const history = useHistory()

  const {
    data,
    baseLink,
  } = props;


  const registrations = () => {
    const registrationList = data?.student_pre_identification ?? [];


    return registrationList.map((registration, index) => {
      return (
        <BoxRegistration
          link={`${baseLink}/${registration?.id}`}
          key={index}
          name={registration?.name}
          sex={registration?.sex}
          id={registration?.id}
          student_fk={registration?.student_fk}
          md={4}
          sm={4}
          unavailable={registration?.unavailable}
        />
      );
    });
  };

  return (
    <>
    <ArrowBack onClick={() => {history.goBack()}} style={{cursor: "pointer"}}/>
      <Grid container direction="row">
        <TitleWithLine title={data && data.name} />
      </Grid>
      <Grid>
        <Grid>
          <h3>Ano da Turma</h3>
          {/* <p>{data.school_year}</p> */}
        </Grid>
      </Grid>
      <Grid
        className={classes.boxContentRegistration}
        container
        direction="row"
      >
        <TitleWithLine title="Matrículas" />
      </Grid>
      <Grid container direction="row" spacing={4}>
        <List items={registrations()}>
          <Grid item xs={12}>
            <Alert variant="outlined" severity="warning">
              A turma não possui matrículas
            </Alert>
          </Grid>
        </List>
      </Grid>
    </>
  );
};

export default Create;
