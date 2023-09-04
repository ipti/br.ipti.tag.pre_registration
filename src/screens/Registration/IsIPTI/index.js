import React, { useContext } from "react";

// Material UI
import Grid from "@material-ui/core/Grid";

// Components
import InitForm from "./InitForm/InitForm";
import { RegistrationContext } from "../../../context/Registration/context";
import Projects from "./Projects/Projects";
import Classroom from "./Classroom/Classroom";
import StepOne from "./StepOne/StepOne";
import StepTwo from "./StepTwo/StepTwo";


const IsIPTI = () => {

  const { step } = useContext(RegistrationContext);

  console.log(step)
  return (
    <Grid item xs={12}>
      {step === 0 ? <InitForm /> :
        step === 1 ? <Projects /> :
          step === 2 ? <Classroom /> :
            step === 3 ? <StepOne /> :
              step === 4 ? <StepTwo /> : null}
    </Grid>
  );

}



export default IsIPTI;
