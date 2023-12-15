import React from "react";
import Alert from "../../components/Alert/CustomizedSnackbars";
import Loading from "../../components/Loading/CircularLoading";
import { ControllerSch } from "../../controller/Stage";
import Classroom from "../../screens/Classroom/Classroom";
import StageContextProvider from "./context/context";

const Home = props => {

  const { isLoadingSchools, isError } = ControllerSch()

  const alert = () => {

    if (isError) {
      return (
        <Alert
          open={props?.openAlert}
          //  handleClose={handleClose}
          status={0}
          message={"Ocorreu um erro!"}
        />
      );
    }
    return <></>;
  };

  return (
    <>
      {isLoadingSchools ? (
        <Loading />
      ) : (
        <StageContextProvider>
          <Classroom />
          {alert()}
        </ StageContextProvider>
      )}
    </ >
  );
};

export default Home;
