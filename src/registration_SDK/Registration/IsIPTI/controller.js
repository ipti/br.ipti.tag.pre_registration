import { useFetchRequestAnwser } from "../../../query/stage";
import { useFetchRequestSchoolList } from "./query"

export const PreRegistration = () => {

    const { data: schoolListRequest } = useFetchRequestSchoolList();

    return {
        schoolListRequest
    }
}

export const PreRegistrationQuiz = (id) => {

    const { data: anwserRequest } = useFetchRequestAnwser(id)

    return {
        anwserRequest
    }
}