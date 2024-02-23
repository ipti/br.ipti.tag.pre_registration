import React from "react";

// Material UI
import Grid from "@material-ui/core/Grid";

// Components
import { useContext } from "react";
import { RegistrationContext } from "../../containers/Registration/Context/context";
import Classroom from "./ClassRoom";
import Finish from "./Finish";
import Quiz from "./Quiz";
import Start from "./Start";
import StepFour from "./StepFour";
import StepOne from "./StepOne";
import StepSix from "./StepSix";
import StepThree from "./StepThree";
import ChoiceYear from "./ChoiceYear";


const Wizard = props => {

  const nextStep = step => {
    props.next(step);
  };

  const { isOfLegalAge } = useContext(RegistrationContext);
  
  const componentMapping = {
    "0": ChoiceYear,
    "1": Start,
    "2": Classroom,
    "3": StepOne,
    "4": StepThree,
    "5": isOfLegalAge === '1' ? StepFour : StepSix,
    "6": Quiz,
    "7": Finish
  };

  const StepComponent = componentMapping[props.step];


  return (
    <Grid item xs={12}>
      <StepComponent {...props} nextStep={nextStep} />
    </Grid>
  );

}



export default Wizard;
