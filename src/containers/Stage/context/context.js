import React from "react";
import { createContext } from "react";
import { StageState } from "./states";
import { AddClassroomState } from "./statesAddClassroom";

export const StageContext = createContext({});

const StageContextProvider = ({ children }) => {

    const { classrooms, isLoadingSchools } = StageState();
    const { initial_hour, initial_min, final_hour, final_min, setFinal_hour, setFinal_min, setInitial_hour, setInitial_min } = AddClassroomState()

    return (
        <StageContext.Provider value={{ classrooms, isLoadingSchools }}>
            {children}
        </StageContext.Provider>
    )
}

export default StageContextProvider;