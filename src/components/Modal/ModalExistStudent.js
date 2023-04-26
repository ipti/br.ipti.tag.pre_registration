import React from "react";
import ReactModal from "react-modal";
import styles from "./styles";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(styles);

const ModalExistStudent = ({openModal, close}) => {
    const classes = useStyles();



    return(
        <ReactModal style={`${classes.modal}`} isOpen={openModal} onRequestClose={close}>
            <div>

            </div>
        </ReactModal>
    )
}

export default ModalExistStudent;