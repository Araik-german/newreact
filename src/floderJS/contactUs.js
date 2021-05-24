import React from 'react'
import './contacts.css'
import Strings from './strings'


// console.log(valMain)


  
 function ConactUs (props){


 const val=(Object.values(props.infos))
   const valMain= val.map(elem=>{
     return <p>{elem}</p>
     
})

     let key=(Object.keys(props.infos));
   const keyMain= key.map(elem=>{
     return <p>{elem}</p>
   })
      return(
         <div className="contactPart">
            <div id="contB" className="contactBlock">
               
                  <Strings
                  valMain={valMain}
                  keyMain={keyMain}
                  />
               
                  
                  
               

              
            </div>
         </div>
      )
};
export default ConactUs