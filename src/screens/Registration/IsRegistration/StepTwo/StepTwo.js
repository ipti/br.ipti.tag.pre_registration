import React from "react";
import { useContext } from "react";
import { RegistrationContext } from "../../../../context/Registration/IsIPTI/context";
import IsOfLegalAge from "./IsOfLegalAge/IsOfLegalAge";
import IsNotOfLegalAge from "./IsNotIsOfLegalAge/IsNotIsOfLegalAge";

const StepTwo = () => {

    const { isOfLegalAge } = useContext(RegistrationContext)

    console.log(isOfLegalAge)

    return (
        <>
            {
                isOfLegalAge === 2 ?
                    <IsOfLegalAge /> : <IsNotOfLegalAge />
            }
        </>
    )
}

export default StepTwo;