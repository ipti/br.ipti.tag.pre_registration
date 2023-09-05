import { useEffect, useState } from "react";
import { Controller } from "../../../controller/registration";
import { useFetchRequestQuiz } from "../../../query/quiz";
import { useHistory } from "react-router";
import { PreRegistration } from "../../../registration_SDK/Registration/IsIPTI/controller";


export const RegistrationState = () => {
    const [schools, setSchools] = useState();
    const [school, setSchool] = useState();
    const [idClassRoom, setIdClassroom] = useState("")
    const [isOfLegalAge, setIsOfLegalAge] = useState('');
    const [idEvent, setIdEvent] = useState('');
    const [year, setYear] = useState('');
    const [quiz, setQuiz] = useState();

    const [isActive, setIsActive] = useState(true);

    const history = useHistory()

    const [step, setStep] = useState(0);
    const [dataValues, setDataValues] = useState({});

    const next = (step, values) => {

        let data = Object.assign(dataValues, values);
    
        setDataValues(data);
        setStep(step)

      };
    
    const { schoolListRequest} = PreRegistration()

    const { data: anwsers } = useFetchRequestQuiz({ id: school ? school.inep_id : null })
  
    useEffect(() => {
        if(schoolListRequest){
            setSchools(schoolListRequest)
        }
        if(anwsers){
            setQuiz(anwsers)
        }
      }, [schoolListRequest, anwsers])


      const backStep = () => {
        if (step > 0) {
          if (step === 6 && (quiz.length === 0)) {
            setStep(step - 2)
          } else {
            setStep(step - 1)
          }
        } if (step === 0 && isActive) {
          history.push("/register")
        }
        if (!isActive) {
          setIsActive(true)
        }
      }
    
      const onSubmit = (values) => {

        let data = Object.assign(dataValues, values);
    
        setDataValues(data);
        const parseBool = value =>
          ['true', 'false'].includes(value) ? value === true : null
        //   requestSaveRegistrationMutation.mutate(
        //     {
        //       ...dataValues, sex: parseInt(dataValues.sex),
        //       zone: parseInt(dataValues.zone),
        //       birthday: dataValues.birthday,
        //       deficiency: parseBool(dataValues.deficiency),
        //       cpf: dataValues.cpf ? dataValues.cpf.replace(/\D/g, '') : null,
        //       responsable_cpf: dataValues.responsable_cpf ? dataValues.responsable_cpf.replace(/\D/g, '') : "",
        //       responsable_telephone: dataValues.responsable_telephone.replace(/\D/g, ''),
        //       father_name: dataValues.father_name === "" ? null : dataValues.father_name,
        //       mother_name: dataValues.mother_name === "" ? null : dataValues.mother_name,
        //       event_pre_registration: parseInt(dataValues.event_pre_registration),
        //     }
        //   )
        
      };


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
        // requestSaveRegistrationMutation, 
        quiz, 
        next,
        step,
        isActive, 
        setIsActive,
        backStep,
        onSubmit,
        dataValues
    }
}