import React from "react";

// Material UI
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

// Components
import { TitleWithLine } from "../../components/Titles";
import { BoxStatus } from "../../components/Boxes";
import { ButtonPurple, ButtonLinePurple } from "../../components/Buttons";
import Loading from "../../components/Loading/CircularLoadingButtomActions";
import Select from "react-select";

// Assets
import IconMale from "../../assets/images/male-icon.png";
import IconStudent from "../../assets/images/student-male-icon.png";
import IconHouse from "../../assets/images/house-icon.png";
import IconClassroom from "../../assets/images/classroom-icon.png";

// Styles
import styles from "./styles";
import { useFetchRequestClassroom } from "../../query/stage";
import { FormControl, FormLabel} from "@material-ui/core";

const useStyles = makeStyles(styles);


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

const Home = props => {
  const classes = useStyles();

  const {
    registration,
    handleSubmit, classroom, handleRefusePreIdentification
  } = props;
  const student = registration ?? [];


  const nullableField = "-------------";

  const studentName = student?.name;
  const cpf = student?.cpf;
  const color_race = student?.color_race === 0 ? 'Branca' : student?.color_race === 2 ? 'Preta' : student?.color_race === 3 ? 'Parda' : student?.color_race === 4 ? 'Amarela' : student?.color_race === 5 ? 'Indígena' : 'Não especificado';
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
  // console.log(studentEdcenso)
  const status = student?.newStudent;

  const address = student?.address ?? nullableField;
  const cep = student?.cep ?? nullableField;

  const number = student?.number ?? nullableField;
  const neighborhood = student?.neighborhood ?? nullableField;
  const complement = student?.complement === '' ? nullableField : student?.complement;

  const responsableName = student?.responsable_name ?? nullableField;
  const responsableCpf = student?.responsable_cpf ?? nullableField;


  const body = {
    classroom: student?.classroom_fk,
    year: student?.classroom.school_year
  }

  return (
    <>
      <Grid className={classes.boxTitlePagination} container direction="row">
        <TitleWithLine title="Matrícula" />
      </Grid>
      <Grid container direction="row" spacing={3}>
        <Grid item md={5}>
          <img
            className={`${classes.floatLeft} ${classes.iconStudent}`}
            src={IconStudent}
            alt="Icone de aluno"
          />
          <div className={classes.floatLeft}>
            <p className={classes.label}>Aluno</p>
            {studentName}
          </div>
        </Grid>
        <Grid item md={3}>
          <p className={classes.label}>Nascimento</p>
          {studentBirthday}
        </Grid>
        <Grid item md={4}>
          <BoxStatus title={!status ? "Transferência" : "Novo Aluno"} />
        </Grid>
        <Grid item md={3}>
          <p className={classes.label}>CPF</p>
          {cpf}
        </Grid>
        <Grid item md={3}>
          <p className={classes.label}>Cor/Raça</p>
          {color_race}
        </Grid>
        <Grid item md={3}>
          <p className={classes.label}>Sexo</p>
          {student?.sex === 1 ? 'Maculino' : student?.sex === 2 ? 'Femenino' : ''}
        </Grid>
        <Grid item md={3}>
          <p className={classes.label}>Possui Deficiência</p>
          {deficiency}
        </Grid>
        <Grid item md={12}>
          <div className={classes.lineGrayClean}></div>
        </Grid>
      </Grid>
      <Grid container direction="row" spacing={3}>
        <Grid item md={5}>
          <img
            className={`${classes.floatLeft} ${classes.iconResponsable}`}
            src={IconMale}
            alt="Icone de Responsável"
          />
          <div className={classes.floatLeft}>
            <p className={classes.label}>Responsável</p>
            {responsableName}
          </div>
        </Grid>
        <Grid item md={4}>
          <p className={classes.label}>CPF</p>
          {responsableCpf}
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
