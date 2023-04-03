import { useParams } from "react-router";
import { useFetchRequestRegistration } from "../../../query/stage";

export const StageRegistrationState = () => {

    const { idRegistration } = useParams()

    const {data: registration} = useFetchRequestRegistration({id: idRegistration});

    return {
        registration
    }
}