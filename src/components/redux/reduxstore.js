import { createSlice } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import { createImmutableStateInvariantMiddleware } from "@reduxjs/toolkit";
const mainstore=
createSlice({
    name:'mainstore',
    initialState:{scrolllayout:false,imgindex:null,
       serverindex:0,contactop:0,windowwidth:0,servecetop:0},
    reducers:{
     onscroll(state,action){
      state.scrolllayout=true
     },
     zeroheinght(state,action){
     state.scrolllayout=false
     },
     choseimageindex(state,action){
        state.imgindex=action.payload
     },
     closeimageindex(state,action){
       state.imgindex=null
     },
     choseserverindex(state,action){
      state.serverindex=action.payload
   },
   setcontacttop(state,action){
    state.contactop=action.payload
 },
 setwidth(state,action){
state.windowwidth=action.payload
 },
 setservecetop(state,action){
  state.servecetop=action.payload
},
    }
})

const immutableInvariantMiddleware = createImmutableStateInvariantMiddleware({
  ignoredPaths: ['scrolllayout', 'contactop',],

})

export const store=configureStore({
    reducer:{mainstore:mainstore.reducer},
  middleware: [immutableInvariantMiddleware],
})
export const actions=mainstore.actions