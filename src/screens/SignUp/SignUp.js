import { useMediaQuery } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { Link } from "react-router-dom";
import Tagna from "../../assets/images/ÍviaNotebook.svg";
import styles from "./styles";

const useStyles = makeStyles(styles);

const SignUp = () => {
    const classes = useStyles();
    return (
        <div className="row align-items--center">
            <div className={classes.contentLeft}>
                <div className={`row ${classes.box}`} >
                    <div className={classes.divBlue} />
                    <div className={classes.divImage}>
                        <img className={classes.imgTagna} src={Tagna} alt="" />
                    </div>
                    <div
                        className={classes.formSignUp}
                    >
                        <div className={classes.textTitle}>
                            <div>
                                Bem-Vindo
                            </div>
                            <div>
                                ao Matrícula Online
                            </div>

                            <div className={classes.boxRegister}>
                                <div>
                                    <Link className={classes.linkRegister} to="/matricula">
                                        Iniciar Matrícula
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div
                            className={`${classes.resetPassword} ${classes.textCenter}`}
                        >
                            Faça o seu Login
                            <Link className={classes.link} to="/login">
                                clique aqui
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default SignUp;