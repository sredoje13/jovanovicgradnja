import "./App.css";
import { Route, Switch } from "react-router-dom";
import Firstpage from "./components/firstpage/Firstpage";
import Layout from "./components/Layout/Layout";
import COntact2 from "./components/Contact/COntact2";
import Contact from "./components/Contact/Contact";
import Servespage from "./components/Serveces/Servespage";
import COpyright from "./components/Contact/COpyright";
import Aboutus from "./components/Aboutus/Aboutus";
import { actions } from "./components/redux/reduxstore";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import Openpage from "./components/firstpage/Openpage";
function App() {
  const [viewpage, setviewpage] = useState(false);
  const contactop = useSelector((state) => state.mainstore.contactop);
  const dispatch = useDispatch();
  const openmenu=useSelector((state)=>state.mainstore.openmenu)
  const openitmenu = () => {
dispatch(actions.openmenu())  };
  useEffect(() => {
    dispatch(actions.setwidth(window.innerWidth));
  }, [dispatch]);
  useEffect(() => {
    setTimeout(() => {
      setviewpage(true);
    }, 3000);
  });
  console.log(viewpage);
  const scrolltocontact = () => {
    window.scrollTo({ top: contactop.offsetTop + 400,behavior:'smooth' });
    dispatch(actions.closemenu())
  };

  var onresize = function () {
    const width = window.innerWidth;
    dispatch(actions.setwidth(width));
  };
  window.addEventListener("resize", onresize);

  if (!viewpage) {
    return <Openpage />;
  } else {
    return (
      <div>
        <div className="App">
          <COntact2 />
          <Layout
            openmenu={openmenu}
            openit={openitmenu}
            scrolltocontact={scrolltocontact}
          />
          <Switch>
            <Route path="/" exact>
                <Redirect to='/Početna'/> 
            </Route>
            <Route path="/Početna">
              <Firstpage viewicon={openmenu} />
            </Route>
            <Route path="/Usluge">
              <Servespage />
            </Route>
            <Route path="/O nama">
              <Aboutus />
            </Route>
          </Switch>
          <Contact scrolltocontact={scrolltocontact} />
          <COpyright />
        </div>
      </div>
    );
  }
}

export default App;
