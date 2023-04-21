import React, { useState } from 'react'
import './index.css';


function Index() {
const[register,setRegister]=useState(false)
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");
const [username,setUsername]=useState("");
const [loading,setLoading]=useState("");
const [error,setError]=useState("")
const handleSignin=()=>{
  setError("")
  setLoading(true);
  if(email === "" || password === ""  || username ===""  ){
    setError('Required field is missing ')
    setLoading(false)
  }
  loading().then((res)=>{
    console.log(res);
  })
}
const handleRegister=()=>{
  setError("")
  setLoading(true)
  if(email === "" || password === ""){
    setError("Required field is missing")
    setLoading(false)
  }else{
    setEmail(true).then((res)=>{
      setLoading(false)
      console.log(res);
        
    }).catch((error)=>{
      console.log(error);
      setError(error.message)
      setLoading(false)
    })
  }
}

  return (
    <div>    
        <div className='auth'>
            <div className='auth-container'>
                <p>Add another way to log using following services</p>
                <div className='sign-options'>
                     <div onClick={handleSignin} className='sign-options'>
                        <img src='https://www.bing.com/ck/a?!&&p=c9954e023198fb64JmltdHM9MTY3ODIzMzYwMCZpZ3VpZD0yZTk5Y2VkNS0xMmQ5LTY3MWMtMzNjOS1kYzE2MTM2YjY2ZDImaW5zaWQ9NTUzNw&ptn=3&hsh=3&fclid=2e99ced5-12d9-671c-33c9-dc16136b66d2&u=a1L2ltYWdlcy9zZWFyY2g_cT1Hb29nbGUlMjBHbWFpbCZGT1JNPUlRRlJCQSZpZD01MjQwRkUyOTJBOThERTlEQTNEQkFGMEJBRDQ4RkM4NkM5NUZBRDEx&ntb=1' alt='google'/>
                        
                        <p>Login within Google</p>
                  </div>
                </div>
                <div className='auth-login'>
                    <div className='auth-login-container'>
                        {
                           register ? (
                            <>
                            <div className='input-field'>
                             <p>User name</p>
                             <input value={username} onChange={(e)=>setUsername(e.target.value)} type='text' />
                             </div>
                             <div className='input-field'>
                             <p>Email</p>
                             <input value={email} onChange={(e)=>setEmail(e.target.value)} type='text' />
                             </div>
                             <div className='input-field'>
                             <p>Password</p>
                             <input type='password' />
                             </div>
                             <button style={{
                                marginTop:"10px"
                             }}>Register</button>
                             </> 
                           ) :(
                              <>
                              <div className='input-field'>
                             <p>Email</p>
                             <input   value={email} onChange={(e)=>setEmail(e.target.value)} type='text' />
                             </div>
                             <div className='input-field'>
                             <p>Password</p>
                             <input type='password' />
                             </div>
                             <button style={{
                                marginTop:"10px",
                                
                             }}>Login</button>

                              </>

                           )}
                           <p   onClick={()=>setRegister(!register)}  
                               style={{
                                  marginTop:"10px",
                                  textAlign:"center",
                                  color:"skyblue",
                                  textDecoration:"underline",
                                   cursor:"pointer"
                           }}>{register ? "Login" :"Register"} ? </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )}


export default Index