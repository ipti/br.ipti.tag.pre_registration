import Background from "../../assets/images/backgroud-login.svg";
import styleBase from "../../styles";

const useStyles = {
    root: {
        "& .MuiTextField-root": {
            width: "100%",
            marginBottom: "10px"
        },
        fontFamily: styleBase.typography.types.light
    },
    marginTopContentLeft: {
        marginTop: "200px",
        height: "100%",
    },
    textCenter: {
        textAlign: "center"
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
    colorIcon: {
        color: styleBase.colors.grayClear
    },
    contentLeft: {
        fontSize: styleBase.typography.font.small,
        color: styleBase.colors.white,
        background: `url(${Background})`,
        backgroundRepeat: "norepeat",
        display: "flex",
    },
    titleBig: {
        fontSize: styleBase.typography.font.extraLarge,
        fontFamily: styleBase.typography.types.regular
    },
    boxLeft: {
        position: "absolute",
        zIndex: "100",
        display: "flex",
        flexDirection: "row"
    },
    boxRegister: {
        marginTop: 30
    },
    resetPassword: {
        color: styleBase.colors.white,
        fontSize: styleBase.typography.font.small,
        marginBottom: 30,
        width: "100%"
    },
    boxError: {
        height: 48,
        color: styleBase.colors.red
    },
    link: {
        fontFamily: styleBase.typography.types.bold,
        color: styleBase.colors.red,
        textDecoration: "none",
        marginLeft: 5
    },
    "@media(max-width: 1020px)": {
        imageTagna: {
            marginTop: "20%",
            width: "100%",
        },
        marginTopContentLeft: {
            width: "100%",
        },
        titleBig: {
            fontSize: "22px"
        },
    },
    "@media(max-width: 800px)": {
        divtagna: {
            display: "none"
         },
         welcome: {
            margin: "auto"
        },
        marginTopContentLeft: {
            display: "flex",
            flexDirection: "row",
            height: "100vh",
            width: "100vw",
        },
        boxRegister: {
            marginBottom: 40
        }
    },
    "@media(max-width: 600px)": {
        divtagna: {
           display: "none"
        },
        // contentLeft: {
        //   minHeight: "170px",
        //   height: "auto",
        //   maxHeight: "200px"
        // },
        welcome: {
            margin: "auto"
        },
        marginTopContentLeft: {
            display: "flex",
            flexDirection: "column",
            height: "100vh",
            width: "100vw",
           
        },
        boxRegister: {
            marginBottom: 40
        }
    }
};

export default useStyles;
