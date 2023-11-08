import React from 'react';

import { useDispatch ,useSelector} from 'react-redux';
import { actions } from '../redux/reduxstore';
function Images(props) {
    const imageindex=useSelector((state)=>state.mainstore.imgindex)

    const dispatch=useDispatch()
    const images=props.images.map((item,i)=>
    <div className='firstpageimages' key={i}>
        <img src={item} alt='slicke' onClick={()=>dispatch(actions.choseimageindex(item))}/>
    </div>)
    return (
        <div className='firstpageimagecontainer flexc' style={{filter:imageindex!==null?'brightness(30%)':''}}>
            {images}
        </div>
    );
}

export default Images;