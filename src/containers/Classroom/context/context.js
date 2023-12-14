import React from "react";
import { createContext } from "react";
import { StageState } from "./states";

export const StageContext = createContext({});

const StageContextProvider = ({ children }) => {

    const { classrooms, isLoadingSchools, DeleteClassroom } = StageState();
    
    return (
        <StageContext.Provider value={{ classrooms, isLoadingSchools, DeleteClassroom }}>
            {children}
        </StageContext.Provider>
    )
}

export default StageContextProvider;