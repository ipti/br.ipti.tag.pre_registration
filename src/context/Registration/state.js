import { useEffect, useState } from "react";
import { useFetchRequestQuiz } from "../../query/quiz";
import { Controller } from "../../controller/registration";


export const RegistrationState = () => {
    const [schools, setSchools] = useState();
    const [school, setSchool] = useState();
    const [idClassRoom, setIdClassroom] = useState("")
    const [isOfLegalAge, setIsOfLegalAge] = useState('');
    const [idEvent, setIdEvent] = useState('');
    const [year, setYear] = useState('');
    const [quiz, setQuiz] = useState();


    const [isActive, setIsActive] = useState(true);


    const [step, setStep] = useState(0);
    const [dataValues, setDataValues] = useState({});
    // controller step form

    const next = (step, values) => {

        let data = Object.assign(dataValues, values);
    
        setDataValues(data);
        setStep(step)

      };
    

    
    const {schoolsList, requestSaveRegistrationMutation} = Controller()

    const { data: anwsers } = useFetchRequestQuiz({ id: school ? school.inep_id : null })
  
    useEffect(() => {
        if(schoolsList){
            setSchools(schoolsList)
        }
        if(anwsers){
            setQuiz(anwsers)
        }
      }, [schoolsList, anwsers])


    return {
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
        setIsActive
    }
}