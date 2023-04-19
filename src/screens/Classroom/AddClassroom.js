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
import {
  MuiPickersUtilsProvider
} from "@material-ui/pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import brLocale from "date-fns/locale/pt-BR";
import dayjs from "dayjs";
import { Form, Formik } from "formik";
import PropTypes from "prop-types";
import React, { useContext } from "react";
import { ButtonPurple } from "../../components/Buttons";
import Loading from "../../components/Loading/CircularLoadingButtomActions";
import { TitleWithLine } from "../../components/Titles";
import { CreateClassroomContext } from "../../containers/Stage/context/contextAddClassroom";
import styleBase from "../../styles";
import styles from "./styles";

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
    isEdit,
    loadingIcon,
    stages
  } = props;

 

  const { initialValue, setInitial_hour, setInitial_min, setFinal_hour, setFinal_min } = useContext(CreateClassroomContext)

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
        initialValues={initialValue}
        onSubmit={handleSubmit}
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
                      <TitleWithLine title="Turma" />
                    </Grid>
                    <Grid item md={5} sm={5}>
                      <FormControl
                        component="fieldset"
                        className={classes.formControl}
                      >
                        <FormLabel>Nome*</FormLabel>
                        <TextField
                          name="name"
                          value={props.values.name}
                          onChange={props.handleChange}
                          id="outlined-size-small"
                          variant="outlined"
                          required
                          className={classes.textField}
                        />
                        <div className={classes.formFieldError}>
                          {props.errors.name}
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
                              defaultValue={dayjs('2022-04-17T07:00')}
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
                        <LocalizationProvider dateAdapter={AdapterDayjs} >
                          <DemoContainer
                            components={['MobileTimePicker', 'MobileTimePicker', 'MobileTimePicker']}
                            sx={{ minWidth: 210 }}
                          >
                            <MobileTimePicker
                              label={'"Hora", "Minutos"'}
                              views={['hours', 'minutes']}
                              defaultValue={dayjs('2022-04-17T12:00')}
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
                          checked={props.values.week_days_monday}
                          onChange={props.handleChange}
                          />}
                        name='week_days_monday'
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
                          checked={props.values.week_days_tuesday}
                          onChange={props.handleChange}
                          />}
                        name='week_days_tuesday'
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
                          checked={props.values.week_days_wednesday}
                          onChange={props.handleChange}
                          />}
                        name='week_days_wednesday'
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
                          checked={props.values.week_days_thursday}
                          onChange={props.handleChange}
                          />}
                        name='week_days_thursday'
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
                          checked={props.values.week_days_friday}
                          onChange={props.handleChange}
                          />}
                        name='week_days_friday'
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
                          checked={props.values.week_days_saturday}
                          onChange={props.handleChange}
                          />}
                        name='week_days_saturday'
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
                          checked={props.values.week_days_sunday}
                          onChange={props.handleChange}
                          />}
                        name='week_days_sunday'
                        label="Domingo"
                      />
                    </ FormGroup>
                  </Grid>
                </Grid>
                <Grid
                  className={classes.marginButtom}
                  container
                  direction="row"
                  style={{marginTop: '30px'}}
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
