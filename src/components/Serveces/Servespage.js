import React from "react";
import Servesutil from "./Servesutil";
import Servertext from "./Servertext";
import { useSelector } from "react-redux";
import { Typography } from "@mui/material";
import {styles} from './theme'
import { allservers } from "./ServersData";
function Servespage(props) {
  const classes=styles()
    const serverindex=useSelector((State)=>State.mainstore.serverindex)
   const topscroll=useSelector((State)=>State.mainstore.servecetop)
    console.log(topscroll)
  const scroll=()=>{
    window.scrollTo({top:topscroll.offsetTop-200}) 

  }

  return (
    <div className="flexcolumn serves">
      <Typography variant="p" className={classes.titleonpage}
       sx={{color:'green'}} >USLUGE KOJE PRUŽA NAŠA FIRMA</Typography>
      <div className="flexstart divserves">
        <Servesutil
        scroll={scroll}
         allserves={allservers} />
        <Servertext name={allservers[serverindex].name} text={allservers[serverindex].text}/>
      </div>
    </div>
  );
}

export default Servespage;
