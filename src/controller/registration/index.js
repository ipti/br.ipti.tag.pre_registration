import Alert from "@material-ui/lab/Alert";
import { useMutation } from "react-query";
import { useHistory } from "react-router";
import { requestSaveRegistration, useFetchRequestSchoolList } from "../../query/registration";


export const Controller = () => {
    const history = useHistory()

    const { data: schoolsList } = useFetchRequestSchoolList();

    const requestSaveRegistrationMutation = useMutation(
        (data) => requestSaveRegistration(data),
        {
          onError: (error) => {
            console.log(error.response.data.message);
          },
          onSuccess: (data) => {
           // history.push('/')
          },
        }
      );
    return {requestSaveRegistrationMutation, schoolsList}
} 