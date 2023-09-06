import React, { createContext } from "react";
import { RegistrationState } from "./state";

export const RegistrationContext = createContext({});

const RegistrationContextProvider = ({ children }) => {
    const {
        isOfLegalAge,
        setIsOfLegalAge,
        school,
        schools,
        setSchool,
        year,
        setYear,
        idEvent,
        setIdEvent,
        idClassRoom,
        setIdClassroom,
        requestSaveRegistrationMutation,
        quiz,
        next,
        step,
        isActive,
        setIsActive,
        backStep,
        onSubmit,
        dataValues
    } = RegistrationState();

    return (
        <RegistrationContext.Provider
            value={{
                isOfLegalAge,
                setIsOfLegalAge,
                school,
                schools,
                setSchool,
                year,
                setYear,
                idEvent,
                setIdEvent,
                idClassRoom,
                setIdClassroom,
                requestSaveRegistrationMutation,
                quiz,
                next,
                step,
                isActive,
                setIsActive,
                backStep,
                onSubmit,
                dataValues
            }}>
            {children}
        </RegistrationContext.Provider>
    )
}

export default RegistrationContextProvider;