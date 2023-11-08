import { IconButton } from '@mui/material';
import React ,{useState}from 'react';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import {PiDotDuotone} from 'react-icons/pi'
import { useSelector } from 'react-redux';
function Imgslider(props) {
    const [index,setindex]=useState(0)
    let dots=[]
    for(let i=0; i<props.images.length;i++){
      dots[i]=
      <div onClick={()=>setindex(i)}
      key={i} >
  <PiDotDuotone className='dot'
      />
      </div>
    
    }
const changephoto=()=>{
  if(index===props.images.length-1){
    setindex(0)
    }
    else{
        setindex(index+1)
    }
} 
const previusphoto=()=>{
    if(index===0){
        setindex(props.images.length-1)
    }
    else {
        setindex(index-1)
 
    }

}
const fontzize=props.windowwidth<=420?'medium':'large'
     return (
        <div className='flexcolumn slider2'>
        <div className='slider2container flexc'>
        <IconButton onClick={previusphoto}><ChevronLeftIcon fontSize={fontzize} 
        sx={{color:'white'}}/></IconButton>
        <img onClick={changephoto}  src={props.images[index]} alt='slikaa'/>
        <IconButton onClick={changephoto}> <ChevronRightIcon fontSize={fontzize}
         sx={{color:'white'}}/></IconButton>
        </div>
        <div className='flexc'>
      
            {dots}
        
        </div>
        </div>
      
    );
}

export default Imgslider;