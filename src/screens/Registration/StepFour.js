import React, { useContext, useState } from "react";


// Material UI
import {
  FormControl, FormControlLabel, FormHelperText, FormLabel, Grid, Radio, RadioGroup, TextField
} from "@material-ui/core";

import { makeStyles, withStyles } from "@material-ui/core/styles";

// Components
import { ButtonPurple } from "../../components/Buttons";

// Third party
import { Form, Formik } from "formik";
import MaskedInput from "react-text-mask";
import * as Yup from "yup";

// Styles
import styles from "./styles";

import BoxStudents from "../../components/Boxes/BoxStudents";
import { RegistrationContext } from "../../containers/Registration/Context/context";
import styleBase from "../../styles";

const useStyles = makeStyles(styles);

const PurpleRadio = withStyles({
  root: {
    "&$checked": {
      color: styleBase.colors.purple
    }
  },
  checked: {}
})(props => <Radio color="default" {...props} />);

const TextMaskFone = props => {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={ref => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={["(", /[1-9]/, /\d/, ")", " ", /\d/, /\d/, /\d/, /\d/, /\d/, "-", /\d/, /\d/, /\d/, /\d/]}
      placeholderChar={"\u2000"}
      showMask
    />
  );
};

const TextMaskDate = props => {
  const { inputRef, ...others } = props;


  return (
    <MaskedInput
      {...others}
      ref={ref => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={[/\d/, /\d/, "/", /\d/, /\d/, "/", /\d/, /\d/, /\d/, /\d/]}
      placeholderChar={"_"}
      showMask
    />
  );
};

const TextMaskCpf = props => {
  const { inputRef, ...others } = props;

  return (
    <MaskedInput
      {...others}
      ref={ref => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={[/\d/, /\d/, /\d/, ".", /\d/, /\d/, /\d/, ".", /\d/, /\d/, /\d/, "-", /\d/, /\d/]}
      placeholderChar={"_"}
      showMask
    />
  );
};

const StepFour = props => {
  const classes = useStyles();
  const { school } = useContext(RegistrationContext)
  const [student, setStudent] = useState([])
  const [studentResponsable, setStudentResponsable] = useState([])

  const validationSchema = Yup.object().shape({
    responsable_name: Yup.string().required("Campo obrigatório!"),
    responsable_cpf: Yup.string().required("Campo obrigatório!"),
    responsable_telephone: Yup.string().required("Campo obrigatório!"),
    birthday: Yup.string().required("Campo obrigatório!"),
    sex: Yup.number().required("Campo obrigatório!"),
    zone: Yup.number().required("Campo obrigatório!"),
  });


  const initialValues = {
    birthday: props?.values?.birthday ?? '',
    sex: props?.values?.sex ?? '',
    responsable_name: props?.values?.responsable_name ?? '',
    responsable_telephone: props?.values?.responsable_telephone ?? "",
    responsable_cpf: props?.values?.responsable_cpf ?? '',
    zone: props?.values?.zone ?? '',
    cpf: props?.values?.cpf ?? ''
  };

  const Isverify = (e) => {
    var cpf = e.target.value.replace(/\D/g, '');
    var isValid = school.student_documents_and_address.filter(x => cpf === x.cpf);

    console.log(isValid)
    if (isValid.length !== 0) {
      setStudent(isValid);
    }
  }

  const Isverifyresponsable = (e) => {
    var cpf = e.target.value.replace(/\D/g, '');
    var isValid = school.student_documents_and_address.filter(x => cpf === x.cpf);

    console.log(isValid)
    if (isValid.length !== 0) {
      setStudentResponsable(isValid);
    }
  }
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={values => props.next(5, values)}
        validationSchema={validationSchema}
        validateOnChange={false}
        enableReinitialize
      >
        {({ errors, values, touched, handleChange, handleSubmit }) => {

          const errorList = {
            responsable_name: touched.responsable_name && errors.responsable_name,
            responsable_cpf: touched.responsable_cpf && errors.responsable_cpf,
            responsable_telephone: touched.responsable_telephone && errors.responsable_telephone,
            birthday: touched.birthday && errors.birthday,
            sex: touched.sex && errors.sex,
            zone: touched.zone && errors.zone,
          };

          return (
            <Form>
              <Grid
                className={`${classes.contentMain}`}
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <Grid item xs={12}>
                  <FormControl
                    component="fieldset"
                    className={classes.formControl}
                  >
                    <FormLabel>Nº do CPF</FormLabel>
                    <TextField
                      name="cpf"
                      variant="outlined"
                      InputProps={{
                        inputComponent: TextMaskCpf,
                        value: values.cpf,
                        onChange: handleChange
                      }}
                      onBlur={(e) => Isverify(e)}
                      className={classes.textField}
                      autoComplete="off"

                    />
                  </FormControl>
                </Grid>
              </Grid>
              {student.length !== 0 ?
                <Grid
                  className={`${classes.contentMain}`}
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="start">
                  Já temos um cadastro com esse CPF,
                  {student.map((student, i) => {
                    return (
                      <BoxStudents student={student} student_identification={school.student_identification} />
                    )
                  })}
                </Grid> : null}
              <Grid
                className={`${classes.contentMain}`}
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <Grid item xs={12}>
                  <FormControl
                    component="fieldset"
                    className={classes.formControl}
                    error={!!errorList.birthday}
                  >
                    <FormLabel>Nascimento *</FormLabel>
                    <TextField
                      name="birthday"
                      variant="outlined"
                      className={classes.textField}
                      InputProps={{
                        inputComponent: TextMaskDate,
                        value: values.birthday,
                        onChange: handleChange
                      }}
                      error={!!errorList.birthday}
                    />
                    <FormHelperText>{errorList.birthday}</FormHelperText>
                  </FormControl>
                </Grid>
              </Grid>
              <Grid
                className={`${classes.contentMain}`}
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <Grid item xs={12}>
                  <FormControl
                    component="fieldset"
                    className={classes.formControl}
                    error={errorList.sex}
                  >
                    <FormLabel component="legend">Sexo *</FormLabel>
                    <RadioGroup
                      value={values.sex}
                      name="sex"
                      onChange={handleChange}
                      row
                    >
                      <FormControlLabel
                        value={'2'}
                        name="sex"
                        control={<PurpleRadio />}
                        label="Feminino"
                      />
                      <FormControlLabel
                        value={'1'}
                        name="sex"
                        control={<PurpleRadio />}
                        label="Masculino"
                      />
                    </RadioGroup>
                    <FormHelperText>{errorList.sex}</FormHelperText>
                  </FormControl>
                </Grid>
              </Grid>
              <Grid
                className={`${classes.contentMain}`}
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <Grid item xs={12}>
                  <FormControl
                    component="fieldset"
                    className={classes.formControl}
                    error={errorList.responsable_cpf}
                  >
                    <FormLabel>Nº do CPF do Responsável *</FormLabel>
                    <TextField
                      name="responsable_cpf"
                      variant="outlined"
                      InputProps={{
                        inputComponent: TextMaskCpf,
                        value: values.responsable_cpf,
                        onChange: handleChange
                      }}
                      onBlur={(e) => Isverifyresponsable(e)}
                      className={classes.textField}
                      error={errorList.responsable_cpf}
                      autoComplete="off"
                    />
                    <FormHelperText>{errorList.responsable_cpf}</FormHelperText>
                  </FormControl>
                </Grid>
              </Grid>
              {studentResponsable.length !== 0 ?
                <Grid
                  className={`${classes.contentMain}`}
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="start">
                  Encontramos cadastros com esse CPF, é algum desse?
                  {studentResponsable.map((student, i) => {
                    return (
                      <BoxStudents student={student} student_identification={school.student_identification} />
                    )
                  })}

                </Grid> : null}
              <Grid
                className={`${classes.contentMain}`}
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <Grid item xs={12}>
                  <FormControl
                    component="fieldset"
                    className={classes.formControl}
                    error={errorList.responsable_name}
                  >
                    <FormLabel>Nome Completo do Responsável *</FormLabel>
                    <TextField
                      name="responsable_name"
                      value={values.responsable_name}
                      onChange={handleChange}
                      variant="outlined"
                      className={classes.textField}
                      error={errorList.responsable_name}
                    />
                    <FormHelperText>{errorList.responsable_name}</FormHelperText>
                  </FormControl>
                </Grid>
              </Grid>
              <Grid
                className={`${classes.contentMain}`}
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <Grid item xs={12}>
                  <FormControl
                    component="fieldset"
                    className={classes.formControl}
                    error={errorList.responsable_telephone}
                  >
                    <FormLabel>Telefone *</FormLabel>
                    <TextField
                      name="responsable_telephone"
                      variant="outlined"
                      className={classes.textField}
                      InputProps={{
                        inputComponent: TextMaskFone,
                        value: values.responsable_telephone,
                        onChange: handleChange
                      }}
                      error={errorList.responsable_telephone}
                    />
                    <FormHelperText>{errorList.responsable_telephone}</FormHelperText>
                  </FormControl>
                </Grid>
              </Grid>
              <Grid
                className={`${classes.contentMain}`}
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <Grid item xs={12}>
                  <FormControl
                    component="fieldset"
                    className={classes.formControl}
                    error={errorList.zone}
                  >
                    <FormLabel component="legend">Zona *</FormLabel>
                    <RadioGroup
                      value={values.zone}
                      name="zone"
                      onChange={handleChange}
                      row
                    >
                      <FormControlLabel
                        value="2"
                        control={<PurpleRadio />}
                        label="Urbana"
                      />
                      <FormControlLabel
                        value="1"
                        control={<PurpleRadio />}
                        label="Rural"
                      />
                    </RadioGroup>
                    <FormHelperText>{errorList.zone}</FormHelperText>
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
                    onClick={handleSubmit}
                    type="submit"
                    title="Continuar"
                  />
                </Grid>
              </Grid>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default StepFour;
