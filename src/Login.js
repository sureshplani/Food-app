import { useState } from 'react';
import './login.css'
import {  useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Login(){
const data={
    userName:"suresh16palani@gmail.com",
    password:"12345"
        }
         
const[email,setEmail]=useState("");
const[pws,setPws]=useState("");

    const navigate=useNavigate()
  
    function handleSumbmite (e) {
        e.preventDefault()
        if(data.userName!==email || data.password!==pws) {
            console.log("error")
            toast.error("wrong email or password")
        }
        else{
            console.log("succes")
            toast.success("login successfull")
            navigate('/Home')
           
          }
    }

    const inputStyle={
        borderRadius: "10px",
        border: "2px solid pink",
        padding: "10px",
        width: "200px",
        margin: "5px",   
    }

    const buttonStyle={
        borderRadius: "10px",
        border: "2px solid orange",
        padding: "10px",
        width: "200px",
        margin: "20px",
        backgroundColor: "orange",    
    }
    
    return(
    <div >
    <div className="container">

        <div className='box'>
          <h1>Login</h1>

    <form  onSubmit={(e)=> handleSumbmite(e) }>
    <input type='text' placeholder='Enter The Email' style={inputStyle} value={email}
    onChange={(e) => setEmail(e.target.value)}/>
   <br/>
     <input type='password' placeholder='Enter The Password' style={inputStyle} value={pws} 
     onChange={(e) => setPws(e.target.value)}/> 
    <br/>
    <button type='submit' style={buttonStyle}>Login</button>
      </form>
    </div>
    </div></div>
    )
}

export default Login