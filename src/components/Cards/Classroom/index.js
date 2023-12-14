import { makeStyles } from "@material-ui/core/styles";
import { Clear } from "@material-ui/icons";
import { Tooltip } from "@mui/material";
import React from "react";
import { useHistory } from "react-router-dom";
import styles from "./style";


const useStyles = makeStyles(styles);

const CardClassroom = ({ title, id, Delete, children, link }) => {
    const classes = useStyles();
    const history = useHistory()


    return (
        <div onClick={() => history.push(link)} style={{cursor: "pointer"}} className={`${classes.contentBox} ${classes.floatLeft}`}>
            <div className={classes.boxWithoutImage}>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                    <div className={classes.title} title={title}>{title}</div>
                    <Tooltip title={"Excluir"}>
                        <Clear className={`${classes.floatRight} ${classes.iconDelete}`} onClick={(e) => { e.stopPropagation(); Delete(id) }} />
                    </Tooltip>
                </div>
            </div>
            <div>{children}</div>
        </div>
    )
}

export default CardClassroom;