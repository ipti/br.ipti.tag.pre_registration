import swal from "@sweetalert/with-react";
import { Controller } from "../../../controller/Schedule";



export const States = () => {
    
    const { requestDeleteScheduleMutation, isError, isLoadingSchedules, schedules } = Controller()

    const deleteSchedule = id => {
        if (id) {
            return swal({
                title: "Excluir Cronograma?" ,
                text: "Essa ação é irreversível não pode ser desfeita",
                icon: "warning",
                buttons: true,
                confirm: true,
            })
                .then((willDelete) => {
                    if (willDelete) {
                        requestDeleteScheduleMutation.mutate(id)
                    }
                });


        }
    }

    return {
        schedules, isLoadingSchedules, isError, deleteSchedule
    }

}