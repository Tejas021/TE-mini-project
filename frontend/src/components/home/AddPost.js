import React from 'react'
import {useState} from "react"
const AddPost = ({posts,setPosts}) => {
    
const [newpost, setnewpost] = useState({content:"",caption:"",likes:"",user:""})


const onPostSubmit =(e)=>{
e.preventDefault();

fetch("http://localhost:5000/add-post",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(newpost)
}).then(res=>res.json()).then(res=>setPosts([...posts,res]))
}

    return (
        <div>

        <form onSubmit={e=>onPostSubmit(e)}> 
            <h1 className="text-warning">ADDPOST</h1>
            <input className="form-control" placeholder="content" value={newpost.content} onChange={e=>setnewpost({...newpost,content:e.target.value})}/>
            <input className="form-control" type="text" placeholder="caption" value={newpost.caption} onChange={e=>setnewpost({...newpost,caption:e.target.value})}/>
            <input className="form-control" placeholder="user" value={newpost.user} onChange={e=>setnewpost({...newpost,user:e.target.value})}/>
            <input className="form-control" placeholder="likes" value={newpost.likes} onChange={e=>setnewpost({...newpost,likes:e.target.value})}/>
            <button>add</button></form>

           
        </div>
    )
}

export default AddPost
