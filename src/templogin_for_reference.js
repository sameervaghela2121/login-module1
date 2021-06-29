import React, { useState } from 'react'
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom'
import Dashboard from "./Dashboard";
import { useDispatch, useSelector } from 'react-redux';
import { loginact, loginactsuccess, loginactfail, logoutact } from "./actions/index";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState('');
    const [tokenid, setTokenid] = useState("");
    const [tempdata, setTempdata] = useState([]);
    const [userdata, setUserdata] = useState([]);
    const config = { headers: { 'Content-Type': 'application/json' }};
    const stateselector = useSelector(state => state.stateselector);
    const dispatch = useDispatch();
    


    const onlogin = (e) => {
        e.preventDefault();
        if(!email && !password){
            alert("Field Shouldn't be blank!!")
        }
        else{
            console.log("Login: ",email,password);
            axios.post("/auth/login",{
                email,
                password,
            },config)
            .then(res => {
                console.log("Api response data:",res.data);
                setUserdata(res.data.data);
                // console.log("UserData",userdata);
                // setTokenid(res.data.meta.token);
                // console.log("TokenId",tokenid);      
                // if(res.data){
                //     return(<Dashboard/>)
                // }
            })
            .catch(error=>console.log(error))
            // localStorage.setItem("token",tokenid);
            // var x = localStorage.getItem("token")
            // console.log("Session Storage Item: ",x);
        }
    }
    return (
        <div className="container my-3">
            <h1>Login Here!</h1>
            <form onSubmit={onlogin}>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" value={email} name="email" onChange={(e)=>setEmail(e.target.value)} placeholder="Enter email"/>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password"/>
            </div>
            <button type="submit" className="btn btn-primary my-3">Login</button>
            </form>
            <Link to="/register">Don't Have an Account? Make One!</Link>
        </div>
    )
}

export default Login
