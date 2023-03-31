import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import styles from "./styles";
const useStyles = makeStyles(styles);

const BoxDiscriptionClassroom = props => {
  const { title, registrationConfirmed } = props;
  const classes = useStyles();
  return (
    <div
      className={`${classes.boxDescriptionCalssroom} ${classes.floatLeft} ${
        registrationConfirmed ? classes.marginBox : ""
      } `}
    >
      {title}
    </div>
  );
};

export default BoxDiscriptionClassroom;
