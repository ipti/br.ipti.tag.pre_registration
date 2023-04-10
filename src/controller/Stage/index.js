import { useFetchRequestSchool } from "../../query/school";
import { getIdSchool } from "../../services/auth";


export const Controller = () => {

    const { data: school, isLoading: isLoadingSchools, refetch } = useFetchRequestSchool({ id: getIdSchool()});

    return {
        school, isLoadingSchools, refetch
    }
}