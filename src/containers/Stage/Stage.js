import React, { useContext } from "react";
import Alert from "../../components/Alert/CustomizedSnackbars";
import Loading from "../../components/Loading/CircularLoading";
import { Stage } from "../../screens/Stage";
import { StageContext } from "./context/context";

const Home = props => {
 
  const {classrooms, isLoadingSchools} = useContext(StageContext)

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
        <>
          <Stage
            stages={classrooms}
          />
          {alert()}
        </>
      )}
    </>
  );
};

export default Home;
