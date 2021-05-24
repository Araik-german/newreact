import React from 'react'
import BlockElements from './blockElements'
import './block.css'


function Blocks(props){
   return(
     <div className="firsOne">
        <h2>
        Vivamus laoreet

        </h2>
      <div className="mmm">
   {  props.block.map(blo=>{ 
     return <BlockElements
    p={blo.title} key={blo.id}  discp={blo.discription} />
   })}
   </div>
   </div>
   )
}
export default Blocks