import React from "react";

// Material UI
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

// Components
import { BoxStatus } from "../../components/Boxes";
import { ButtonLinePurple, ButtonPurple } from "../../components/Buttons";
import Loading from "../../components/Loading/CircularLoadingButtomActions";
import { TitleWithLine } from "../../components/Titles";

// Assets
import IconClassroom from "../../assets/images/classroom-icon.png";
import IconHouse from "../../assets/images/house-icon.png";
import IconMale from "../../assets/images/male-icon.png";
import IconStudent from "../../assets/images/student-male-icon.png";

// Styles
import styles from "./styles";
import { ArrowBack } from "@material-ui/icons";
import { useHistory } from "react-router";
import { TextField } from "@material-ui/core";

const useStyles = makeStyles(styles);

const Home = props => {
  const classes = useStyles();

  const {
    registration,
    handleSubmit,
    answer
  } = props;
  const student = registration ?? [];

  console.log(student)

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
  } : { student_fk: student.student_fk };



  return (
    <>
      <ArrowBack onClick={() => { history.goBack() }} style={{ cursor: "pointer" }} />
      <h1>{student && student.classroom.name}</h1>
      <Grid className={classes.boxTitlePagination} container direction="row">
        <h1>Matrículas</h1>

      </Grid>
      <h2> Dados básicos </h2>
      <Grid container direction="row" spacing={2}>
        <Grid item md={6}>
          <p className={classes.label}>Name</p>
          <TextField className={classes.inputStudent} value={studentName} variant="outlined" disabled />
        </Grid>
        <Grid item md={6}>
          <p className={classes.label}>Sexo</p>
          <TextField className={classes.inputStudent} value={student?.sex === 1 ? 'Maculino' : student?.sex === 2 ? 'Femenino' : ''} variant="outlined" disabled />
        </Grid>
        <Grid item md={6}>
          <p className={classes.label}>Data de Nascimento</p>
          <TextField className={classes.inputStudent} value={studentBirthday} variant="outlined" disabled />
        </Grid>
        <Grid item md={6}>
          <p className={classes.label}>Cor/Raça</p>
          <TextField className={classes.inputStudent} value={color_race} variant="outlined" disabled />
        </Grid>
        <Grid item md={6}>
          <p className={classes.label}>CPF</p>
          <TextField className={classes.inputStudent} value={cpf ? cpf : "Sem cpf"} variant="outlined" disabled />
        </Grid>
        {/* <Grid item md={4}>
          <BoxStatus title={student.student_fk ? "Transferência" : "Novo Aluno"} />
        </Grid>
         */}


        <Grid item md={6}>
          <p className={classes.label}>Possui Deficiência</p>
          <TextField className={classes.inputStudent} value={deficiency} variant="outlined" disabled />
        </Grid>
      </Grid>
      <h2> Dados do Responsável </h2>
      <Grid container direction="row" spacing={2}>
        <Grid item md={6}>
          <div className={classes.floatLeft}>
            <p className={classes.label}>Responsável</p>
            <TextField className={classes.inputStudent} value={responsableName} variant="outlined" disabled />
          </div>
        </Grid>
        <Grid item md={6}>
          <p className={classes.label}>CPF</p>
          <TextField className={classes.inputStudent} value={responsableCpf} variant="outlined" disabled />
        </Grid>
        <Grid item md={3}>
          <p className={classes.label}>Telefone</p>
          {student?.responsable_telephone}
        </Grid>
        <Grid item md={12}>
          <div className={classes.lineGrayClean}></div>
        </Grid>
      </Grid>
      <Grid container direction="row" spacing={3}>
        <Grid item md={5}>
          <img
            className={`${classes.floatLeft} ${classes.iconHouse}`}
            src={IconHouse}
            alt="Icone de Endereço"
          />
          <div className={classes.floatLeft}>
            <p className={classes.label}>Endereço</p>
            {address}
          </div>
        </Grid>
        <Grid item md={4}>
          <p className={classes.label}>Bairro</p>
          {neighborhood}
        </Grid>

        <Grid item md={3}>
          <p className={classes.label}>Número</p>
          {number}
        </Grid>
        <Grid item md={3}>
          <p className={classes.label}>Complemento</p>
          {complement}
        </Grid>
        <Grid item md={3}>
          <p className={classes.label}>CEP</p>
          {cep}
        </Grid>
        <Grid item md={3}>
          <p className={classes.label}>Cidade</p>
          {city}
        </Grid>
        <Grid item md={3}>
          <p className={classes.label}>Estado</p>
          {state}
        </Grid>
        <Grid item md={2}>
          <BoxStatus title={student?.zone === 2 ? "Urbana" : student?.zone === 1 ? "Rural" : ''} />
        </Grid>
        <Grid item md={12}>
          <div className={classes.lineGrayClean}></div>
        </Grid>
      </Grid>
      <Grid container direction="row" spacing={3}>
        <Grid item md={5}>
          <img
            className={`${classes.floatLeft} ${classes.iconClassroom}`}
            src={IconClassroom}
            alt="Icone de Turma"
          />
          <p className={classes.label}>Turma</p>
          {student?.classroom?.name}
          {/* <FormControl
            component="fieldset"
            className={classes.formControl}
          >
            <FormLabel>Turma *</FormLabel>
            <Select
              styles={customStyles}
              className="basic-single"
              classNamePrefix="select"
              placeholder="Selecione a Turma"
              // options={data.classroom}
              // onChange={selectedOption => {
              //   handleChange(selectedOption.id);
              //   setSchoolInepFk(selectedOption.school_inep_fk)
              //   setInepId(selectedOption.inep_id)
              // }}
              // getOptionValue={opt => opt.classroom}
              // getOptionLabel={opt => opt.name}
            />
          </FormControl> */}
        </Grid>
        {/* <Grid item md={3}>
          <p className={classes.label}>Modalidade</p>
          {modality}
        </Grid>
        <Grid item md={4}>
          <p className={classes.label}>Turno</p>
          Manhã
        </Grid> */}
      </Grid>
      {answer ? <> {answer.length > 0 ? <>
        <Grid item md={12}>
          <div className={classes.lineGrayClean}></div>
        </Grid>
        <Grid container direction="row" spacing={3}>
          <Grid item md={5}>
            <img
              className={`${classes.floatLeft} ${classes.iconHouse}`}
              src={IconClassroom}
              alt="Icone de Endereço"
            />
            <div className={classes.floatLeft}>
              <p className={classes.label}>Formulario</p>
            </div>
          </Grid>
          {answer.map((item, index) => {
            return (
              <Grid item md={12} key={index}>
                <p className={classes.label}>{item.description}</p>
                {item.value}
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
                onClick={() => handleSubmit(body)}
                type="button"
                title="Confirmar Matricula"
              />
            </Grid> : <Grid item md={3}>
              <ButtonLinePurple
                type="button"
                title="Já Matriculado"
              />
            </Grid>}
            {/* <Grid item md={3}>
              <ButtonLinePurple
                onClick={() => handleRefusePreIdentification(false)}
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
    </>
  );
};

export default Home;
