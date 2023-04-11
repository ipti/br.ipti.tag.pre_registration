import React, { useState } from "react";



// Redux

// Components
import Alert from "../../components/Alert/CustomizedSnackbars";
import Loading from "../../components/Loading/CircularLoadingRegistration";
import Wait from "../../screens/Registration/Wait";
import Wizard from "../../screens/Registration/Wizard";

// Material UI
import Grid from "@material-ui/core/Grid";
import { Controller } from "../../controller/registration";
import RegistrationContextProvider, { RegistrationContext } from "./Context/context";
import { useContext } from "react";

const Home = props => {
  const [loadDataStudent, setLoadDataStudent] = useState(false);
  const [load, setLoad] = useState(true)
  const [open, setOpen] = useState(false);
  const [number, setNumber] = useState("");
  const [step, setStep] = useState(0);
  const [dataValues, setDataValues] = useState({});
  const { schools } = useContext(RegistrationContext);
  const { requestSaveRegistrationMutation } = Controller()
  const [isActive, setIsActive] = useState(true);

  

  // useEffect(() => {
  //   setOpen(false);

  //   if (loadDataSchool) {
  //     props.dispatch({ type: "FETCH_SCHOOLS_LIST" });
  //     setLoadDataSchool(false);
  //   }

  //   // if (loadPeriod) {
  //   //   props.dispatch({ type: "FETCH_PERIOD" });
  //   //   setLoadPeriod(false);
  //   // }


  //   if (step === 2 && props?.student?.status === "1") {
  //     setStep(3);
  //   }

  //   if (props?.registration?.status === "1" && !props.loading) {
  //     setStep(6);
  //   }

  //   if (props?.student?.status === "1" && !props.loading) {
  //     setStep(5);
  //   }

  //   if (props.openAlert) {
  //     setTimeout(function () {
  //       props.dispatch({ type: "CLOSE_ALERT_REGISTRATION" });
  //     }, 3000);
  //   }
  // }, [loadDataSchool, loadDataStudent, loadPeriod, number, open, props, step]);

  const onSubmit = () => {

    if (dataValues?.birthday) {
      dataValues.birthday = dataValues.birthday
        .split("/")
        .reverse()
        .join("-");
    }

    console.log(dataValues)
    const parseBool = value =>
      ['true', 'false'].includes(value) ? value === true : null
    if (load) {

      requestSaveRegistrationMutation.mutate(
        {
          ...dataValues, sex: parseInt(dataValues.sex),
          zone: parseInt(dataValues.zone),
          deficiency: parseBool(dataValues.deficiency),
          cpf: dataValues.cpf ? dataValues.cpf.replace(/\D/g, '') : null,
          responsable_cpf: dataValues.responsable_cpf ? dataValues.responsable_cpf.replace(/\D/g, '') : "",
          responsable_telephone: dataValues.responsable_telephone.replace(/\D/g, ''),
          father_name: dataValues.father_name === "" ? null : dataValues.father_name,
          mother_name: dataValues.mother_name === "" ? null : dataValues.mother_name,
          event_pre_registration: parseInt(dataValues.event_pre_registration),
        }
      )
      setLoad(false)
    }

  };


  const next = (step, values) => {

    let data = Object.assign(dataValues, values);

    setDataValues(data);
    setStep(step)


    console.log(step)

    if (step === 5) {
      console.log(step)
      onSubmit();
    }

    // if (step === 3 && values && values.numRegistration !== "") {
    //   getDataStudent(values.numRegistration);
    // } else {
    //   if (step === 7) {
    //     onSubmit();
    //     setStep(step)
    //   } else {
    //     setStep(step);
    //   }
    // }
  };
  const backStep = () => {
    if (step > 0) {
      setStep(step - 1)
    }
  }

  const nextStep = () => {
    if (step <= 6) {
      setStep(step + 1)
    }
  }

  const getDataStudent = number => {
    setNumber(number);
    setLoadDataStudent(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const alert = () => {
    return (
      <Alert
        open={props.openAlert}
        handleClose={handleClose}
        status="0"
        message="Matrícula não encontrada!."
      />
    );
  };

  const handleStudent = isStudent => {
    if (!isStudent) {
      next(4);
    } else {
      next(3);
    }
  };

  const wizard = () => {
    // const isActive =
    //   props.period?.data?.internal === true ||
    //   props.period?.data?.newStudent === true ||
    //   props?.student?.status ||
    //   step === 6 ||
    //   props.loading;
    return (
      <RegistrationContextProvider>
           <Grid
        container
        justifyContent="center"
        //alignItems="center"
        style={{ minWidth: "100%", marginTop: 30 }}
      >
        <Grid item lg={4} md={5} xs={10}>
          {isActive ? (
            <Wizard
              schools={schools}
              next={next}
              step={step}
              handleStudent={handleStudent}
              loadingButtom={props.loading}
              setIsActive={setIsActive}
              handleSubmit={onSubmit}
              backStep={backStep}
              nextStep={nextStep}
              values={dataValues}
            />
          ) : (
            <Wait />
          )}
        </Grid>
      </Grid>
      </RegistrationContextProvider>
     
    );
  };

  return (
    <>
      {props.loading && step === 0 ? (
        <Loading />
      ) : (
        <>
          {wizard()}
          {alert()}
        </>
      )}
    </>
  );
};

// const mapStateToProps = state => {

//   return {
//     address: state.viaCep.addresses,
//     student: state.registration.student,
//     registration: state.registration.registration,
//     period: state.registration.period,
//     schoolList: state.registration.schoolList,
//     loading: state.registration.loading,
//     openAlert: state.registration.openAlert
//   };
// };

export default Home;
