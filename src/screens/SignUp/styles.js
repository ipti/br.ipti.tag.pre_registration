import Background from "../../assets/images/backgroud-login.svg";
import styleBase from "../../styles";

const useStyles = {
    root: {
        "& .MuiTextField-root": {
            width: "100%",
            marginBottom: "10px"
        },
       // position: "fixed",
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
        height: "auto",
        background: `url(${Background})`,
        backgroundRepeat: "norepeat",
        display: "flex",
        flexDirection: "row"
    },
    titleBig: {
        fontSize: styleBase.typography.font.extraLarge,
        fontFamily: styleBase.typography.types.regular
    },
    boxLeft: {
        position: "absolute",
        zIndex: "100",
        display: "flex"
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
        titleBig: {
            fontSize: "22px"
        },
        imageLoginStyle: {
            width: "80%",
            height: "80%",
            marginLeft: "20%"
        },
    },
    "@media(max-width: 800px)": {
        imageTagna: {
            marginTop: "40%",
            width: "100%",
        },
        marginTopContentLeft: {
            margin: "auto 0px",
            marginLeft: "0px"
        },
        boxRegister: {
            marginBottom: 40
        }
    },
    "@media(max-width: 687px)": {
        imageTagna: {
          width: "120px",
        //  display: "none"
        },
        divtagna: {
          //  display: "none"
        },
        // contentLeft: {
        //   minHeight: "170px",
        //   height: "auto",
        //   maxHeight: "200px"
        // },
        marginTopContentLeft: {
            margin: "15px 20px",
        },
        boxRegister: {
            marginBottom: 40
        }
    }
};

export default useStyles;
