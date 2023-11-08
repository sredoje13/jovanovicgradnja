import React,{useEffect} from "react";
import Aos from "aos";
import Images from "./Images";
import Imgslider from "./Imgslider";
import {FaBuildingColumns} from 'react-icons/fa6'
import {  useSelector } from "react-redux/es/hooks/useSelector";
import 'aos/dist/aos.css'
import Im1 from '../utils/slike/E3Ka3OBOJf41KgKX.jpg'
import Im2 from '../utils/slike/IMG-710560a7beb67cb299a7333a5f383e3e-V.jpg'
import Im3 from '../utils/slike/IMG-a27c3bad67b9713fbe7fadf49a0f7011-V.jpg'
import Im4 from '../utils/slike/fasade.png'
import Im5 from '../utils/slike/hidroizolacija.jpg'
import Im6 from '../utils/slike/hidroizolacija2.jpg'
import Im7 from '../utils/slike/hidroizolacija3.jpg'
import Im8 from '../utils/slike/krov.jpg'
import Im9 from '../utils/slike/krov2.jpg'
import Im10 from '../utils/slike/molerski3.jpeg'
import Im11 from '../utils/slike/molersko-farbarski-radovi-5425643117108-71804313956.jpg'
import Im12 from '../utils/slike/molerskofarb.jpeg'
import Im13 from '../utils/slike/pranjee.jpeg'
import Im14 from '../utils/slike/pregledkrova.jpg'
import Im15 from '../utils/slike/pregledkrova2.jpg'
import Im16 from '../utils/slike/zastitaodptica.jpg'
import Sllderimage from "./Sllderimage";
function Firstpage(props) {
  const images=[Im1,Im2,Im3,Im4,Im5,Im6,Im7,Im8,Im9,Im10,Im11,Im12,Im13,Im14,Im15,Im16]
  const imageindex=useSelector((state)=>state.mainstore.imgindex)
  const windowwidth=useSelector((state)=>state.mainstore.windowwidth)

  useEffect(() => {
        Aos.init();
        Aos.refresh();
      }, [])
  const firstdivs = [
    {
      title: "Radovi na visini",
      subtitle:
        "Dobrodošli na web stranicu JOVANOVIĆ GRADNJA K2, firme koja se bavi primenjenim alpinizmom u industriji i građevinarstvu.",
      text: "JOVANOVIĆ GRADNJA K2 je stručna firma koja nudi širok spektar usluga vezanih za radove na visini, uključujući održavanje, popravaku i instalaciju raznih sistema i uređaja na zgradama i drugim visokim strukturama.",
    },
    {
      title: "Građevinski radovi",
      subtitle:
        "Strategija naše firme ogleda se u korektnom dogovaranju i projektovanju realne strategije za izvođenje projekata",
      text: "Radove izvodimo samo sa visokokvalitetnim građevinskim materijalima. Takođe posedujemo svu potrebu mehanizaciju i prateću pomoćnu opremu za realizaciju različitih projekata. Jovanović gradnja je siguran realizator dogovorenih građevinskih projekata. ",
    },
    {
      title: "Kvalitet i bezbednost",
      subtitle:
        "Tokom svih godina, izgrađen je krug podizvođača i dobavljača koji, partnerskim pristupom, doprinose uspešnoj realizaciji projekata",
      text: "Izvršili smo značajna ulaganja u mehanizaciju i opremu kako bismo unapredili kvalitet svakog projekta. Jovanović gradnja poklanja veliku pažnju bezbednosti pri realizaciji projekata, kao građevinskih poslova tako i radnika",
    },
  ].map((item, i)=><div className="firstdiv"
  key={i}
  data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"
   style={{transform:windowwidth>1200?`translateX(${(-1+i)*100}%)`:windowwidth<1200&&windowwidth>600?`translateX(${(-1+i)*50}%)`:`translateX(0%)`}}>
  <h1 className="h1">{item.title.toUpperCase()}</h1>
  <h3>{item.subtitle}</h3>
  <p>{item.text}</p>

  </div>)

console.log(imageindex)
  return <div className="firstpage flexcolumn">
 
   <div className="flexcolumn divforpictures">
   <div className="firstimage flexc"/>
   <h1><b>JOVANOVIĆ GRADNJA</b> </h1> 
   {props.viewicon&&windowwidth<=600&&<FaBuildingColumns
    className="iconabsolute"/>}

   </div>
    <div className="flexcolumn firstcontainer ">
        {firstdivs}
    </div>
    <div className="flexcolumn" >
    <Images  images={images}/>
   <Sllderimage image={imageindex}/>
   <Imgslider images={images} windowwidth={windowwidth}/>
    </div>
 
  </div>;
}

export default Firstpage;
