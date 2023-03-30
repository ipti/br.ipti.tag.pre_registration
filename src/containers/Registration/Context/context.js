import React, { createContext } from "react";
import { RegistrationState } from "./states";

export const RegistrationContext = createContext({});

const RegistrationContextProvider = ({ children }) => {
    const { idEvent, idStage, idStagevsmodality, school, schools, setIdEvent, setIdStage, setIdStagevsmodality, setSchool, setYear, year, requestSaveRegistrationMutation,isOfLegalAge, setIsOfLegalAge } = RegistrationState()

    return (
        <RegistrationContext.Provider
            value={{
                idEvent,
                idStage,
                idStagevsmodality,
                school,
                schools,
                setIdEvent,
                setIdStage,
                setIdStagevsmodality,
                setSchool,
                setYear,
                year,
                requestSaveRegistrationMutation,
                isOfLegalAge,
                setIsOfLegalAge
            }}>
            {children}
        </RegistrationContext.Provider>
    )
}

export default RegistrationContextProvider;