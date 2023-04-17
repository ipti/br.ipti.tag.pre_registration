import DateFnsUtils from "@date-io/date-fns";
import {
  Checkbox,
  FormControl, FormControlLabel, FormGroup, FormLabel
} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import {
  createMuiTheme, makeStyles
} from "@material-ui/core/styles";
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import {
  MuiPickersUtilsProvider
} from "@material-ui/pickers";
import brLocale from "date-fns/locale/pt-BR";
import { Form, Formik } from "formik";
import PropTypes from "prop-types";
import React from "react";
import Select from 'react-select';
import { ButtonPurple } from "../../components/Buttons";
import Loading from "../../components/Loading/CircularLoadingButtomActions";
import { TitleWithLine } from "../../components/Titles";
import styleBase from "../../styles";
import styles from "./styles";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { useState } from "react";

const useStyles = makeStyles(theme => styles);

const theme = createMuiTheme({
  palette: {
    primary: {
      main: styleBase.colors.purple
    }
  }
});

const customStyles = {
  control: base => ({
    ...base,
    height: "60px",

    minHeight: "60px",
    fontFamily: "Roboto, Helvetica, Arial, sans-serif"
  }),
  menu: base => ({
    ...base,
    fontFamily: "Roboto, Helvetica, Arial, sans-serif"
  })
};

