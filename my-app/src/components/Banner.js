import React from 'react';
import './Banner.css';

const Banner = (props) => {
    return(
        
            <div className="banner">
                <h2>{props.bannerHeading1}
                <span>{props.spanBanner}</span>{props.bannerHeding2}</h2>
                <button class="getstarted-button">{props.butBannerHeader}</button>
            </div> 
    
    );
}
   
export default Banner;