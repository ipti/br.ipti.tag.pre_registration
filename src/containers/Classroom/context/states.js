import { ControllerSch } from "../../../controller/Stage";
import { Controller } from "../../../controller/classroom";
import Swal from "sweetalert2";
import image from "../../../assets/images/Atenção-img.png";

import styled from "../../../styles";

export const StageState = () => {

    const { school, isLoadingSchools } = ControllerSch();
    const { requestDeleteClassroomMutation } = Controller()

    const classrooms = school ? school.classroom : null;

  
    const DeleteClassroom = (id) => {
      return Swal.fire({
        title: "Excluir Turma?",
        text: "Essa ação é irreversível não pode ser desfeita",
        imageUrl: image,
        imageHeight: 250,
        showCancelButton: true,
        confirmButtonColor: styled.colors.colorsBaseProductNormal,
        cancelButtonColor: styled.colors.colorsBaseCloudNormal,
        confirmButtonText: 'Aceitar',
        reverseButtons: true,
        cancelButtonText: `<div style="color:black">Cancelar</div>`
      }).then((result) => {
        if (result.isConfirmed) {
          requestDeleteClassroomMutation.mutate(id)
        }
      })
    }

    return {
        classrooms, isLoadingSchools, DeleteClassroom
    }
}