import { createTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 370,
      sm: 600,
      md: 960,
      lg: 1200,
      xl: 1700,
    },
  },
});
export const styles = makeStyles((theme) => ({
  title: {
    [theme.breakpoints.up("md")]: {
      fontSize: "xx-large",
      color:'green'
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "large",
      color:'green'

    },
  },
  paper:{[theme.breakpoints.down("md")]: {
    fontSize:'medium',

},
[theme.breakpoints.down("sm")]: {
  fontSize:'small',

},
[theme.breakpoints.down("xs")]: {
  fontSize:'x-small',

},
},
  box: {
    [theme.breakpoints.down("md")]: {
        margin: "0px", width: "100%",

    },
    [theme.breakpoints.up("md")]: { margin: "50px", width: "60%" },
  },
  listitem: {
    [theme.breakpoints.down("md")]: {
      width: "100%",
      textAlign: "center",
    },
    [theme.breakpoints.up("lg")]: {
      width: "80%",
    },
    [theme.breakpoints.up("xl")]: {
      width: "30%",
    },
  },
  root: {
   
    [theme.breakpoints.up("sm")]: {
      textAlign: "center",
      fontSize: "12px",
    },
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
  
 
  },
  titleonpage:{
    marginBottom:'30px',
    color:'green',
    [theme.breakpoints.up("md")]: {
      fontSize: "60px",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "40px",
      width:'90%',

    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "30px",
      width:'90%',

    },
  
  }
}));
