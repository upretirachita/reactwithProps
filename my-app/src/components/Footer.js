import React from 'react';
import './Footer.css';
import Banner from './Banner';
import 
{FaTwitterSquare,FaFacebookSquare,FaPinterestSquare,FaVimeoSquare,FaGooglePlusSquare,FaGithubSquare
} from 'react-icons/fa';

const Footer = () => {
  return(
    <div className = "footer-part">
    <Banner
     butBannerHeader = "CONTACT US!!"
     bannerHeading1="GET IN "
     spanBanner="touch"
     bannerHeding2= "WIth US NOW!"/>
      <footer>
      <div id="footer-items">
      
        <div className="foot-item" id="about-us">
          <h4>ABOUT US</h4>
          <p>Lorem ipsum sdolor sit amet, consectetuer adipiscing elit,</p>
          <address>
            Adress 12
            <br/> Town 10000
            <br/> Country
            <br/> +35862345
          </address>
        </div>
        <div class="foot-item" id="latest-tweets">
          <h4>LATEST TWEETS</h4>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</p>
        </div>
        <div class="foot-item" id="latest-posts">
          <h4>LATEST POSTS</h4>
          <p class="foot-post" id="first-post">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
          <p class="foot-post">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</p>
        </div>
        <div class="foot-item" id="flickr">
          <h4>FLICKR</h4>
          <div id="flicker-main">
            <div class="black-square" id="b1"></div>
            <div class="black-square" id="b2"></div>
            <div class="black-square" id="b3"></div>
            <div class="black-square" id="b4"></div>
            <div class="black-square" id="b5"></div>
            <div class="black-square" id="b6"></div>
            <div class="black-square" id="b7"></div>
            <div class="black-square" id="b8"></div>
          </div>
        </div>
      </div>
      <div id="copyRight">
        <h4>COPYRIHT ALL RIGHTS RESERVED 2018</h4>
        <div id="icons">
          <a href="" class="footerIcon"><FaTwitterSquare/></a>
          <a href="" class="footerIcon"><FaFacebookSquare/></a> 
          <a href="" class="footerIcon"><FaPinterestSquare/></a> 
          <a href="" class="footerIcon"><FaVimeoSquare/></a>
          <a href="" class="footerIcon"><FaGooglePlusSquare/></a> 
          <a href="" class="footerIcon"><FaGithubSquare/></a>  
        </div>
      </div>
    </footer>
    </div>
    );

}

export default Footer;