import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

function Home(props) {
    let navigate = useNavigate();
    const [userName,setUserName]=useState("");
    const [password,setPassword]=useState("");
    const user="admin";
    const pass="1234"
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(userName);
        console.log(password);
        if(user===userName && pass===password){
            console.log("Success")
        navigate(`/LoginSuccess`);
        
        }
        else{
        navigate(`/LoginFail`);
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}> 
            <label htmlFor='name'>UserName</label>
             <input type="text" id='name' value={userName} onChange={(e)=>{setUserName(e.target.value)}}></input><br/>
             <label htmlFor='pass'>Password</label>
             <input type="password" id='pass' value={password} onChange={(e)=>{setPassword(e.target.value)}}></input><br/>
             <button >Submit</button>
             </form>
        </div>
    );
}

export default Home;