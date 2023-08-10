import React, {useState} from 'react'
import './Converter.css';

const Converter = () => {

  const message = localStorage.getItem("name");
  const [type,setText]= useState('');
  const handChange=(e)=>{
    setText(e.target.value);

  }

  console.log(type);
  return (
    <><div>
   <div id='converterPage'>
   <h1>Welocme {message}!</h1>
      <textarea id ='textarea' rows={20} cols={100} onChange={handChange}></textarea>
     </div> 
     <br></br>
     <div>
     <button id='convert'>Convert</button>
     </div>
     <div id='output'>
      
     </div>
     </div>
    </>
  )
}

export default Converter