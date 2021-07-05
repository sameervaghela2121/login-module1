import React, { useState } from 'react'
import axios from 'axios';
import ReactHtmlParser from 'react-html-parser';
import { Link } from 'react-router-dom';
import './DisplayPost.css';
import LikeBtn from './LikeBtn';
import BlogPage from './BlogPage';


const DisplayPost = () => {
    const [fdata, setFdata] = useState([]);
    const [countedWord, setCountedWord] = useState(0);
    // console.log(fdata)
    
    // axios.get("http://localhost:3000/posts")
    //     .then((response)=>{
    //         // setFdata(response.data)
    //     })
    //     .catch((error)=>console.log(error))


    //Fetching Api Starts Here
    const fetch = async() => {
        const response = await axios.get("http://localhost:3000/posts")
        // console.log("Async Response: ",response.data)
        setFdata(response.data)
    }
    //Fetching Api Ends Here


    //Word COunter Code Begins Here!
    const checkfun = (e) => {
        // console.log("check",e);
        var sam = fdata.filter(function(f){
            return f.id === e
        })
        // console.log("SAM IS HERE:",sam[0].description)
        var numWords = 0;
        var text = sam[0].description;
        for(var i = 0; i<=text.length;i++){
            var currentCharacter = text[i];
            if(currentCharacter === " "){
                numWords += 1;
            }
        }
        // console.log(numWords + 1)
        setCountedWord(numWords+1);
        
    }
    //Word COunter Code Ends Here!
    return (
        <div className="container-sam my-3">
            <button className="btn btn-info" onClick={fetch}>Show Post</button>
            {
                fdata.map((d)=>{
                    return(
                        <div className="container my-3">
                            <div className="card border-info">
                                <div className="card-body">
                                    <div>Title: {d.title}</div><hr />
                                    <div>Description: {ReactHtmlParser(d.description)}</div>
                                    <hr />
                                    <div>Author: {d.author}</div>
                                </div>
                                <div>
                                    {/* <button className="btn" onClick={onlike}>👍{+count}</button> */}
                                    <LikeBtn Fdata={fdata}/>
                                    <button id={d.id} className="btn btn-info m-1" onClick={(e)=>(checkfun(d.id))}>Words in this post is:{countedWord} </button>
                                    <button className="btn btn-warning">Read More</button>
                                </div>
                            </div><br />
                            
                        </div>
                    )
                })
            }
            
        </div>
    )
}

export default DisplayPost
