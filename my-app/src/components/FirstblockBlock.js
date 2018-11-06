import React from 'react';

const FirstblockBlock = (props)=>{
    return(
        <div class="iteam-main" id="superbly">
        <span> {props.spanFirst}</span> <h4>{props.headingFour}</h4>
        <p>{props.paragraphBlock} </p>
        <button>{props.buttonBlock}</button>
      </div>
    );
}

export default FirstblockBlock;
