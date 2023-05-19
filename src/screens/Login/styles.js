import LoginImg from "../../assets/images/fadedlogo.svg";
import styleBase from "../../styles";

const useStyles = {
  root: {
    "& .MuiTextField-root": {
      width: "100%",
      marginBottom: "10px"
    },
    minHeight: "100%",
    fontFamily: styleBase.typography.types.light,
    
  },
  titleLogin: {
    textAlign: "center",
    fontSize: "24px",
    marginBottom: "-15px",
    color: styleBase.colors.colorsBaseInkNormal,
    fontFamily: styleBase.typography.types.inter,
  },
  subTitleLogin: {
    textAlign: "center",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "21px",
    fontFamily: styleBase.typography.types.inter,
    color: styleBase.colors.colorsBaseInkLight
  },
  imageLogin: {
    marginBottom: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "end",
    marginLeft: "auto",
  },
  divtagna: {
    width: "100%"
  },
  imageTagna: {
    marginBottom: 20,
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
  contentRight: { BackgroundImage: `url(${LoginImg})`, width: "100%" },
  titleBig: {
    fontSize: styleBase.typography.font.extraLarge,
    fontFamily: styleBase.typography.types.regular
  },
  resetPassword: {
    color: styleBase.colors.grayClear,
    fontSize: styleBase.typography.font.small,
    marginTop: 30,
    marginBottom: 30,
    width: "100%"
  },
  boxLeft: {
    position: "absolute",
    zIndex: "100",
    display: "flex"
  },
  boxRegister: {
    marginTop: 30
  },
  boxError: {
    height: 48,
    color: styleBase.colors.red
  },
  link: {
    fontFamily: styleBase.typography.types.bold,
    color: styleBase.colors.gray,
    textDecoration: "none",
    marginLeft: 5
  },
  formFieldError: {
    color: styleBase.colors.red,
    display: "block",
    marginBottom: 5
  },
  "@media(max-width: 1020px)": {
    imageTagna: {
      width: "400px",
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
    // imageTagna: {
    //   width: "300px",
    //   height: "100%"
    // },
    // divtagna: {

    // },
    marginTopContentLeft: {
      margin: "auto 0px",
      marginLeft: "0px"
    },
    boxRegister: {
      marginBottom: 40
    }
  },
  "@media(max-width: 600px)": {
    // imageTagna: {
    //   width: "120px",
    //   display: "none"
    // },
    divtagna: {
      display: "none"
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
