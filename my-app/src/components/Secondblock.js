import React from 'react';
import imgPlaceholder from '../assets/img-placeholder.png';
import './Secondblock.css';
import SecondblockBlogTitle from './SecondblockBlockTitle';

const Secondblock = ()=>{
    return(
        <div id="second-row">
        <h4 className="border-text">RECENT WORK</h4>
            <div className="blog-secondrow"> 
            
               <SecondblockBlogTitle
               src = {imgPlaceholder}
               blogTitle="Blog title"
               paraBlogTitle="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
               nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat"/>
            </div>
            <div className="blog-secondrow">
              <SecondblockBlogTitle
              src = {imgPlaceholder}
               blogTitle="Blog title"
               paraBlogTitle="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
               nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat"/>
            </div>
            <div className="blog-secondrow">
            <SecondblockBlogTitle
               src = {imgPlaceholder}
               blogTitle="Blog title"
               paraBlogTitle="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
               nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat"/>
            </div>
      </div>
    );
}

export default Secondblock;