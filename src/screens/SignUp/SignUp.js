import { Grid } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles";
import Tagna from "../../assets/images/ÍviaNotebook.svg";

const useStyles = makeStyles(styles);

const SignUp = () => {

    const classes = useStyles();

    return (
        <Grid className={classes.root} container direction="row" justifyContent="flex-end">
            <Grid className={classes.contentLeft} item xs={12}>
                <Grid className={classes.boxLeft} item sm={12} md={12} >
                    <Grid className={classes.divtagna} item sm={7} md={7}>
                        <img className={classes.imageTagna} src={Tagna} alt="" />
                    </Grid>
                    <Grid
                        className={`${classes.marginTopContentLeft} ${classes.titleBig}`}
                        container sm={5} md={5}
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
                        <Grid
                            className={`${classes.resetPassword} ${classes.textCenter}`}
                            item
                            md={12}
                            sm={12}
                        >
                            Faça o seu Login
                            <Link className={classes.link} to="/login">
                                clique aqui
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
                <div style={{ background: "linear-gradient(0deg, #3F45EA, #3F45EA)", width: "100%", opacity: 0.94, height: "auto" }}>
                </div>

            </Grid>

        </Grid>

    )
}

export default SignUp;