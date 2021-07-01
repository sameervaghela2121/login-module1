import React, { useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginact } from "./actions/index";
// import logintodash from './reducers/logon';


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const config = { headers: { 'Content-Type': 'application/json' }};
    // const token = useSelector(state => state.logintodash);
    const dispatch = useDispatch();
    var result;
    


    const onlogin = (e) => {
        e.preventDefault();
        if(!email && !password){
            alert("Field Shouldn't be blank!!")
        }
        else{
            // console.log("Login: ",email,password);
            axios.post("/auth/login",{
                email,
                password,
            },config)
            .then(res => {
                // console.log("Api response data:",res.data);
                result = res.data;
                // console.log("RESULT STORED",result);
                // console.log("TOKEN IS:",result.meta);
                dispatch(loginact({
                    id:result.data.id,
                    name:result.data.name,
                    email:result.data.email,
                    token:result.meta.token
                }));
                // console.log(store.getState());
                
            })
            .catch(error=>{
                alert('Email or Password is wrong!')
            })
            // console.log("RESULT OUTSIDE REPONSE:",result);

            // console.log("token selected from code",token);

            // console.log("Store outside fetch",store.getState());
            // store.subscribe(()=>{
            //     console.log('value in state',store.getState().logintodash.token);
            // })
            // if(token.token){
            //     return <Dashboard/>
            // }
            
            
            
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


  
//   const mapDispatchToProps = dispatch => ({
//     loginact: result => dispatch(loginact(result))
//   });
  

// export default connect(null, mapDispatchToProps)(Login)
export default Login
