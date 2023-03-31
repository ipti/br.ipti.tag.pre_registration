import React from "react";
import Alert from "../../components/Alert/CustomizedSnackbars";
import Loading from "../../components/Loading/CircularLoading";
import { useFetchRequestSchoolStages } from "../../query/registration";
import { useFetchRequestSchool } from "../../query/school";
import { useFetchRequestClassroom, useFetchRequestClassrooms, useFetchRequestStagevsmodality } from "../../query/stage";
import { Stage } from "../../screens/Stage";
import { getIdSchool } from "../../services/auth";

const Home = props => {
  const { data, isLoading } = useFetchRequestSchool({id: getIdSchool()});

  const classrooms = data ? data.classroom.filter(i => i.edcenso_stage_vs_modality_fk === "14") : null;

  

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
      {isLoading ? (
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
