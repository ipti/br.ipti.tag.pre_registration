import { Controller } from "../../../controller/classroom";

export const StageFormState = () => {



    const { requestDeletePreRegistrationMutation, classroom, isError, isLoading } = Controller();



    return {
        classroom, isLoading, isError, requestDeletePreRegistrationMutation
    }
}