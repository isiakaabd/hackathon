import { createTheme } from "@mui/material/styles";

const dark = "#000000";
const grey = "#757886";
const red = "#3e5ea9";
const lightRed = "#f7f7f7";
const lightGrey = "#CCCCCC";
const lighterGrey = "F2F2F2";
const green = "#2dd39e";
const lightGreen = "#f7f7f7";
const gold = "rgb(243, 173, 83)";
const black = "#2D2F39";
const disable = "#cccccc";

export const muiTheme = createTheme({
  palette: {
    common: {
      dark,
      grey,
      red,
      disable,
      green,
      lightRed,
      lightGrey,
      lighterGrey,
      lightGreen,
      gold,
      black,
    },
    primary: {
      main: dark,
    },
    secondary: {
      main: grey,
    },
    error: {
      main: red,
    },
    info: {
      main: lightGrey,
    },
    success: {
      main: green,
    },
    warning: {
      main: gold,
    },
    disabled: {
      main: disable,
    },
  },
  typography: {
    fontFamily: ['"Euclid Circular"', '"Circular Std Medium"', "Roboto", "sans-serif"].join(", "),
    fontSize: 10,
    htmlFontSize: 10,
    h1: {
      fontSize: "3rem",
      color: dark,
      fontWeight: 700,
    },
    h2: {
      fontSize: "2.5rem",
      color: dark,
      fontWeight: 600,
      '@media (max-width:600px)': {
        fontSize: '1.5rem',
      },
    },
    h3: {
      fontSize: "2.25rem",
      fontWeight: 500,
    },
    h4: {
      fontSize: "1.85rem",
      fontWeight: 500,
    },
    h5: {
      fontSize: "1.5rem",
      fontWeight: 500,
    },

    body1: {
      fontSize: "1.6rem",
      fontWeight: 500,
      lineHeight: 1.7,
      color: dark,
    },
    body2: {
      fontSize: "1.4rem",
      fontWeight: 500,
      lineHeight: 1.85,
    },
    btn: {
      fontSize: "1.5rem",
      textTransform: "none",
      height: "5rem",
      borderRadius: 10,
      boxShadow: "0px 0px 4px -1px rgba(71,64,71,0.63)",
    },

    rowBtn: {
      textTransform: "none",
      borderRadius: "2rem",
      padding: "1rem",
      maxWidth: "10rem",
    },

    cardIconWrapper: {
      width: 86,
      height: 84,
      borderRadius: "50%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },

    cardGridWrapper: {
      height: "100%",
      padding: "5rem 3rem",
      borderRadius: 20,
      boxShadow: "-1px 11px 30px 0px #e0e0e03b",
    },

    cardParentGrid: {
      background: "#fff",
      borderRadius: 10,
      height: "25.8rem",
      cursor: "pointer",
    },
    FormLabel: {
      fontSize: "1.6rem",
      color: dark,
    },
    input: {
      width: "100%",
      height: "5rem",
      border: "1px solid lightGrey",
      borderRadius: ".5rem",
      padding: "1rem",
      fontSize: "1.6rem",
      color: dark,
      fontWeight: 600,

      "&::placeholder": {
        color: lightGrey,
        fontWeight: "500 !important",
      },
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: "#fff",
          boxShadow: "-1px 0px 10px -2px rgba(0,0,0,0.15)",
        },
      },
    },
    MuiBadge: {
      styleOverrides: {
        badge: {
          top: "-.9rem",
          background: "#FF0000",
        },
      },
    },
  },
});
