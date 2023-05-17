import Background from "../../assets/images/backgroud-login.svg";
import styleBase from "../../styles";

const useStyles = {
  root: {
    "& .MuiTextField-root": {
      width: "100%",
      marginBottom: "10px"
    },
    minHeight: "100%",
    position: "fixed",
    // backgroundImage: ,
    fontFamily: styleBase.typography.types.light
  },
  marginTopContentLeft: {
    marginTop: 128,
    margin: "auto"
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
  imageLoginStyle: {

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
  contentLeft: {
    fontSize: styleBase.typography.font.small,
    color: styleBase.colors.white,
    background:  `url(${Background})`, 
    backgroundColor: "linear-gradient(0deg, #3F45EA, #3F45EA)",
    display: "flex",
    flexDirection: "row"
  },
  contentRight: { backgroundColor: styleBase.colors.white },
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
  "@media(max-width: 960px)": {
    imageTagna: {
      width: "300px",
      height: "100%"
    },
    titleBig: {
      fontSize: "20px"
    },
    imageLoginStyle: {
      width: "80%",
      height: "80%",
      marginLeft: "20%"
    },
    marginTopContentLeft: {
      margin: "auto auto",
    },
  },
  "@media(max-width: 600px)": {
    imageTagna: {
      width: "100%",
      height: "100%"
    },

    marginTopContentLeft: {
      margin: "auto 0px",
      marginLeft: "0px"
    },
    boxRegister: {
      marginBottom: 40
    }
  }
};

export default useStyles;
