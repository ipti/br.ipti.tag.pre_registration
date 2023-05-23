import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import styles from "./styles";
import Tagna from "../../assets/images/ÍviaNotebook.svg"
import { Link } from "react-router-dom";

const useStyles = makeStyles(styles);

const SignUp = () => {
    const classes = useStyles();
    return (
        <div className="row align-items--center">
            <div className={classes.contentLeft}>
                <div className="row" style={{ background: "linear-gradient(0deg, #3F45EA, #3F45EA)", width: "100%", opacity: 0.94, height: "auto" }}>

                    <div className={classes.divImage}>
                        <img className={classes.imgTagna} src={Tagna} alt="" />
                    </div>
                    <div
                        className={classes.formSignUp}
                    >
                        <div>
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
                {/* <div className={classes.boxLeft}>
                    
                    
                </div>
                <div style={{ background: "linear-gradient(0deg, #3F45EA, #3F45EA)", width: "100%", opacity: 0.94, height: "auto" }}>
                </div> */}
            </div>
        </div>

    )
}

export default SignUp;