import { Controller } from "../../../controller/classroom";
import { ControllerClassroomForm } from "../../../controller/classroom/ClassroomForm";


export const StageFormState = () => {

    const { requestDeletePreRegistrationMutation, classroom, isError, isLoading } = ControllerClassroomForm();

    const { requestUpdateClassroomMutation } = Controller()

    const PutClassRooms = (id, body) => {
        console.log(id, body)
        requestUpdateClassroomMutation.mutate({data: body, id:id})
    }


    return {
        classroom, isLoading, isError, requestDeletePreRegistrationMutation, PutClassRooms
    }
}