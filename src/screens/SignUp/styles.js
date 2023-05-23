import Background from "../../assets/images/background-login.svg";
import styleBase from "../../styles";

const useStyles = {
    contentLeft: {
        width: "100%",
        height: "100%",
        fontSize: styleBase.typography.font.small,
        color: styleBase.colors.white,
        background: `url(${Background})`,
        backgroundRepeat: "norepeat",
        display: "flex",
    },
    formSignUp: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
    },

    divImage: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "end"
    },
    imgTagna: {
        width: "100%",
    },
    resetPassword: {
        color: styleBase.colors.white,
        fontSize: styleBase.typography.font.small,
        marginBottom: 30,
        width: "100%"
    },
    boxRegister: {
        marginTop: 30
    },
    link: {
        fontFamily: styleBase.typography.types.bold,
        color: styleBase.colors.red,
        textDecoration: "none",
        marginLeft: 5
    },
    linkRegister: {
        marginTop: 30,
        backgroundColor: styleBase.colors.white,
        border: "none",
        borderRadius: "5px",
        color: styleBase.colors.colorsBaseProductNormal,
        fontSize: styleBase.typography.font.small,
        fontFamily: styleBase.typography.types.bold,
        padding: "10px 20px",
        textDecoration: "none"
    },
};

export default useStyles;
