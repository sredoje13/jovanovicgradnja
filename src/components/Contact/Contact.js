import React from "react";
import { contactDatas } from "./datas";
import { useRef, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { actions } from "../redux/reduxstore";
function Contact(props) {
  const dispatch = useDispatch();
  const [ispress, setispress] = useState(false);
  let ref = useRef();
  useEffect(() => {
    console.log(ref.current.offsetTop);
    dispatch(actions.setcontacttop(ref.current));
  }, [dispatch]);
  const contactdivs = contactDatas(ispress).map((item) => (
    <div key={item.text} className="icondivs flexcolumn">
      <div className="iconsofcontact">{item.el}</div>
      <h4>{item.text.toUpperCase()}</h4>
      <a href={item.href}>{item.name}</a>
    </div>
  ));
  const contactus = () => {
    setispress(true);
    props.scrolltocontact();
    setTimeout(() => {
      setispress(false);
    }, 2000);
  };
  return (
    <div className="contact" ref={ref}>
      <div className="greenline flexs">
        <div className="flexcolumn">
          <h2>
            Spremni smo da izgradimo Vaš san i kažemo vam više o vašem projektu!
          </h2>
          <p className="pgreenline">
            Obratite nam se sa zahtevom za ponudu ili zakazivanjem razgovora,
            kako biste ostvarili vaše snove.
          </p>
        </div>
        <button className="blackbutton" onClick={contactus}>
          KONTAKTIRAJTE NAS
        </button>
      </div>
      <div className="flexc iconcontact">{contactdivs}</div>
      <div className="line" />
    </div>
  );
}

export default Contact;
