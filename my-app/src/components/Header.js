import React from 'react';
import './Header.css';
import headerImage from '../assets/Header-img.png';
import Banner from './Banner';

const Header = () => {
 return(
   <header>
        <div id="logo-picture">
            <img src={headerImage} alt="image of computers"/>
        </div>
        <div id="main-heading">
            <h1>
                <span>POWERFULLY SIMPLE</span> WITH A
                <span>SQUEEKY CLEAN</span> DESIGN.
            </h1>
                <p>Find out now how you can offer quick and powerful solutions to you customers now!</p>
                <button class="header-button">LEARN MORE</button>
        </div>
    <Banner
    butBannerHeader = "GET STARTED"
    bannerHeading1="CREATE A"
    spanBanner="POWERFUL"
    bannerHeding2= "SOLUTION NOW!"/>
    </header>
 );
}

export default Header;