const Create = props => {
  const classes = useStyles();
  const {
    allSchool,
    setAllSchool,
    handleSubmit,
    validationSchema,
    isEdit,
    loadingIcon,
    stages
  } = props;






  const initialValues = {
    edcenso_stage_vs_modality: stages[39].id,
    vacancy: "",
    year: "",
    school_identificationArray: "",
  };
  return (
    <>
      <Grid container direction="row">
        <Grid
          className={classes.boxTitlePagination}
          item
          md={12}
          sm={12}
          xs={12}
        >
          <h1 className={`${classes.title} ${classes.floatLeft}`}>
            {`Adicionar Turma`}
          </h1>

        </Grid>
      </Grid>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        // validationSchema={validationSchema}
        validateOnChange={false}
        enableReinitialize
      >
        {props => {


          return (
            <Form>
              <MuiPickersUtilsProvider locale={brLocale} utils={DateFnsUtils}>
                <Grid item md={12} sm={12}>
                  <Grid
                    container
                    direction="row"
                    alignItems="center"
                    spacing={2}
                  >
                    <Grid item md={12} sm={12}>
                      <TitleWithLine title="Vagas" />
                    </Grid>
                    <Grid item md={5} sm={5}>
                      <FormControl
                        component="fieldset"
                        className={classes.formControl}
                      >
                        <FormLabel>Nome</FormLabel>
                        <TextField
                          name="vacancy"
                          value={props.values.vacancy}
                          onChange={props.handleChange}
                          id="outlined-size-small"
                          variant="outlined"
                          required
                          className={classes.textField}
                        />
                        <div className={classes.formFieldError}>
                          {props.errors.vacancy}
                        </div>
                      </FormControl>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item md={12} sm={12}>
                  <Grid
                    container
                    direction="column"
                    //alignItems="center"
                    spacing={2}
                  >
                    <Grid item md={5} sm={5}>
                      <FormControl
                        component="fieldset"
                        className={classes.formControl}
                      >
                        <FormLabel>Horário Inicial *</FormLabel>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DemoContainer
                            components={['MobileTimePicker', 'MobileTimePicker', 'MobileTimePicker']}
                            sx={{ minWidth: 210 }}
                          >
                            <MobileTimePicker
                              label={'"Hora", "Minutos"'}
                              views={['hours', 'minutes']}
                              onChange={e => { setInitial_hour(e.$H); setInitial_min(e.$M) }}
                            />

                          </DemoContainer>

                        </LocalizationProvider>


                        <div className={classes.formFieldError}>
                          {props.errors.year}
                        </div>
                      </FormControl>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item md={12} sm={12}>
                  <Grid
                    container
                    direction="column"
                    //alignItems="center"
                    spacing={2}
                  >
                    <Grid item md={5} sm={5}>
                      <FormControl
                        component="fieldset"
                        className={classes.formControl}
                      >
                        <FormLabel>Horário final *</FormLabel>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DemoContainer
                            components={['MobileTimePicker', 'MobileTimePicker', 'MobileTimePicker']}
                            sx={{ minWidth: 210 }}
                          >
                            <MobileTimePicker
                              label={'"Hora", "Minutos"'}
                              views={['hours', 'minutes']}
                              onChange={e => { setFinal_hour(e.$H); setFinal_min(e.$m) }}
                            />

                          </DemoContainer>

                        </LocalizationProvider>


                        <div className={classes.formFieldError}>
                          {props.errors.year}
                        </div>
                      </FormControl>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid
                  className={classes.marginButtom}
                  container
                  direction="column"
                  spacing={2}
                >
                  <FormLabel>Dias da Semana *</FormLabel>
                  <Grid item md={5} sm={5}>
                    <FormGroup>
                      <FormControlLabel
                        // disabled={cegueiraDisabled}
                        control={
                          <Checkbox
                          // checked={values.deficiency_type_blindness}
                          // onChange={handleChange}
                          />}
                        name='deficiency_type_blindness'
                        label="Segunda-Feira"
                      />
                    </ FormGroup>
                  </Grid>
                  <Grid item md={5} sm={5}>
                    <FormGroup>
                      <FormControlLabel
                        // disabled={cegueiraDisabled}
                        control={
                          <Checkbox
                          // checked={values.deficiency_type_blindness}
                          // onChange={handleChange}
                          />}
                        name='deficiency_type_blindness'
                        label="Terça-Feira"
                      />
                    </ FormGroup>
                  </Grid>
                  <Grid item md={5} sm={5}>
                    <FormGroup>
                      <FormControlLabel
                        // disabled={cegueiraDisabled}
                        control={
                          <Checkbox
                          // checked={values.deficiency_type_blindness}
                          // onChange={handleChange}
                          />}
                        name='deficiency_type_blindness'
                        label="Quarta-Feira"
                      />
                    </ FormGroup>
                  </Grid>
                  <Grid item md={5} sm={5}>
                    <FormGroup>
                      <FormControlLabel
                        // disabled={cegueiraDisabled}
                        control={
                          <Checkbox
                          // checked={values.deficiency_type_blindness}
                          // onChange={handleChange}
                          />}
                        name='deficiency_type_blindness'
                        label="Quinta-Feira"
                      />
                    </ FormGroup>
                  </Grid>
                  <Grid item md={5} sm={5}>
                    <FormGroup>
                      <FormControlLabel
                        // disabled={cegueiraDisabled}
                        control={
                          <Checkbox
                          // checked={values.deficiency_type_blindness}
                          // onChange={handleChange}
                          />}
                        name='deficiency_type_blindness'
                        label="Sexta-Feira"
                      />
                    </ FormGroup>
                  </Grid>
                  <Grid item md={5} sm={5}>
                    <FormGroup>
                      <FormControlLabel
                        // disabled={cegueiraDisabled}
                        control={
                          <Checkbox
                          // checked={values.deficiency_type_blindness}
                          // onChange={handleChange}
                          />}
                        name='deficiency_type_blindness'
                        label="Sábado"
                      />
                    </ FormGroup>
                  </Grid>
                  <Grid item md={5} sm={5}>
                    <FormGroup>
                      <FormControlLabel
                        // disabled={cegueiraDisabled}
                        control={
                          <Checkbox
                          // checked={values.deficiency_type_blindness}
                          // onChange={handleChange}
                          />}
                        name='deficiency_type_blindness'
                        label="Domingo"
                      />
                    </ FormGroup>
                  </Grid>
                </Grid>
                <Grid
                  className={classes.marginButtom}
                  container
                  direction="row"
                >
                  <Grid item md={2} sm={2}>
                    {!loadingIcon ? (
                      <ButtonPurple
                        onClick={props.handleSubmit}
                        type="submit"
                        title={isEdit ? "Editar" : "Salvar"}
                      />
                    ) : (
                      <Loading />
                    )}
                  </Grid>
                </Grid>
              </MuiPickersUtilsProvider>
            </Form >
          );
        }}
      </Formik >
    </>
  );
};

Create.propTypes = {
  year: PropTypes.string
};

export default Create;
