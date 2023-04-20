import { useFetchRequestSchecule } from "../../../query/Schedule";



export const States = () => {
    const { data: schedules, isLoading: isLoadingSchedules, isError } = useFetchRequestSchecule();

    return {
        schedules, isLoadingSchedules, isError
    }

}