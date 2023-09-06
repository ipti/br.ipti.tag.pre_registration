import React from "react";
import { createContext } from "react";
import FormOphthalmologicalState from "./state";

export const FormOphthalmologicalContext = createContext({});

const FormOphthalmologicaltProvider = ({ children }) => {

    const {} = FormOphthalmologicalState()
    
    return (
        <FormOphthalmologicalContext.Provider value={{  }}>
            {children}
        </FormOphthalmologicalContext.Provider>
    )
}

export default FormOphthalmologicaltProvider;