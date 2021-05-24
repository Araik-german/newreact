import React from 'react'
import './header.css'


function Header(){
      return(
         <div className='header'>
            <div className="links">
               <a href="#contB">Contact Us</a>
               <button>Components</button>
            </div>
            <div className="backMidle">
               <h1>The Factory</h1>
               <p>THE BEST PLACE FOR WORK TOGETHER</p>
               <a href="#getT">
                     <button>Get in touch</button>
               </a>
            </div>
         </div>
      )
};
export default Header