import React, { Component } from "react";

// Material UI
import Grid from "@material-ui/core/Grid";

// Components
import Start from "./Start";
import StepOne from "./StepOne";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import StepFive from "./StepFive";
import StepSix from "./StepSix";
import Finish from "./Finish";
import Classroom from "./ClassRoom";
import { useContext } from "react";
import { RegistrationContext } from "../../containers/Registration/Context/context";



class Wizard extends Component {

  
  constructor(props) {
    super(props);
    this.state = {
      step: props.step
    };
  }

  nextStep = step => {
    this.props.next(step);
  };

  

  

  componentMapping = {
    "0": Start,
    "1": Classroom,
    "2": StepOne,
    "3": StepThree,
    "4": this.props.isOfLegalAge === '1' ? StepFour : StepSix,
    "5": StepFive,
    "6": Finish
  };

  render() {
    const StepComponent = this.componentMapping[this.props.step];

    return (
      <Grid item xs={12}>
          <h2 onClick={this.props.backStep}>Voltar</h2>
        <StepComponent {...this.props} nextStep={this.nextStep} />
      </Grid>
    );
  }
}

export default Wizard;
