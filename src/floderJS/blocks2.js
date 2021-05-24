import React from 'react'
import BlockElements from './blockElements'
import './block.css'


function Blocks2(props){
   return(
     <div className="main">
        <h2>Consectetur adipiscing</h2>
      <div className="mmm">
         
   {  props.block.map(blo=>{ 
      
     return  <BlockElements
     p={blo.title} key={blo.id}  text={blo.text} />
   })}


   </div>
</div>
   )
}
export default Blocks2