import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import styles from "../../styles";
import { Link } from "react-router-dom";
const useStyles = makeStyles(styles);

const BoxStudents = ({student, student_identification}) => {
    const classes = useStyles();
    
    const filterStudent = student_identification.filter(x => x.id === student.id);
    return(
        <Grid 
                className={`${classes.contentBox}`}
                container
                direction="row"
                justifyContent="center"
                alignItems="center">
                  {filterStudent[0].name},  
                  <Link to={`/matricula/${filterStudent[0].id}`}> clique aqui</Link>
              </Grid>
    )
}

export default BoxStudents;