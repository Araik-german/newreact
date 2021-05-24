import React from 'react'
import './footer.css'

function Footer (){
   return(
      <div className="all">
         <div>
            <h3>
                About us
            </h3>
            <span>
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet consectetur dolor
            </span>
         </div>

         <div>
             <h3>
                Do you like ? Share this !
             </h3>
             <div className="logs">
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-facebook-f"></i></a>
                <a href="#"><i class="fab fa-linkedin-in"></i></a>
             </div>
             <span>
                © Untitled | Website created with Mashup Template/Unsplash
             </span>
         </div>
        

         <div>
            <h3>
                Subscribe to newsletter
            </h3>
            <input id="ent" type="text"/>
            <input id="ok" type="submit" value="OK"/>
         </div>
         
         
      </div>
   )
}
export default Footer