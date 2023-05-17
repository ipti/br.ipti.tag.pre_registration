import Grid from "@material-ui/core/Grid";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import LockOpen from "@material-ui/icons/LockOpen";
import PersonOutline from "@material-ui/icons/PersonOutline";
import { Form, Formik } from "formik";
import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import LoginImg from "../../assets/images/fadedlogo.svg";
import Tagna from "../../assets/images/ÍviaNotebook.svg";
import { ButtonPurple } from "../../components/Buttons";

import styles from "./styles";

const useStyles = makeStyles(styles);

const Login = props => {
  const classes = useStyles();
  let isValid = props.isValid;

  return (
    <Grid className={classes.root} container direction="row" justifyContent="flex-end">
      <Grid className={classes.contentLeft} item md={8} sm={6} xs={12}>
      <div style={{ width: "30%", position: "sticky" }}>
            <img className={classes.imageTagna} src={Tagna} alt="" />
        </div>
        <div style={{ background: "linear-gradient(0deg, #3F45EA, #3F45EA)", width: "100%", opacity: 0.94}}>
          
          <Grid
            className={`${classes.marginTopContentLeft} ${classes.titleBig}`}
          >
            <Grid item md={9} sm={9} xs={12}>
              Bem-Vindo
            </Grid>
            <Grid item md={12} sm={12} xs={12}>
              ao Matrícula Online
            </Grid>
            <Grid className={classes.boxRegister} container direction="row">
              <Grid item md={9}>
                <Link className={classes.linkRegister} to="/matricula">
                  Iniciar Matrícula
                </Link>
              </Grid>
            </Grid>
          </Grid>
          {/* <Grid container direction="row">
          <Grid item md={2} sm={2}></Grid>
          <Grid item md={7} sm={7}>
            Efetue a matricula 
          </Grid>
        </Grid> */}
        </div>
      </Grid>
      <Grid className={classes.contentRight} item md={4} sm={6} xs={12}>
        <Grid
          className={classes.imageLogin}
          direction="row"
          justifyContent="end"
          alignItems="center"
        >
          <Grid >
            <div>
              <img className={classes.imageLoginStyle} src={LoginImg} alt="" />
            </div>
          </Grid>
        </Grid>
        <Grid>
          <Grid>
            <p className={classes.titleLogin}>Matricula Online </p>
            <p className={classes.subTitleLogin}>Entre com as suas credenciais </p>
          </Grid>
        </Grid>
        <Formik
          initialValues={props.initialValues}
          onSubmit={props.onSubmit}
          validationSchema={props.validationSchema}
          validateOnChange={false}
        >
          {props => {
            return (
              <Form>
                <Grid container direction="row" justifyContent="center">
                  <Grid item xs={8}>
                    <TextField
                      name="username"
                      onChange={props.handleChange}
                      variant="outlined"
                      placeholder="Usuário"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <PersonOutline className={classes.colorIcon} />
                          </InputAdornment>
                        )
                      }}
                    />
                    <div className={classes.formFieldError}>
                      {props.errors.username}
                    </div>
                  </Grid>
                </Grid>
                <Grid container direction="row" justifyContent="center">
                  <Grid item xs={8} className="t-field-text">
                    <TextField
                      className="t-field-text"
                      name="password"
                      onChange={props.handleChange}
                      variant="outlined"
                      type="password"
                      placeholder="Senha"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <LockOpen className={classes.colorIcon} />
                          </InputAdornment>
                        ),
                        className: "t-field-text__input",
                      }}
                    />
                    <div className={classes.formFieldError}>
                      {props.errors.password}
                    </div>
                  </Grid>
                </Grid>
                {
                  !isValid ? <Grid
                    className={`${classes.boxError} ${classes.textCenter}`}
                    item
                    md={12}
                    sm={12}
                  >
                    <div>
                      {!isValid ? "Usuário ou senha inválido" : ""}
                    </div>
                  </Grid> : null
                }
                <Grid
                  container
                  direction="row"
                  alignItems="center"
                  justifyContent="center"
                >


                  <Grid item xs={8}>
                    <ButtonPurple
                      className={"t-button-primary"}
                      onClick={props.handleSubmit}
                      type="submit"
                      title="Entrar"
                    />
                  </Grid>
                </Grid>
                <Grid container direction="row">
                  <Grid
                    className={`${classes.resetPassword} ${classes.textCenter}`}
                    item
                    md={12}
                    sm={12}
                  >
                    Esqueceu sua senha?
                    <Link className={classes.link} to="#">
                      clique aqui
                    </Link>
                  </Grid>
                </Grid>
              </Form>
            );
          }}
        </Formik>
      </Grid>

    </Grid>
  );
};

Login.propTypes = {
  username: PropTypes.string,
  password: PropTypes.string
};

export default Login;
