import React from 'react';
import './Firstblock.css'
import FirstblockBlock from './FirstblockBlock';

import { 
        FaMobileAlt,FaDesktop,FaLaptop,FaRecycle} 
from 'react-icons/fa';

const Firstblock = ()=>{
    return(
        <div id="first-row">
         <div class="iteam-main" id="superbly">
        <div class="round-icon">
          <i class="fas fa-mobile-alt"><FaMobileAlt/></i>
        </div>
        <FirstblockBlock
        spanFirst="SQUEEKY"
        headingFour="CLEAN"
        paragraphBlock="One of the problems with using  as font sizes is that they cascade, so you are forever writing rules
        that select nested elements to reset them back to 1em; CSS3 now has 
        Just declare a px fallback and you can use it today. Snook shows us they way.... "
        buttonBlock = "READ MORE"/>
         
      </div>
     
      <div class="iteam-main" id="superbly">
        <div class="round-icon">
        <i class="fas fa-mobile-alt"><FaDesktop/></i>
        </div>
        <FirstblockBlock
        spanFirst="SQUEEKY"
        headingFour="CLEAN"
        paragraphBlock="One of the problems with using  as font sizes is that they cascade, so you are forever writing rules
        that select nested elements to reset them back to 1em; CSS3 now has 
        Just declare a px fallback and you can use it today. Snook shows us they way.... "
        buttonBlock = "READ MORE"/>
      </div>
      <div class="iteam-main" id="superbly">
        <div class="round-icon">
        <i class="fas fa-mobile-alt"><FaLaptop/></i>
        </div>
        <FirstblockBlock
        spanFirst="SQUEEKY"
        headingFour="CLEAN"
        paragraphBlock="One of the problems with using  as font sizes is that they cascade, so you are forever writing rules
        that select nested elements to reset them back to 1em; CSS3 now has 
        Just declare a px fallback and you can use it today. Snook shows us they way.... "
        buttonBlock = "READ MORE"/>
      </div>
      <div class="iteam-main" id="superbly">
        <div class="round-icon">
        <i class="fas fa-mobile-alt"><FaRecycle/></i>
        </div>
        <FirstblockBlock
        spanFirst="SQUEEKY"
        headingFour="CLEAN"
        paragraphBlock="One of the problems with using  as font sizes is that they cascade, so you are forever writing rules
        that select nested elements to reset them back to 1em; CSS3 now has 
        Just declare a px fallback and you can use it today. Snook shows us they way.... "
        buttonBlock = "READ MORE"/>
      </div>
         
        
      </div>
    );

}

export default Firstblock;