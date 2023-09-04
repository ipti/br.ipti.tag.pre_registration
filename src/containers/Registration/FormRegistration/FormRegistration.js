import React from "react";
import Registration from "../../../screens/Registration";
import RegistrationContextProvider from "../../../context/Registration/context";
const FormRegistration = () => {
    return(
        <RegistrationContextProvider>
            <Registration />
        </RegistrationContextProvider>
    )
}

export default FormRegistration;