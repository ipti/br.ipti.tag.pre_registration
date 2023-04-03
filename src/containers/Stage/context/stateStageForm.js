import { useParams } from "react-router";
import { useFetchRequestClassroom } from "../../../query/stage";

export const StageFormState = () => {

    const { id } = useParams()

    const {data: classroom, isLoading} = useFetchRequestClassroom({id: id})

    return {
        classroom, isLoading
    }
}