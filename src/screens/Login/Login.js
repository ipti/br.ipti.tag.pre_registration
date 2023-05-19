import Grid from "@material-ui/core/Grid";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import LockOpen from "@material-ui/icons/LockOpen";
import PersonOutline from "@material-ui/icons/PersonOutline";
import { Form, Formik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import LoginImg from "../../assets/images/fadedlogo.svg";

import { ButtonPurple } from "../../components/Buttons";

import styles from "./styles";

const useStyles = makeStyles(styles);

const Login = props => {
  const classes = useStyles();
  let isValid = props.isValid;

  return (
    <Grid className={classes.root} container direction="row" justifyContent="flex-end">
      <Grid className={classes.contentRight} item md={12} sm={12} xs={12}>
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
                  <Grid item xs={4}>
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
                  <Grid item xs={4} className="t-field-text">
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


                  <Grid item xs={4}>
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
                    Faça a sua matricula
                    <Link className={classes.link} to="/register">
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


export default Login;
