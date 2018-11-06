import React from 'react';
import './ThirdBlockRight.css';

const ThirdBlockRight = ()=>{
    return(
        <div id="developement">
        <div class="tabs">
          <div class="tab">
            <input type="radio" id="tab-1" name="tab-group-1" checked></input>
            <label for="tab-1">DESIGN</label>
            <div class="tab-content">
              <h5>The Design</h5>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat
            
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat
              </p>
              <button>READ MORE</button>
            </div>
          </div>
          <div class="tab">
            <input type="radio" id="tab-2" name="tab-group-1"></input>
            <label for="tab-2">PRODUCTION</label>
            <div class="tab-content">
              <h5>Production</h5>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat
              </p>
              <button>READ MORE</button>
            </div>
          </div>
        </div>
      </div>
    );
}

export default ThirdBlockRight;