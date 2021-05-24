import React from 'react'
import Blocks from '../floderJS/blocks'
import Blocks2 from '../floderJS/blocks2'
import '../App.css';

import Coleg from './coworking'
import Header from './header'
import ConactUs from './contactUs'
import Inputs from './getInTouch'
import Footer from './footer';








function App() {


  
const block = [
  {id:1, img:"", title:"Consectetur", discription:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet consectetur dolor. Phasellus ut lacus tellus. In pretium lobortis blandit."},
  {id:2, img:"", title:"Malesuada",discription:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet consectetur dolor. Phasellus ut lacus tellus. In pretium lobortis blandit."},
  {id:3, img:"", title:"Phasellus",discription:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet consectetur dolor. Phasellus ut lacus tellus. In pretium lobortis blandit."}
]
const infos={
  phone:': + 123 45 67 890',
  address:': 42 rue rouelle 75015, Paris',
  mail:': hello@email.com',
  openHours:': Mon - Fri : 9AM - 5PM'
}




  return (
    <div className="App">
      <Header/>
      <Blocks
      block={block}
      />
      <Coleg/>
      <Blocks2
      
      block={block}
      />
      <ConactUs
      infos={infos}/>
      <Inputs/>
      <Footer/>

    </div>
  );
}

export default App;
