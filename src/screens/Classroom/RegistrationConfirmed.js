import React, { useState } from "react";

// Material UI
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

// Components
import { ButtonLinePurple, ButtonPurple } from "../../components/Buttons";
import Loading from "../../components/Loading/CircularLoadingButtomActions";

// Assets

// Styles
import { TextField } from "@material-ui/core";
import { ArrowBack, Edit } from "@material-ui/icons";
import { useHistory } from "react-router";
import { Column, Row } from "../../styles/style";
import styles from "./styles";
import { Form, Formik } from "formik";

const useStyles = makeStyles(styles);

const Home = props => {
  const classes = useStyles();

  const [edit, setEdit] = useState(true)

  const {
    registration,
    handleSubmit,
    answer
  } = props;
  const student = registration ?? [];

  const history = useHistory()

  const nullableField = "-------------";

  const studentName = student?.name;
  const cpf = student?.cpf;

  const color_race = student?.color_race === 0 ? 'Não Declarada' : student?.color_race === 1 ? 'Branca' : student?.color_race === 2 ? 'Preta' : student?.color_race === 3 ? 'Parda' : student?.color_race === 4 ? 'Amarela' : student?.color_race === 5 ? 'Indígena' : 'Não especificado';
  const deficiency = student?.deficiency ? 'sim' : 'não';

  const studentBirthday = student?.birthday
  // ? format(studentDate, "dd/MM/yyyy")
  // : "";
  var city = nullableField;
  var state = nullableField;

  if (student.edcenso_city) {
    city = student?.edcenso_city.name
  }

  if (student?.edcenso_uf) {
    state = student.edcenso_uf['name']
  }

  // const studentEdcenso = student.edcenso_city['name'];
  // const status = student?.newStudent;

  const address = student?.address ?? nullableField;
  const cep = student?.cep ?? nullableField;

  const number = student?.number ?? nullableField;
  const neighborhood = student?.neighborhood ?? nullableField;
  const complement = student?.complement === '' ? nullableField : student?.complement;

  const responsableName = student?.responsable_name ?? nullableField;
  const responsableCpf = student?.responsable_cpf ?? nullableField;

  const body = !student.student_fk ? {
    classroom: student?.classroom_fk,
    year: student?.classroom.school_year
  } : { student_fk: student.student_fk, classroom: student?.classroom_fk };


  const initialValue = {
    name: studentName ?? "",
    sex: student?.sex,
    birthday: student?.birthday,
    cpf: student?.cpf ?? "Sem CPF",
    color_race: student?.color_race,
    deficiency: student?.deficiency
  }

  console.log(edit)

  return (
    <>
      <ArrowBack onChange={() => { history.goBack() }} style={{ cursor: "pointer" }} />
      <h1>{student && student.classroom.name}</h1>
      <Grid className={classes.boxTitlePagination} container direction="row">
        <h1>Matrículas</h1>
      </Grid>
      <Column>
        <Row id="end"><Edit style={{cursor: "pointer"}} onClick={() => setEdit(!edit)} /></Row>
      </Column>
      {<Formik initialValues={initialValue}>
        {({ errors, values, touched, handleChange, handleSubmit }) => {
          return (
            <Form>
              <h2> Dados básicos </h2>
              <Grid container direction="row" spacing={2}>
                <Grid item md={6}>
                  <p className={classes.label}>Name</p>
                  <TextField className={classes.inputStudent} value={values.name} name="name" onChange={handleChange} variant="outlined" disabled={edit} />
                </Grid>
                <Grid item md={6}>
                  <p className={classes.label}>Sexo</p>
                  <TextField className={classes.inputStudent} name="sex" onChange={handleChange} value={values?.sex === 1 ? 'Maculino' : values?.sex === 2 ? 'Femenino' : ''} variant="outlined" disabled={edit} />
                </Grid>
                <Grid item md={6}>
                  <p className={classes.label}>Data de Nascimento</p>
                  <TextField className={classes.inputStudent} name="birthday" onChange={handleChange} value={values.birthday} variant="outlined" disabled={edit} />
                </Grid>
                <Grid item md={6}>
                  <p className={classes.label}>Cor/Raça</p>
                  <TextField className={classes.inputStudent} name="color_race" onChange={handleChange} value={values.color_race} variant="outlined" disabled={edit} />
                </Grid>
                <Grid item md={6}>
                  <p className={classes.label}>CPF</p>
                  <TextField className={classes.inputStudent} name="cpf" onChange={handleChange} value={values.cpf} variant="outlined" disabled={edit} />
                </Grid>
                <Grid item md={6}>
                  <p className={classes.label}>Possui Deficiência</p>
                  <TextField className={classes.inputStudent} name="deficiency" onChange={handleChange} value={values.deficiency} variant="outlined" disabled={edit} />
                </Grid>
              </Grid>
              <h2> Dados do Responsável </h2>
              <Grid container direction="row" spacing={2}>
                <Grid item md={6}>
                  <p className={classes.label}>Responsável</p>
                  <TextField className={classes.inputStudent} value={responsableName} variant="outlined" disabled={edit} />
                </Grid>
                <Grid item md={6}>
                  <p className={classes.label}>CPF</p>
                  <TextField className={classes.inputStudent} value={responsableCpf} variant="outlined" disabled={edit} />
                </Grid>
                <Grid item md={6}>
                  <p className={classes.label}>Telefone</p>
                  <TextField className={classes.inputStudent} value={student?.responsable_telephone} variant="outlined" disabled={edit} />
                </Grid>
              </Grid>
              <h2> Endereço </h2>
              <Grid container direction="row" spacing={3}>
                <Grid item md={6}>
                  <p className={classes.label}>Endereço</p>
                  <TextField className={classes.inputStudent} value={address} variant="outlined" disabled={edit} />
                </Grid>
                <Grid item md={6}>
                  <p className={classes.label}>Bairro</p>
                  <TextField className={classes.inputStudent} value={neighborhood} variant="outlined" disabled={edit} />
                </Grid>
                <Grid item md={6}>
                  <p className={classes.label}>Número</p>
                  <TextField className={classes.inputStudent} value={number} variant="outlined" disabled={edit} />
                </Grid>
                <Grid item md={6}>
                  <p className={classes.label}>Complemento</p>
                  <TextField className={classes.inputStudent} value={complement} variant="outlined" disabled={edit} />
                </Grid>
                <Grid item md={6}>
                  <p className={classes.label}>CEP</p>
                  <TextField className={classes.inputStudent} value={cep} variant="outlined" disabled={edit} />
                </Grid>
                <Grid item md={6}>
                  <p className={classes.label}>Cidade</p>
                  <TextField className={classes.inputStudent} value={city} variant="outlined" disabled={edit} />
                </Grid>
                <Grid item md={6}>
                  <p className={classes.label}>Estado</p>
                  <TextField className={classes.inputStudent} value={state} variant="outlined" disabled={edit} />
                </Grid>
                <Grid item md={6}>
                  <p className={classes.label}>Local de Moradia</p>
                  <TextField className={classes.inputStudent} value={student?.zone === 2 ? "Urbana" : student?.zone === 1 ? "Rural" : ''} variant="outlined" disabled={edit} />
                </Grid>
                <Grid item md={12}>
                  <div className={classes.lineGrayClean}></div>
                </Grid>
              </Grid>
              <Grid container direction="row" spacing={3}>
                <Grid item md={6}>
                  <p className={classes.label}>Turma</p>
                  <TextField className={classes.inputStudent} value={student?.classroom?.name} variant="outlined" />
                </Grid>
              </Grid>

              {answer ? <> {answer.length > 0 ? <>
                <Grid container direction="row" spacing={3}>
                  <Grid item md={12}>
                    <div className={classes.lineGrayClean}></div>
                  </Grid>
                  <Grid item md={5}>
                    <div className={classes.floatLeft}>
                      <h2> Formulário </h2>
                    </div>
                  </Grid>
                  {answer.map((item, index) => {
                    return (
                      <Grid item md={12} key={index}>
                        <p className={classes.label}>{item.description}</p>
                        <TextField className={classes.inputStudent} value={item.value} variant="outlined" disabled={edit} />

                      </Grid>
                    )
                  })}

                </Grid>
              </>
                : null} </> : null}
              <Grid
                className={classes.boxButtons}
                container
                direction="row"
                spacing={3}
              >
                {!props?.loadingIcon ? (
                  <>
                    {!student?.unavailable ? <Grid item md={3}>
                      <ButtonPurple
                        className="t-button-primary"
                        onChange={() => handleSubmit(body)}
                        type="button"
                        title="Confirmar Matricula"
                      />
                    </Grid> : <Grid item md={3}>
                      <ButtonLinePurple
                        type="button"
                        disabled
                        title="Já Matriculado"
                      />
                    </Grid>}
                    {/* <Grid item md={3}>
              <ButtonLinePurple
              onChange={() => handleRefusePreIdentification(false)}
              type="button"
              title="Recusar"
              />
            </Grid> */}
                  </>
                ) : (
                  <Grid item md={3}>
                    <Loading />
                  </Grid>
                )}
              </Grid>
            </Form>
          )
        }}

      </Formik>}
    </>
  );
};

export default Home;
