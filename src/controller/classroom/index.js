import React from "react";

import Alert from "@material-ui/lab/Alert";
import { useMutation } from "react-query";
import { useHistory, useParams } from "react-router";
import { requestCreateStage, requestEditPreIdentification, requestUpdateRegistration, useFetchRequestClassroom } from "../../query/stage";
import { requestCreateClassroom, requestDeletePreRegistration } from "../../query/classroom";
import swal from "@sweetalert/with-react";


export const Controller = () => {
    const { id } = useParams()

    const { data: classroom, isLoading, isError, refetch } = useFetchRequestClassroom({ id: id })

    const history = useHistory()
    const requestUpdateRegistrationMutation = useMutation(
        ({ data, id }) => requestUpdateRegistration(data, id),
        {
            onError: (error) => {
                swal(error.response.data.message);
            },
            onSuccess: (data) => {
                history.goBack()
                return (
                    <Alert>
                        opoaaa
                    </Alert>
                )
            },
        }
    );

    const requestCreateStageMutation = useMutation(
        (data) => requestCreateStage(data),
        {
            onError: (error) => {
                swal(error.response.data.message);
            },
            onSuccess: (data) => {
                history.goBack()
                return (
                    <Alert>
                        opoaaa
                    </Alert>

                )
            },
        }
    );
    const requestUpdatePreIdentificationMutation = useMutation(
        ({ data, id }) => requestEditPreIdentification(data, id),
        {
            onError: (error) => {
                swal(error.response.data.message);
            },
            onSuccess: (data) => {
                history.goBack()
                return (
                    <Alert>
                        opoaaa
                    </Alert>

                )
            },
        }
    );

    const requestCreateClassroomMutation = useMutation(
        (data) => requestCreateClassroom(data),
        {
            onError: (error) => {
                swal(error.response.data.message);
            },
            onSuccess: (data) => {
                history.push('/turmas')
            },
        }
    );

    const requestDeletePreRegistrationMutation = useMutation(
        (data) => requestDeletePreRegistration(data),
        {
            onError: (error) => {
                swal(error.response.data.message);
            },
            onSuccess: (data) => {
                refetch()
            },
        }
    );





    return { requestUpdateRegistrationMutation, requestUpdatePreIdentificationMutation, requestCreateStageMutation, requestCreateClassroomMutation, requestDeletePreRegistrationMutation, classroom, isLoading, isError, refetch }
} 