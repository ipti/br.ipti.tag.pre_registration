import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import FinishImg from "../../assets/images/illustration-success.png";
import ButtonGreen from "../../components/Buttons/ButtonGreen";
import styles from "./styles";
import { useHistory } from "react-router";
import { useContext } from "react";
import { RegistrationContext } from "../../containers/Registration/Context/context";

const useStyles = makeStyles(styles);

const Finish = props => {

  const { error } = useContext(RegistrationContext)
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
          <img src={FinishImg} alt="" />
        </Grid>
        <Grid item xs={12}>
          <p>
            Matrícula realizada com sucesso,
            <br /> a escola entrará em contato
          </p>
        </Grid>
      </Grid><div style={{ margin: 'auto', marginTop: '20px', width: '300px' }}>
        <ButtonGreen
          type="button"
          onClick={() => window.location.reload()}
          title="Voltar para o inicio"
        />
      </div>
      <Grid
        className={`${classes.contentStart} ${classes.contentBond}`}
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid className={classes.boxNumberRegistration} item xs={10}>
          {props?.registration}
        </Grid>
      </Grid>
    </>
  );
};

export default Finish;
