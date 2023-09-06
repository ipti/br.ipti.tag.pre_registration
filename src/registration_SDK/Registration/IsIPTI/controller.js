import { useMutation } from "react-query";
import { useFetchRequestAnwser } from "../../../query/stage";
import { useFetchRequestSchoolList } from "./query"
import { requestSaveRegistration } from "./request";
import swal from "sweetalert";
import { useHistory } from "react-router";


export const PreRegistration = () => {

    const { data: schoolListRequest } = useFetchRequestSchoolList();

    const history = useHistory()

    const requestSaveRegistrationMutation = useMutation(
        (data) => requestSaveRegistration(data),
        {
            onError: (error) => {
                swal(`${error.response.data.message} \nRepita todo o processo`);
            },
            onSuccess: (data) => {
                swal("Pré-matricula feita com sucesso!")
                history.push('/register')
            },
        }
    );

    return {
        schoolListRequest, requestSaveRegistrationMutation
    }
}

export const PreRegistrationQuiz = (id) => {

    const { data: anwserRequest } = useFetchRequestAnwser(id)

    return {
        anwserRequest
    }
}