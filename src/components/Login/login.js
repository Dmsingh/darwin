import axios from 'axios'
import React,{useState} from 'react'
import  './login.css'
import { useHistory } from "react-router-dom";

function Login() {
  const [state, setstate] = useState({
    "uid":"","password":"","blocked":0
  })
  const history = useHistory();
  const changeHandler=(e)=>{
    
    setstate({...state,[e.target.name]:e.target.value})
  }
  const submit=()=>{
    console.log(state)

    if(state.uid&&state.password)
    {
      const data={
        "uid":state.uid,"password":state.password,"blocked":0
        }
        axios({
          method: 'post',
          url: 'https://myphysio.digitaldarwin.in/api/login/',
          data: data
        })
        .then((response)=>{
          localStorage.setItem('darwinData', JSON.stringify(response.data))
          alert("Your are sucessfully Logged In")
          history.push('/dashboard')
         
        })
        .catch((error)=>{
          alert(error)
          alert('Username or Password is incorrect')
    
          
        })
    }
    else{
      alert("Both Filled should not be empty.")
    }
 
  }
  // console.log(state)
    return (
   
        <div className="login">
	<h1>PHYSIOAI</h1>
  <p className="welcome">Welcome Back!</p>
  
      <div className="impdiv">
        <p className="important">*</p>
        <p className="user">Username</p>
      </div>
    	<input type="text" name="uid" placeholder="Username" required="required" onChange={(e)=>changeHandler(e)} />
       <div className="impdiv">
        <p className="important">*</p>
        <p className="user">Password</p>
      </div>
        <input type="password" autoComplete="off" name="password" placeholder="Password" onChange={(e)=>changeHandler(e)} required="required" />
      <p className="forget">Forget Password?</p>
      <div className="footerdiv">
    
     
        <button  onClick={submit} className="btn btn-large">Login</button>
        
      </div>
 
</div>
            
        
    )
}

export default Login
