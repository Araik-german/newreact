import React from 'react'
import foto from '../images/img-02.jpg'
import './block.css'

function BlockElements(props){

   return(
      
            <div className="block">
               
            <img src={foto}/>
               <h1>{props.p}</h1>
            <span>{props.discp}</span>
            <span>{props.text}</span>
            
            </div>
   
   )
}
export default BlockElements