import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import homeImg from "../../assets/images/illustration-home.png";
import { ButtonLinePurple } from "../../components/Buttons";
import styles from "./styles";

const useStyles = makeStyles(styles);

const Student = props => {
  const classes = useStyles();

  return (
    <>
      <Grid
        className={`${classes.contentStart} ${classes.contentBond}`}
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12}>
          <img src={homeImg} alt="" />
        </Grid>
        {/* <Grid item xs={10}>
          <h1>Possui Vínculo</h1>
          <p>Você estava matriculado na instituição no ano anterior?</p>
        </Grid>
      </Grid>
      <Grid className={`${classes.marginTop}`} container justifyContent="center" alignItems="center" >
        <Grid item xs={4}>
          <ButtonPurple
            type="button"
            onClick={() => props.handleStudent(true)}
            title="Sim"
          />
        </Grid>
        <Grid className={classes.marginLeftButton} item xs={4}>
          <ButtonLinePurple
            onClick={() => props.handleStudent(false)}
            type="button"
            title="Não"
          />
        </Grid> */}
          <Grid item xs={10}>
          <h1>Iniciar Formulário</h1>
          <p>Confira todos os campos</p>
        </Grid>
      </Grid>
      <Grid className={`${classes.marginTop}`} container justifyContent="center" alignItems="center" >
        {/* <Grid item xs={4}>
          <ButtonPurple
            type="button"
            onClick={() => props.handleStudent(true)}
            title="Sim"
          />
        </Grid> */}
        <Grid className={classes.marginLeftButton} item xs={4}>
          <ButtonLinePurple
            onClick={() => props.next(3)}
            type="button"
            title="Iniciar"
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Student;
