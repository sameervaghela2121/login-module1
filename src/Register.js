import React, { useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password_confirmation, setPassword_confirmation] = useState("");
    const config = { headers: { 'Content-Type': 'application/json' }};

    const onregister = (e) => {
        e.preventDefault();
        if(!name || !email || !password || !password_confirmation){
            alert("Field Shouldn't be blank!!")
        }
        else{
            console.log("RegisterData: ",name,email,password,password_confirmation);
            axios.post("/auth/register",{
                name,
                email,
                password,
                password_confirmation
            },config)
            setName("");
            setEmail("");
            setPassword("");
            setPassword_confirmation("");
        }

    }
    return (
        <div className="container my-3">
            <h1>Register Here!</h1>
            <form onSubmit={onregister}>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Name</label>
                <input type="text" className="form-control" value={name} name="name" onChange={(e)=>setName(e.target.value)} placeholder="Enter Name"/>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" value={email} name="email" onChange={(e)=>setEmail(e.target.value)} placeholder="Enter email"/>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password"/>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Confirm Password</label>
                <input type="password" className="form-control" value={password_confirmation} onChange={(e)=>{setPassword_confirmation(e.target.value)}} placeholder="Confirm Password"/>
            </div>
            <button type="submit" className="btn btn-primary my-3">Register</button>
            </form>
            <Link to="/login">Allready Have an Account? Sign in Here!</Link>
        </div>
    )
}

export default Register
