
import { makeStyles } from "@material-ui/core/styles";

import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import Grid from "@material-ui/core/Grid";
import { Clear } from "@material-ui/icons";
import swal from "@sweetalert/with-react";
import IconActive from "../../assets/images/activeRegistration.svg";
import IconNotActive from "../../assets/images/notactiveRegistration.svg";
import { ControllerClassroomForm } from "../../controller/classroom/ClassroomForm";
import styles from "./styles";

const useStyles = makeStyles(styles);

const BoxRegistration = props => {
  const { name, link, unavailable, sex, md, sm, xs, student_fk, id } = props;


  const { requestDeletePreRegistrationMutation } = ControllerClassroomForm();

  const classes = useStyles();
  const history = useHistory();

  const toLink = (e) => {

    history.push(link)


    history.push(link)

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
      <Grid onClick={toLink} className={`${classes.boxStudentConfirmation}`}>
        <div className={`${classes.floatLeft} ${classes.nameStudent}`}>
          <span className={classes.subtitleStudent}>Aluno - {student_fk ? "Rematricula" : "Matricula"}</span>
          <Clear onClick={e => deletePreRegistration(e, id)} style={{ cursor: 'pointer' }} />
        </div>
        <div className={classes.iconStudent}>
          <img src={unavailable ? IconActive : IconNotActive} alt="Icone de aluno" />
          <div title={name} style={{margin: "auto 10px"}} className={`${classes.title}`}>
            {name}
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default BoxRegistration;
