import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import logintodash from './reducers/logon';
import { logoutact } from './actions/index';
import NewPost from './NewPost';
import DisplayPost from './DisplayPost';

const Dashboard = () => {
    const dispatch = useDispatch();
    const token = useSelector(state => state.logintodash);
    const postedcall = useSelector(state => state.postreducerfun);
    // console.log(token)
    const onlogoutbtn = () => {
        dispatch(logoutact());
        console.log("Token from dashboard",token)
        
    }
    return (
        <div>
            <h1>Welcome to Dashboard {token.name}</h1>
            <button onClick={()=>{onlogoutbtn()}} >Log-Out</button>
            <NewPost/>
            <h2>Post Available!!</h2>
                <div>
                    <DisplayPost/>
                </div>
        </div>
    )
}

export default Dashboard
