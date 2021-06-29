import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import logintodash from './reducers/logon';
import { logoutact } from './actions/index';
import { Redirect } from 'react-router-dom';

const Dashboard = () => {
    const dispatch = useDispatch();
    const token = useSelector(state => state.logintodash);
    console.log(token)
    const onlogoutbtn = () => {
        dispatch(logoutact());
        console.log(token)
        // <Redirect to="/login" />
    }
    return (
        <div>
            <h1>Welcome to Dashboard</h1>
            <button onClick={()=>{onlogoutbtn()}} >Log-Out</button>
            
        </div>
    )
}

export default Dashboard
