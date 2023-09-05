import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import React, { useContext } from "react";
import homeImg from "../../../../assets/images/Caderno.png"
import { ButtonLinePurple } from "../../../../components/Buttons";
import styles from "../../styles";
import { RegistrationContext } from "../../../../context/Registration/IsIPTI/context";

const useStyles = makeStyles(styles);

const InitForm = () => {
  const classes = useStyles();

  const {next} = useContext(RegistrationContext);

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
          <img className={classes.imageRegistration} src={homeImg} alt="" />
        </Grid>
        adssdas
          <Grid item xs={10}>
          <h1>Iniciar Formulário</h1>
          <p>Confira todos os campos</p>
        </Grid>
      </Grid>
      <Grid className={`${classes.marginTop} ${classes.marginButtom}`} container justifyContent="center" alignItems="center" >
        <Grid className={classes.marginLeftButton} item xs={4}>
          <ButtonLinePurple
            onClick={() => next(1)}
            type="button"
            title="Iniciar"
            className="t-button-primary"
          />
        </Grid>
      </Grid>
    </>
  );
};

export default InitForm;
