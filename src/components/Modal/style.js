import styleBase from "../../styles";

const useStyles = {
    modal: {
        overlay: {
            backgroundColor: "rgba(0,0,0,0.8)",
        },
        content: {
            padding: "0",
            top: "50%",
            left: "50%",
            right: "auto",
            borderRadius: 20,
            bottom: "auto",
            marginRight: "-35%",
            transform: "translate(-50%, -50%)",
            color: "#000",
            background: "#fff",
            overflowX: "hidden",
            width: '50%'
        },
    }
}

export default useStyles;