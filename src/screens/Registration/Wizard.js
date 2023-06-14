import React from "react";

// Material UI
import Grid from "@material-ui/core/Grid";

// Components
import Classroom from "./ClassRoom";
import Finish from "./Finish";
import Start from "./Start";
import StepFour from "./StepFour";
import StepOne from "./StepOne";
import StepSix from "./StepSix";
import StepThree from "./StepThree";
import { ArrowBack } from "@material-ui/icons";
import { RegistrationContext } from "../../containers/Registration/Context/context";
import { useContext } from "react";
import Quiz from "./Quiz";
import { ButtonLinePurple } from "../../components/Buttons";
import { makeStyles } from "@material-ui/core/styles";
import styles from "./styles";

const useStyles = makeStyles(styles);
const Wizard = props => {
  const classes = useStyles();

  const nextStep = step => {
    props.next(step);
  };

  const { isOfLegalAge } = useContext(RegistrationContext);
  const componentMapping = {
    "0": Start,
    "1": Classroom,
    "2": StepOne,
    "3": StepThree,
    "4": isOfLegalAge === '1' ? StepFour : StepSix,
    "5": Quiz,
    "6": Finish
  };

  const StepComponent = componentMapping[props.step];




  return (
    <Grid item xs={12}>
      {/* {props.step === 6 ? null : <ArrowBack onClick={props.backStep} fontSize="large" style={{cursor: 'pointer', marginTop: '20px'}}/> } */}
      <StepComponent {...props} nextStep={nextStep} />
      <Grid className={classes.marginLeftButton} item xs={4}>
        <ButtonLinePurple
          onClick={() => props.next(3)}
          type="button"
          title="Voltar"
          className="t-button-primary"
        />
      </Grid>
    </Grid>
  );

}



export default Wizard;
