import React from "react";
import Alert from "../../components/Alert/CustomizedSnackbars";
import Loading from "../../components/Loading/CircularLoading";
import { Controller } from "../../controller/Stage";
import StageContextProvider from "./context/context";
import Classroom from "../../screens/Classroom/Classroom";

const Home = props => {

  const { isLoadingSchools } = Controller()

  const alert = () => {
    if (props?.openAlert) {
      let status = null;
      let message = null;

      if (props?.error) {
        status = 0;
        message = props.error;
      } else {
        status = props.fetchClassroom.status;
        message = props.fetchClassroom.message;
      }

      if (status && message) {
        return (
          <Alert
            open={props?.openAlert}
            //  handleClose={handleClose}
            status={status}
            message={message}
          />
        );
      }
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
