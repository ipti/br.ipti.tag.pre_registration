import React from "react";
import { useContext } from "react";
import { RegistrationContext } from "../../../../context/Registration/context";
import IsOfLegalAge from "./IsOfLegalAge/IsOfLegalAge";
import IsNotOfLegalAge from "./IsNotIsOfLegalAge/IsNotIsOfLegalAge";

const StepTwo = () => {

    const { isOfLegalAge } = useContext(RegistrationContext)

    return (
        <>
            {
                isOfLegalAge ?
                    <IsOfLegalAge /> : <IsNotOfLegalAge />
            }
        </>
    )
}

export default StepTwo;