import React, { useState } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import ReactHtmlParser from 'react-html-parser';
import { useDispatch } from 'react-redux';
import { posttodash } from "./actions/index";
import { useSelector } from 'react-redux';
import axios from 'axios';
// import * as FilePond from 'filepond';



const NewPost = () => {
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [imagefile, setImagefile] = useState("");
    const [author, setAuthor] = useState("");
    const [description, setDescription] = useState("");
    const dispatch = useDispatch();
    const postedcall = useSelector(state => state.postreducerfun);

    // const gettindata = axios.get('http://localhost:3001/posts/')
    // console.log(gettindata.data)


    const handledesc = (e,editor) => {
        const data = editor.getData();
        setDescription(data);
    }

    // const handlefileupload = (e) => {
    //     console.log("CHECKING FILE UPLOADED",e.target.files[0]);
    //     setImagefile(URL.createObjectURL(e.target.files[0]));
    //     // setImagefile()
    // }

    const onpostbtnclicked = (e) => {
        
        if(!title && !description && !author && !category){
            alert("To Make Post, Fields Shouldn't be empty!");
        }
        else{
            e.preventDefault();
            // console.log("This is cateory of the file",category);
            // console.log("This is image uploaded hook:_ ",imagefile);
            // alert(title);
            // alert(description);
            // alert(author);
            dispatch(posttodash({
                title:title,
                category:category,
                description:description,
                author:author,
            }));
            axios.post("http://localhost:3000/posts", {title:title,image:imagefile[0],category:category,description:description,author:author })
            setTitle('');
            // setImagefile();
            setCategory('');
            setDescription('');
            setAuthor('');


            
        }
        console.log("CALLING POST DATA: ",postedcall);
    }
    
    return (
        <div>
            <div className="container my-3">
                <h2>Create a New Post</h2>
                <form onSubmit={onpostbtnclicked}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Title</label>
                    <input type="text" className="form-control" value={title} onChange={(e)=>setTitle(e.target.value)} id="exampleInputEmail1" placeholder="Enter Title"/>
                </div><br />
                {/* <div className="form-group">
                    <label htmlFor="exampleFormControlFile1">-----Upload Image Here-----</label><br />
                    value={imagefile} 
                    <input type="file" className="form-control-file" onChange={(e)=>handlefileupload(e)} id="exampleFormControlFile1" />
                </div> */}
                <div className="form-group">
                    <label htmlFor="exampleInputCategory1">Category</label>
                    <input type="text" className="form-control" value={category} onChange={(e)=>setCategory(e.target.value)} id="exampleInputCategory" placeholder="Enter Category"/>
                </div>              
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Description</label>
                    <CKEditor editor={ ClassicEditor } data={description} onChange={handledesc} placeholder="Enter Description"/>
                </div>
                <br />
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Author</label>
                    <input type="text" className="form-control" value={author} onChange={(e)=>{setAuthor(e.target.value)}} id="exampleInputPassword1" placeholder="Enter Author's Name"/>
                </div>
                <button type="submit" className="btn btn-primary my-3">Post!</button>
                </form>
                
                {/* <div>{title}</div>
                <div>{ReactHtmlParser(description)}</div>
                <div>{author}</div> */}

                


            </div>
        </div>
    )
}

export default NewPost