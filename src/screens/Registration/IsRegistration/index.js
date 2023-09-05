import React, { useContext } from "react";

// Material UI
import Grid from "@material-ui/core/Grid";

// Components
import InitForm from "./InitForm/InitForm";
import { RegistrationContext } from "../../../context/Registration/IsIPTI/context";


const IsRegistration = () => {

  const { step } = useContext(RegistrationContext);

  return (
    <Grid item xs={12}>
      {step === 0 ? <InitForm /> : null}
    </Grid>
  );
}



export default IsRegistration;
