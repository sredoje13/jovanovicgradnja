import React, { useEffect } from "react";
import Aos from "aos";
import Images from "./Images";
import Imgslider from "./Imgslider";
import { FaBuildingColumns } from "react-icons/fa6";
import { useSelector } from "react-redux/es/hooks/useSelector";
import "aos/dist/aos.css";

import Sllderimage from "./Sllderimage";
import { firstdivs, images } from "./datas";
function Firstpage(props) {
  const imageindex = useSelector((state) => state.mainstore.imgindex);
  const windowwidth = useSelector((state) => state.mainstore.windowwidth);

  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);
  const firstdivss = firstdivs.map((item, i) => (
    <div
      className="firstdiv"
      key={i}
      data-aos="fade-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
      style={{
        transform:
          windowwidth > 1200
            ? `translateX(${(-1 + i) * 100}%)`
            : windowwidth < 1200 && windowwidth > 600
            ? `translateX(${(-1 + i) * 50}%)`
            : `translateX(0%)`,
      }}
    >
      <h1 className="h1">{item.title.toUpperCase()}</h1>
      <h3>{item.subtitle}</h3>
      <p>{item.text}</p>
    </div>
  ));

  console.log(imageindex);
  return (
    <div className="firstpage flexcolumn">
      <div className="flexcolumn divforpictures">
        <div className="firstimage flexc" />
        <h1>
          <b>JOVANOVIĆ GRADNJA</b>{" "}
        </h1>
        {props.viewicon && windowwidth <= 600 && (
          <FaBuildingColumns className="iconabsolute" />
        )}
      </div>
      <div className="flexcolumn firstcontainer ">{firstdivss}</div>
      <div className="flexcolumn">
        <Images images={images} />
        <Sllderimage image={imageindex} />
        <Imgslider images={images} windowwidth={windowwidth} />
      </div>
    </div>
  );
}

export default Firstpage;
