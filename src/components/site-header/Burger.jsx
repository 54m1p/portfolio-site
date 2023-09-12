import {GiHamburgerMenu} from 'react-icons/gi'
import{RxCross1} from 'react-icons/rx'
import { useState } from 'react';

const Burger =({toggle})=>{
    const [isHam,setIsHam] = useState(true);
   
    return(
            <div>
               <span onClick={()=>{
                setIsHam((current)=>!current);
                toggle(isHam)
               }}> {isHam ? <GiHamburgerMenu/> : <RxCross1/>}</span>
            </div>
    )
}

export default Burger