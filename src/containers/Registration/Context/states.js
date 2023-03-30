import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Controller } from "../../../controller/registration";


export const RegistrationState = () => {
    const [schools, setSchools] = useState();
    const [school, setSchool] = useState();
    const [idSchool, setIdSchool] = useState('');
    const [isOfLegalAge, setIsOfLegalAge] = useState('');
    const [year, setYear] = useState('');
    const [idStage, setIdStage] = useState('');
    const [idStagevsmodality, setIdStagevsmodality] = useState('');
    const [idEvent, setIdEvent] = useState('');

    const {schoolsList, requestSaveRegistrationMutation} = Controller()

    useEffect(() => {
        if(schoolsList){
            setSchools(schoolsList)
        }
      }, [schoolsList])


    return {
        isOfLegalAge, setIsOfLegalAge, school, schools, setSchool, year, setYear, idStage, setIdStage, idStagevsmodality, setIdStagevsmodality, idEvent,setIdEvent, requestSaveRegistrationMutation
    }
}