import { useMutation } from "react-query";
import { requestSaveRegistration, useFetchRequestSchoolList } from "../../query/registration";
import { useHistory } from "react-router";


export const Controller = () => {
    const { data: schoolsList } = useFetchRequestSchoolList();
    const history = useHistory()

    const requestSaveRegistrationMutation = useMutation(
        (data) => requestSaveRegistration(data),
        {
          onError: (error) => {
            alert(`${error.response.data.message} \nRepita todo o processo` );
            window.location.reload()
          },
          onSuccess: (data) => {
            alert("Pré-matricula feita com sucesso!");
            history.push('/')
          },
        }
      );
    return {requestSaveRegistrationMutation, schoolsList}
} 