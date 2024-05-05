import React, { useState } from 'react'
import axios from 'axios';

//export default function Login() {
const Login =()=>{
  const [email, setEmail]=useState("");
  const[password, setPassword]=useState("");

  const handleSubmit=async()=>{
  const respone= await axios.post('http://localhost:8086/validate',(email, password));
  console.log(respone.data);
  };
return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>

<label>Email</label>
<input type='email' name='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
<br/>
<label>Password</label>
<input type='password' name='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
<br/>


<input type="submit" value="LOGIN"/>

</form>
    </div>
  )
};
export default Login;
