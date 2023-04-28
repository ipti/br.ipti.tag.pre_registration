import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link, useHistory } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import IconMale from "../../assets/images/student-male-icon.png";
import IconWoman from "../../assets/images/student-woman-icon.png";
import styles from "./styles";
import { Clear } from "@material-ui/icons";
import { Controller } from "../../controller/classroom";
import swal from "@sweetalert/with-react";

const useStyles = makeStyles(styles);

const BoxRegistration = props => {
  const { name, link, unavailable, sex, md, sm, xs, student_fk, id } = props;
  const [isClick, setIsClick] = useState(true)
  const { requestDeletePreRegistrationMutation } = Controller();
  const classes = useStyles();
  const history = useHistory();

  const toLink = (e) => {
    if (isClick) {
      history.push(link)
    }
  }

  const deletePreRegistration = (e, id) => {
    e.stopPropagation() 
    if (id) {
      return swal({
        title: "Excluir pré matricula?",
        text: "Essa ação é irreversível não pode ser desfeita",
        icon: "warning",
        buttons: true,
        confirm: true,
      })
        .then((willDelete) => {
          if (willDelete) {
            requestDeletePreRegistrationMutation.mutate(id)
          }
        });

    }
    
  }

  return (
    <Grid item md={md ? md : 4} sm={sm ? sm : 4} xs={xs ? xs : 12}>
      <Grid onClick={toLink} className={`${classes.boxStudentConfirmation} ${classes.floatLeft}`}>
        <div className={classes.iconStudent}>
          <img src={sex === "1" ? IconMale : IconWoman} alt="Icone de aluno" />
          <Clear onClick={e => deletePreRegistration(e, id)} style={{cursor: 'pointer'}}/>
        </div>
        <div className={`${classes.floatLeft} ${classes.nameStudent}`}>
          <div title={name} className={`${classes.truncate}`}>
            {name}
          </div>
          <span className={classes.subtitleStudent}>Aluno - </span>
          <span> {student_fk ? "Rematricula" : "Matricula"}</span>

        </div>
        {unavailable === true && (
          <span className={`${classes.confimedCicle}`}></span>
        )}
        {unavailable === false && (
          <span className={`${classes.refusedCicle}`}></span>
        )}
      </Grid>
    </Grid>
  );
};

export default BoxRegistration;
