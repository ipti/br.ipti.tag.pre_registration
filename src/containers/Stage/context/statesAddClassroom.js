import { useState } from "react";

export const AddClassroomState = () => {

    const [initial_hour, setInitial_hour] = useState()
    const [initial_min, setInitial_min] = useState()
    const [final_hour, setFinal_hour] = useState()
    const [final_min, setFinal_min] = useState()

    return {
        initial_hour, initial_min, final_hour, final_min, setFinal_hour, setFinal_min, setInitial_hour, setInitial_min
    }
}