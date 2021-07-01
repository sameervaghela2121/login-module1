import React, { useState } from 'react'
import axios from 'axios';
import ReactHtmlParser from 'react-html-parser';
import { Link } from 'react-router-dom';
import './DisplayPost.css';


const DisplayPost = () => {
    const [fdata, setFdata] = useState([]);
    // console.log(fdata)
    
    axios.get("http://localhost:3000/posts")
        .then((response)=>{
            setFdata(response.data)
        })
        .catch((error)=>console.log(error))
    return (
        <div className="container-sam my-3">
            {
                fdata.map((d)=>{
                    return(
                        <>
                            <div class="card bg-light border-primary mx-3" style={{"width" : "18rem"}}>
                                {/* <img class="card-img-top" src="..." alt="Card image cap"/> */}
                                <div class="card-body" key={d.id}>
                                    <h4>{d.title}</h4>
                                    <hr className="bg-primary"/>
                                    <p>{ReactHtmlParser(d.description)}</p>
                                    <hr className="bg-primary"/>
                                    <p>Author: {d.author}</p>
                                    {/* <Link to='/blog-page'>Read More</Link> */}
                                </div>
                            </div>
                            <br />
                        </>
                    )
                })
            }
            
        </div>
    )
}

export default DisplayPost
