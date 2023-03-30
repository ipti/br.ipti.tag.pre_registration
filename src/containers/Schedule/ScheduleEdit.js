import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import { ScheduleForm } from "../../screens/Schedule";
import { useHistory, useParams } from "react-router-dom";
import { connect } from "react-redux";
import moment from "moment";
import Loading from "../../components/Loading/CircularLoading";
import Alert from "../../components/Alert/CustomizedSnackbars";
import { useFetchRequestScheculeOne, useFetchRequestSchools } from "../../query/Schedule";
import { Controller } from "../../controller/Schedule/index";

const ScheduleEdit = props => {
    const { id } = useParams();
    const [active, setActive] = useState(true);
    const [loadData, setLoadData] = useState(true);
    const [loadingButtom, setLoadingButtom] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [open, setOpen] = useState(false);
    const [redirect, setRedirect] = useState(false);
    const { requestSaveEventPreMutation } = Controller()
    let history = useHistory();

    const { data } = useFetchRequestScheculeOne({ id: id })

  

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
            start_date: values.start_date,
            end_date: values.end_date,
            school_identificationArray: values.school_identificationArray,
            year: parseInt(values.year),
        };
        requestSaveEventPreMutation.mutate(data)
    };

    const validationSchema = Yup.object().shape({
        start_date: Yup.date()
            .nullable()
            .required("Campo obrigatório!"),
        end_date: Yup.date()
            .when("start_date", (start_date, schema) => {
                if (start_date !== null) {
                    return schema.min(
                        start_date,
                        "A Data Final deve ser maior do que a data inicial"
                    );
                }
            })
            .nullable()
            .required("Campo obrigatório!"),
        year: Yup.number()
            .min(4, "Campo deve ter no mínimo 4 digitos. Ex: 2020")
            .required("Campo obrigatório!")
    });

    const initialValues = () => {
        let initialValues = {
            start_date: null,
            end_date: null,
            year: "",
            school_identificationArray: "",
        };
        return initialValues;
    };

    return (
        <>
            {props?.loading && !loadingButtom ? (
                <Loading />
            ) : (
                <>
                    <ScheduleForm
                        initialValues={initialValues()}
                        validationSchema={validationSchema}
                        schools={data}
                        handleSubmit={handleSubmit}
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


export default ScheduleEdit;