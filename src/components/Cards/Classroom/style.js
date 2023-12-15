
import styleBase from "../../../styles";

const useStyles = {
    contentBox: {
        border: "1px solid",
        borderRadius: "8px",
        borderColor: styleBase.colors.colorsBaseInkLight,
        padding: "20px",
        width: "88%",
        textDecoration: "none"
      },
      floatLeft: {
        float: "left"
      },
      title: {
        color: styleBase.colors.colorsBaseInkNormalActive,
        fontSize: styleBase.typography.font.small,
        fontFamily: styleBase.typography.types.regular
      },
      boxWithoutImage: {
        marginBottom: 20
      },
}

export default useStyles;