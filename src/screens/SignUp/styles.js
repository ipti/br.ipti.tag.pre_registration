import Background from "../../assets/images/background-signup.png";
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
        position: "fixed"
    },
    box: {

    },
    divBlue: {
        background: "linear-gradient(0deg, #3F45EA, #3F45EA)",
        opacity: 0.94,
        position: "absolute",
        height: "100%",
        width: "100%",
        zIndex: 0
    },
    formSignUp: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        position: "relative", zIndex: "100"
    },
    divImage: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "end",
        position: "relative", zIndex: "100"
    },
    imgTagna: {
        width: "100%",
    },
    resetPassword: {
        color: styleBase.colors.white,
        display: "flex",
        flexDirection: "row",
        justifyContent: "end",
        position: "relative", zIndex: "100",
        fontSize: styleBase.typography.font.small,
        marginTop: 30,
        marginBottom: 30,
    },
    textTitle: {
        fontFamily: styleBase.typography.types.regular,
        color: styleBase.colors.white,
        fontSize: styleBase.typography.font.large,
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
    "@media(max-width: 1300px)": {
        resetPassword: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "start"
        },
    },
    "@media(max-width: 740px)": {
        divImage: {
            width: "80%"
        },
        textTitle: {
            fontFamily: styleBase.typography.types.regular,
            color: styleBase.colors.white,
            fontSize: 25,
        },
    },
    "@media(max-width: 639px)": {
        resetPassword: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "center"
        },
        box: {
            flexDirection: "column-reverse"
        }
    },
    "@media(max-width: 1020px)": {
        divImage: {
            width: "70%"
        },
        textTitle: {
            fontFamily: styleBase.typography.types.regular,
            color: styleBase.colors.white,
            fontSize: 25,
        },
        imageLoginStyle: {
            width: "80%",
            height: "80%",
            marginLeft: "20%"
        },
    },
};

export default useStyles;
