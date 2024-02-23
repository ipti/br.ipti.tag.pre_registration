import { FormControl, FormLabel } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import Select from "react-select";
import homeImg from "../../../assets/images/Capelo.png";
import { ButtonPurple } from "../../../components/Buttons";
import { yearClassroom } from "../../../services/auth";
import queryClient from "../../../services/query";
import styles from "./../styles";
const useStyles = makeStyles(styles);

const customStyles = {
    control: base => ({
        ...base,

        height: "60px",
        minHeight: "60px",
        fontFamily: "Roboto, Helvetica, Arial, sans-serif",
        display: 'flex', flexDirection: 'row', justifyContent: "start"
    }),
    menu: base => ({
        ...base,
        width: '100%',
        fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    })
};


const ChoiceYear = props => {
    const classes = useStyles();
    const [isValid, setIsValid] = useState()


    const options = [
        { value: 2022, label: '2022' },
        { value: 2023, label: '2023' },
        { value: 2024, label: '2024' }
    ]

    return (
        <>
            <Grid
                className={classes.contentStart}
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                <Grid item xs={12}>
                    <img className={classes.imageRegistration} src={homeImg} alt="" />
                </Grid>
                <Grid item xs={12}>
                    <h1>Matrícula Online</h1>
                    <p>
                        Bem-vindo ao Matrícula online, para <br /> iniciar escolha o de referência
                    </p>
                </Grid>
                <Grid item xs={12}>
                    <FormControl
                        component="fieldset"
                        className={classes.formControl}
                    >
                        <FormLabel style={{ display: 'flex', flexDirection: 'row', justifyContent: "start" }} >Ano *</FormLabel>
                        <Select
                            styles={customStyles}
                            className="basic-single"
                            classNamePrefix="select"
                            placeholder="Escolha o ano"
                            options={options}
                            isLoading={false}
                            onChange={selectedOption => {
                                yearClassroom(selectedOption.value)
                                setIsValid(true)
                                queryClient.refetchQueries("useRequestSchoolList")
                            }}
                            getOptionValue={opt => opt.value}
                            getOptionLabel={opt => opt.label}
                        />
                    </FormControl>
                </Grid>
            </Grid>
            <Grid
                className={`${classes.marginTop} ${classes.marginButtom}`}
                justifyContent="center"
                alignItems="center"
                container
                direction="row"
            >
                <Grid item xs={6}>
                    <ButtonPurple
                        type="button"
                        onClick={() => props.next("1", {})}
                        className="t-button-primary"
                        title="Iniciar"
                        disabled={!isValid}
                    />
                </Grid>
            </Grid>
        </>
    );
};

export default ChoiceYear;
