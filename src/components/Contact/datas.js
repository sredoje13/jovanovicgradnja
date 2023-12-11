import { AiFillFacebook, AiOutlineMail, AiFillPhone } from "react-icons/ai";
import { FiMapPin } from "react-icons/fi";
import { Contact } from "../models/contactModel";
export function contactDatas(ispress){
    return [
      new Contact( "Adresa",
       "Pančevo",
       <FiMapPin />,
      "https://maps.app.goo.gl/vLvmksEHALwrtTna7",
      ),
      
      new Contact( "Kontakt",
     "+381600954680",
      <AiFillPhone className={ispress ? "animated" : ""} />,
      "tel:381600954680",
    ),
   
    new Contact( "Facebook",
   "Jovanović gradnja K2",
    <AiFillFacebook />,
   "https://www.facebook.com/profile.php/?id=100049036030062",
    ),
   
    new Contact("E-mail",
       "k2vrhh@gmail.com",
       <AiOutlineMail />,
     "mailto:k2vrhh@gmail.com",
    )
  ]}