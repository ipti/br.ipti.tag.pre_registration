import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import styles from "./styles";
const useStyles = makeStyles(styles);

const BoxDiscriptionClassroom = props => {
  const {title, registrationConfirmed, pre_registration} = props;
  const classes = useStyles();


  return (
    <div
      className={`${classes.boxDescriptionCalssroom} ${classes.floatLeft} ${
        registrationConfirmed ? classes.marginBox : ""
      } `}
    >
      <p>Inscrições: {pre_registration.length}</p><p>{title}</p> 
    </div>
  );
};

export default BoxDiscriptionClassroom;
