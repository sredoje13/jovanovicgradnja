import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { actions } from "../redux/reduxstore";
import { AiOutlineClose } from "react-icons/ai";
function Sllderimage(props) {
  const dispatch = useDispatch();
  const imageindex = useSelector((state) => state.mainstore.imgindex);
  return (
    <div
      className="imgslider flexc"
      style={{ display: imageindex !== null ? "flex" : "none" }}
    >
      <button
        className="iconbutton flexc"
        onClick={() => dispatch(actions.closeimageindex())}
      >
        <AiOutlineClose color="white" fontSize="x-large" />
      </button>
      <img src={props.image} alt="sliderimage" />
    </div>
  );
}

export default Sllderimage;
