import { useFetchRequestSchool } from "../../query/school";
import { getIdSchool } from "../../services/auth";


export const ControllerSch = () => {

    const { data: school, isLoading: isLoadingSchools, refetch, isError } = useFetchRequestSchool({ id: getIdSchool()});

    return {
        school, isLoadingSchools, refetch, isError
    }
}