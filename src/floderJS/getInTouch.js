import React from 'react'
import './inputs.css'

 function Inputs(){
    return(
       <div id="getT" className="boxis">
          <h1>
             Get in touch
         </h1>
          <div className="enterBoxis">
             <input type="text" placeholder="Name"/>
             <input type="email"  placeholder="Email"/>
          </div>
          <div className="messageBox">
             <input type="text" placeholder="Enter your message"/>
          </div>
          <div className="checkBoxis">
             
             <div>
                  <input type="checkbox" name="email"/>
                  <label for="email">Email me a copy</label>
             </div>
             <div>
                  <input type="checkbox" name="human"/>
                  <label for="human">I am a human</label>
             </div>
          </div>
          <div className="sendBoxis">
             <button>Send message</button>
             <input type="submit" value="Reset"/>
          </div>
       </div>
    )

 }
 export default Inputs