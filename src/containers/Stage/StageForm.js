import React, { useState } from "react";
import { useParams } from "react-router-dom";
import * as Yup from "yup";
import Alert from "../../components/Alert/CustomizedSnackbars";
import Loading from "../../components/Loading/CircularLoading";
import { useFetchRequestClassroom } from "../../query/stage";
import { StageForm } from "../../screens/Stage";

const Form = props => {
  const [loadData, setLoadData] = useState(true);
  const [isEdit, setIsEdit] = useState(false);
  const [loadingButtom, setLoadingButtom] = useState(false);
 // let history = useHistory();
  const { id } = useParams()

  const {data} = useFetchRequestClassroom({id: id})

  const alert = () => {
    if (props?.openAlert) {
      let status = null;
      let message = null;

      if (props?.fetchRegistration?.status) {
        status = props.fetchRegistration.status;
        message = props.fetchRegistration.message;
      } else if (props.fetchClassroom.status) {
        status = props.fetchClassroom.status;
        message = props.fetchClassroom.message;
      } else {
        status = 0;
        message = props.error;
      }

      if (status && message) {
        return (
          <Alert
            open={props?.openAlert}
           // handleClose={handleClose}
            status={status}
            message={message}
          />
        );
      }
    }
    return <></>;
  };

  const handleSubmit = values => {
    setLoadingButtom(true);
   
    setLoadData(true);
  };

  const validationSchema = Yup.object().shape({
    vacancies: Yup.number()
      .nullable()
      .required("Campo obrigatório!")
  });



  return (
    <>
      {!data ? (
        <Loading />
      ) : (
        <>
          <StageForm
            //initialValues={initialValues}
            validationSchema={validationSchema}
            handleSubmit={handleSubmit}
            baseLink={`/turmas/${props.match.params.id}/matricula`}
            isEdit={isEdit}
            loadingIcon={props?.loading}
            data={
              data
            }
          />
          {alert()}
        </>
      )}
    </>
  );
};


export default Form;
