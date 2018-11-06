import React from 'react';
import './ThirdBlock.css';
import ThirdBlockRight from './ThirdBlockRight';
import SecondblockBlogTitle from './SecondblockBlockTitle';

const Thirdblock = ()=>{
    return(
      <div id="third-row">
        <div id="testimonials">
          <h4 class="border-text">TESTIMONIALS</h4>
            <SecondblockBlogTitle
               blogTitle="John Smith 1"
               paraBlogTitle="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
               nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat"/>
            <SecondblockBlogTitle
               blogTitle="John Smith 2"
               paraBlogTitle="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
               nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat"/>
            <SecondblockBlogTitle
               blogTitle="John Smith 3"
               paraBlogTitle="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
               nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat"/>
            <SecondblockBlogTitle
               blogTitle="John Smith 4"
               paraBlogTitle="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
               nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat"/>
        </div>
        <ThirdBlockRight/>
      </div>
    );
}

export default Thirdblock;