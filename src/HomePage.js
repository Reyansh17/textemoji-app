import { useState } from "react";
const Home = () => {
    
    const[name,setname]=useState('reyansh')
    const[age,setage]=useState(19)
    // const handleClickAgain=(name)=>{
    //     console.log('hello '+name)
    // }
    
    const handleClick=()=>{
        setname("avi")
        setage(22)

        
    }
    const[image,setimage]=useState(null)

     function handlechange(e){
        setimage(e.target.value)
     }

    return ( 

        <div className="home">
            <h2>Homepage</h2>
            <p>
                {name}<span> {age}</span>
            </p>
            {/* <button onClick={handleClick}>
                Click me
            </button> */}
           {/* <input type="text" onChange={handlechange} /> */}
    

            </div>
     );
}
 
export default Home;