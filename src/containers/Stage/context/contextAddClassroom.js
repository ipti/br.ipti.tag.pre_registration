import React, { createContext } from "react";
import { AddClassroomState } from "./statesAddClassroom";

export const CreateClassroomContext = createContext({});

const StageContextProvider = ({ children }) => {

    const { initial_hour, initial_min, final_hour, final_min, setFinal_hour, setFinal_min, setInitial_hour, setInitial_min } = AddClassroomState()

    return (
        <CreateClassroomContext.Provider value={{ initial_hour, initial_min, final_hour, final_min, setFinal_hour, setFinal_min, setInitial_hour, setInitial_min }}>
            {children}
        </CreateClassroomContext.Provider>
    )
}

export default StageContextProvider;