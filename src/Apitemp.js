import React from 'react'
import axios from 'axios'

const Apitemp = () => {
    const fetch = async() =>{
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
        console.log("ASync Response",response.data)
        console.log("CHECK")
    }
    return (
        <div>
            <button onClick={()=>{fetch()}}>FETCH</button>
        </div>
    )
}

export default Apitemp
