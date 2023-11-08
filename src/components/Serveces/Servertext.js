import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import {styles} from './theme'
import { actions } from '../redux/reduxstore';
import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
function Servertext({name,text}) {

  const dispatch=useDispatch()
  const classes=styles()
  const ref=useRef()
  useEffect(()=>{
    dispatch(actions.setservecetop(ref.current))
  },[dispatch])
    return (
        <Box class={classes.box} ref={ref} >
             <Paper sx={{padding:'20px'}} elevation={6}>
          <Typography class={classes.title}  color='green'>
            {name}
          </Typography>
          <Typography variant='p'  class={classes.paper}>
            {text}
          </Typography>
        
      </Paper>
        </Box>
     
    );
}

export default Servertext;