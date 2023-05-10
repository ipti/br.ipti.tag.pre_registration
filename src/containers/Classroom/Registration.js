import React from "react";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading/CircularLoading";
import { Controller } from "../../controller/classroom";
import { RegistrationConfirmed } from "../../screens/Classroom";
import { StageRegistrationState } from "./context/statesRegistration";

const Registration = props => {

   const {requestUpdateRegistrationMutation, requestUpdatePreIdentificationMutation} = Controller();

  const { id, idRegistration } = useParams()

  const {registration, answer} = StageRegistrationState()

  const handleSubmit = value => {
    requestUpdateRegistrationMutation.mutate({data: value, id: idRegistration})
  };

  const handleRefusePreIdentification = () => {
    requestUpdatePreIdentificationMutation.mutate({data: {student_pre_identification_status: 3,}, id: idRegistration})
  }

  return (
    <>
      {!registration ? (
        <Loading />
      ) : (
        <>
          <RegistrationConfirmed
            registration={registration}
            answer={answer}
            classroom={id}
            handleRefusePreIdentification={handleRefusePreIdentification}
            handleSubmit={handleSubmit}
            loadingIcon={props.loading}
          />
        </>
      )}
    </>
  );
};

export default Registration;
