import React from 'react';
import {AiFillFacebook,AiOutlineMail,AiFillPhone} from 'react-icons/ai'

function COntact2(props) {
    return (
        <div className='contact2' >
         <a href="tel:+381607420567">+381600954680</a>
         <a href='mailto:k2vrhh@gmail.com' ><AiOutlineMail/></a>  
         <a href='https://www.facebook.com/profile.php/?id=100049036030062' ><AiFillFacebook/></a>  

        </div>
    );
}

export default COntact2;