import React from "react";

// Material UI
import Grid from "@material-ui/core/Grid";
import Alert from "@material-ui/lab/Alert";

// Third party

import {
  makeStyles
} from "@material-ui/core/styles";

// Components
import { BoxRegistration } from "../../components/Boxes";
import List from "../../components/List";

// Styles
import { TextField } from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";
import { useState } from "react";
import { useHistory } from "react-router";

import styles from "./styles";

const useStyles = makeStyles(theme => styles);

const Create = props => {
  const [open, ] = useState(false)
  const {
    data,
    baseLink,
    PutClassRooms
  } = props;
  const [nameClassroom, setNameClassroom] = useState(data && data.name)
  const classes = useStyles();

  const history = useHistory()



  const registrations = () => {
    const registrationList = data?.student_pre_identification ?? [];


    return registrationList.map((registration, index) => {
      return (
        <BoxRegistration
          link={`${baseLink}/${registration?.id}`}
          key={index}
          name={registration?.name}
          sex={registration?.sex}
          id={registration?.id}
          student_fk={registration?.student_fk}
          md={4}
          sm={4}
          unavailable={registration?.unavailable}
        />
      );
    });
  };

  console.log(data)

  return (
    <>
      <ArrowBack onClick={() => { history.goBack() }} style={{ cursor: "pointer" }} />
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
        {!open ? <h1 style={{ margin: 0, padding: 0 }}>{data && data.name}</h1> :
          <TextField
            name="name"
            value={nameClassroom}
            onChange={(e) => setNameClassroom(e.target.value)}
            id="outlined-size-small"
            variant="outlined"
            onBlur={() => PutClassRooms(data.id, {name: nameClassroom})}
            required
            className={classes.textField}
          />
        }
        {/* <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <Edit style={{ cursor: "pointer" }} onClick={() => setOpen(!open)} />
        </div> */}
      </div>
      <h3>Candidatos</h3>
      <Grid container direction="row" spacing={4}>
        <List items={registrations()}>
          <Grid item xs={12}>
            <Alert variant="outlined" severity="warning">
              A turma não possui matrículas
            </Alert>
          </Grid>
        </List>
      </Grid>
    </>
  );
};

export default Create;
