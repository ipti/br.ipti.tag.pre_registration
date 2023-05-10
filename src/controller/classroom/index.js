import React from "react";

import Alert from "@material-ui/lab/Alert";
import swal from "@sweetalert/with-react";
import { useMutation } from "react-query";
import { useHistory } from "react-router";
import { requestCreateClassroom } from "../../query/classroom";
import { requestCreateStage, requestEditPreIdentification, requestUpdateRegistration } from "../../query/stage";


export const Controller = () => {
    
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

   




    return { requestUpdateRegistrationMutation, requestUpdatePreIdentificationMutation, requestCreateStageMutation, requestCreateClassroomMutation }
} 