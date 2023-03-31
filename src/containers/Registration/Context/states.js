import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Controller } from "../../../controller/registration";


export const RegistrationState = () => {
    const [schools, setSchools] = useState();
    const [school, setSchool] = useState();
    const [idSchool, setIdSchool] = useState('');
    const [idClassRoom, setIdClassroom] = useState("")
    const [isOfLegalAge, setIsOfLegalAge] = useState('');
    const [idEvent, setIdEvent] = useState('');
    const [year, setYear] = useState('');
    const {schoolsList, requestSaveRegistrationMutation} = Controller()

    useEffect(() => {
        if(schoolsList){
            setSchools(schoolsList)
        }
      }, [schoolsList])


    return {
        isOfLegalAge, setIsOfLegalAge, school, schools, setSchool,year, setYear,idEvent, setIdEvent, idClassRoom, setIdClassroom,requestSaveRegistrationMutation
    }
}