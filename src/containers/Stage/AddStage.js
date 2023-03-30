import React, { useState } from "react";
import * as Yup from "yup";
import Alert from "../../components/Alert/CustomizedSnackbars";
import Loading from "../../components/Loading/CircularLoading";
import { Controller } from "../../controller/classroom";
import { requestCreateStage } from "../../query/stage";
import { useFetchRequestSchools, useFetchRequestStagevsmodality } from "../../query/Schedule";
import Create from "../../screens/Stage/AddStage";
import { getIdSchool } from "../../services/auth";

const AddStage = props => {
  const [active, setActive] = useState(true);
  const [loadingButtom, setLoadingButtom] = useState(false);
  const [allSchool, setAllSchool] = useState(false);
  const [open, setOpen] = useState(false);
  const { requestCreateStageMutation } = Controller()
  const { data } = useFetchRequestStagevsmodality()
  const { data: schools } = useFetchRequestSchools();


  var getIdSchools = [];

  if (schools) {
    for (var school in schools) {
      getIdSchools.push(schools[school].inep_id)
    }
  }


  const handleChangeActive = event => {
    setActive(event.target.checked);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const alert = () => {
    let status = null;
    let message = null;

    if (props?.error) {
      status = 0;
      message = props.error;
    }

    if (props?.fetchSchedule?.status === "0") {
      status = props?.fetchSchedule.status;
      message = props?.fetchSchedule.message;
    }

    if (status !== null && message !== null) {
      return (
        <Alert
          open={open}
          handleClose={handleClose}
          status={status}
          message={message}
        />
      );
    }

    return <></>;
  };

  const handleSubmit = values => {
    let data = {
      edcenso_stage_vs_modality: parseInt(values.edcenso_stage_vs_modality),
      vacancy: parseInt(values.vacancy),
      school_identificationArray: allSchool ? getIdSchools : [getIdSchool()],
      year: parseInt(values.year),
    };
    requestCreateStageMutation.mutate(data)
  };

  const validationSchema = Yup.object().shape({
    edcenso_stage_vs_modality: Yup.number().required("Campo obrigatório!"),
    vacancy: Yup.number().required("Campo obrigatório!"),
    year: Yup.number()
      .min(4, "Campo deve ter no mínimo 4 digitos. Ex: 2020")
      .required("Campo obrigatório!")
  });

  
    

  return (
    <>
      {!data ? (
        <Loading />
      ) : (
        <>
          <Create
           // validationSchema={validationSchema}
            stages={data}
            handleSubmit={handleSubmit}
            allSchool={allSchool}
            setAllSchool={setAllSchool}
          // handleChangeActive={handleChangeActive}
          // active={active}
          // isEdit={isEdit}
          // loadingIcon={props?.loading}
          />
          {alert()}
        </>
      )}
    </>
  );
};


export default AddStage;
