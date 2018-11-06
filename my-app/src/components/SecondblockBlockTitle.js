import React from 'react';

const SecondblockBlogTitle = (props)=>{
    return(
           <div class="blog-secondrow"> 
               <img src= {props.src} />     
               <h5>{props.blogTitle}</h5>
               <p>{props.paraBlogTitle}</p>
            </div>
    );
}

export default SecondblockBlogTitle;
