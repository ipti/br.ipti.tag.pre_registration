import { useMutation } from "react-query";
import { requestSaveRegistration, useFetchRequestSchoolList } from "../../query/registration";
import { useState } from "react";


export const Controller = () => {
    const { data: schoolsList } = useFetchRequestSchoolList();

    const requestSaveRegistrationMutation = useMutation(
        (data) => requestSaveRegistration(data),
        {
          onError: (error) => {
            alert(`${error.response.data.message} \nRepita todo o processo` );
            window.location.reload()
          },
          onSuccess: (data) => {
           // history.push('/')
          },
        }
      );
    return {requestSaveRegistrationMutation, schoolsList}
} 