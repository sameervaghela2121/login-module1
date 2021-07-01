import React, { useState } from 'react'
import axios from 'axios';
import ReactHtmlParser from 'react-html-parser';


const DisplayPost = () => {
    const [fdata, setFdata] = useState([]);
    // console.log(fdata)
    
    axios.get("http://localhost:3000/posts")
        .then((response)=>{
            setFdata(response.data)
        })
        .catch((error)=>console.log(error))
    return (
        <div style={{"display":"flex"}}>
            {
                fdata.map((d)=>{
                    return(
                        <>
                            <div class="card" style={{"width" : "18rem"}}>
                            {/* <img class="card-img-top" src="..." alt="Card image cap"/> */}
                            <div class="card-body">
                                <h5>{d.title}</h5>
                                <p>{ReactHtmlParser(d.description)}</p>
                                <a>{d.author}</a>
                            </div>
                            </div>
                        </>
                    )
                })
            }
            
        </div>
    )
}

export default DisplayPost
