import React, { useState } from "react";
import Alert from "../../components/Alert/CustomizedSnackbars";
import Loading from "../../components/Loading/CircularLoading";
import { Controller } from "../../controller/classroom";
import { useFetchRequestStagevsmodality } from "../../query/Schedule";
import Create from "../../screens/Classroom/AddClassroom";
import StageContextProvider from "./context/contextAddClassroom";

const CreateClassroom = props => {
  const [allSchool, setAllSchool] = useState(false);
  const [open, setOpen] = useState(false);
  const { data } = useFetchRequestStagevsmodality()
  const { requestCreateClassroomMutation } = Controller()

  const handleClose = () => {
    setOpen(false);
  };

  const alert = () => {

    let status = null;
    let message = null;

    if (props?.error) {
      status = 0;
      message = props.error;
    }

    if (props?.fetchSchedule?.status === "0") {
      status = props?.fetchSchedule.status;
      message = props?.fetchSchedule.message;
    }

    if (status !== null && message !== null) {
      return (
        <Alert
          open={open}
          handleClose={handleClose}
          status={status}
          message={message}
        />
      );
    }

    return <></>;
  };

  const handleSubmit = values => {
    console.log(values);
    requestCreateClassroomMutation.mutate(
      {
        ...values,
        school_year: parseInt(values.school_year),
        initial_hour: `${values.initial_hour}`.padStart(2, "0"),
        initial_minute: `${values.initial_minute}`.padStart(2, "0"),
        final_hour: `${values.final_hour}`.padStart(2, "0"),
        final_minute: `${values.final_minute}`.padStart(2, "0")
      })
  };


  return (
    <>
      {!data ? (
        <Loading />
      ) : (
        <StageContextProvider>
          <Create
            // validationSchema={validationSchema}
            stages={data}
            handleSubmit={handleSubmit}
            allSchool={allSchool}
            setAllSchool={setAllSchool}
          // handleChangeActive={handleChangeActive}
          // active={active}
          // isEdit={isEdit}
          // loadingIcon={props?.loading}
          />
          {alert()}
        </StageContextProvider>
      )}
    </>
  );
};


export default CreateClassroom;
