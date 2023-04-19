import React from "react";

import Alert from "@material-ui/lab/Alert";
import { useMutation } from "react-query";
import { useHistory } from "react-router";
import { requestCreateStage, requestEditPreIdentification, requestUpdateRegistration } from "../../query/stage";
import { requestCreateClassroom } from "../../query/classroom";


export const Controller = () => {
    const history = useHistory()
    const requestUpdateRegistrationMutation = useMutation(
        ({ data, id }) => requestUpdateRegistration(data, id),
        {
            onError: (error) => {
                console.log(error.response.data.message);
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
                console.log(error.response.data.message);
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
                console.log(error.response.data.message);
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
                console.log(error.response.data.message);
            },
            onSuccess: (data) => {
                console.log(data)
            },
        }
    );




    return { requestUpdateRegistrationMutation, requestUpdatePreIdentificationMutation, requestCreateStageMutation, requestCreateClassroomMutation }
} 