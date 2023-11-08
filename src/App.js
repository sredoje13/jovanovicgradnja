import './App.css';
import { Route,Switch } from 'react-router-dom';
import Firstpage from './components/firstpage/Firstpage';
import Layout from './components/Layout/Layout';
import COntact2 from './components/Contact/COntact2'
import Contact from './components/Contact/Contact';
import Servespage from './components/Serveces/Servespage'
import COpyright from './components/Contact/COpyright';
import Aboutus from './components/Aboutus/Aboutus';
import { actions } from './components/redux/reduxstore';
import { useDispatch,useSelector } from 'react-redux';
import { useEffect,useState } from 'react';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
function App() {
  const contactop=useSelector((state)=>state.mainstore.contactop)
  const [openmenu,setopenmenu]=useState(false)
const openitmenu=()=>{
  setopenmenu(!openmenu)
}
  const dispatch=useDispatch()
useEffect(()=>{
 dispatch(actions.setwidth(window.innerWidth))
},[dispatch])

const scrolltocontact=()=>{
 window.scrollTo({top:contactop.offsetTop+400}) 
}

  var onresize = function() {
    //your code here
    //this is just an example
    const width = window.innerWidth
   dispatch(actions.setwidth(width))
 }
 window.addEventListener("resize", onresize);
  return (
    <div className='App' > 
      <COntact2/>
    <Layout openmenu={openmenu}
    openit={openitmenu}
     scrolltocontact={scrolltocontact}/>
       <Switch>
       <Route path='/' exact>
        <Redirect to='/Početna'/>
       </Route>
  <Route path="/Početna" >
    <Firstpage viewicon={openmenu}/>
  </Route>
  <Route path="/Usluge">
    <Servespage/>
  </Route>
  <Route path="/O nama">
    <Aboutus/>
  </Route>

 </Switch>
 <Contact scrolltocontact={scrolltocontact}/>
 <COpyright/>
    </div>

  );
}

export default App;
