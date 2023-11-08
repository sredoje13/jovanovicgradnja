import React,{useEffect, useState} from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import Image from '../utils/Jovanović gradnja.png'
import { actions } from '../redux/reduxstore';
import { useDispatch,useSelector } from 'react-redux';
import '../../App.css'
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';
function Layout(props) {
    const scroll=useSelector((state)=>state.mainstore.scrolllayout)
    const windowwidth=useSelector((state)=>state.mainstore.windowwidth)
const dispatch=useDispatch()
const handlescroll=()=>{
    const heighty=window.scrollY
    if(heighty>50){
   dispatch(actions.onscroll())
    }
    else{
        dispatch(actions.zeroheinght())
  
    }
}

const scrollontop=()=>{
    window.scrollTo({top:0, behavior:'smooth'})
}
useEffect(()=>{
    window.addEventListener('scroll', handlescroll)
    return () => window.removeEventListener("scroll", handlescroll);
},[])
    const pictures=  <div className='imgcontainer flexc'>
    <img className='logo' src={Image} alt='logo'/>
</div>
    const linkovi=['Početna','Usluge',pictures,'O nama','Kontakt'].map((item,i)=>
   i!==4?<NavLink 
   onClick={scrollontop}
   key={i}
    activeClassName='activelinks'
    className={i!==2?'navlinks':''}
     to={i!==2?item:'Početna'}>{item}</NavLink>:<button  key={item} onClick={props.scrolltocontact} className='buttonnav'>{item}</button>)
    return (
        <div className='flexs layout' style={{opacity:scroll?1:0.9, 
        height:props.openmenu?'150px':'',       
         transform:scroll&&windowwidth>600?'translateY(-100px)':'', transition:'transform 1s, height 1s'}}>
      <div className='menubutton'>
      <IconButton  onClick={props.openit}>
    <MenuIcon/>
       </IconButton>
      </div>
    
        {linkovi}
    
        </div>
    );
}

export default Layout;