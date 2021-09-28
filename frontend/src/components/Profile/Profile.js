import React from 'react'
import { useContext,useState,useEffect } from 'react'
import Navbar from "../utilities/Navbar"
import {useParams} from "react-router-dom"
import Post from "../home/Post"
import {UserContext} from "../../UserContext"
import UpdateProfile from "./UpdateProfile"
import "./Profile.css"
const Profile = () => {
    const [display, setdisplay] = useState(false)
    const [posts,setPosts]=useState([])
    const {user,setUser}=useContext(UserContext)
    const params = useParams();
    console.log(params)
    useEffect(()=>{

        const fetchPosts=async()=>{
           const fetchposts=await fetch(`http://localhost:5000/getposts/${params.id}`,{
                method:"GET",
                headers:{"Content-type":"application/json"},
            }).then(res=>(res.json())).catch(error=>console.log(error))
        
            const final=await fetchposts
       
            setPosts(final)
            
        }
      fetchPosts()
      
    
    },[params.id])

    const logout=()=>{
        fetch("http://localhost:5000/logout",{method:"GET",credentials:"include"});
        setUser(null)}
    return (
        <div>
            <Navbar/>
          
         <div className="text-center ">
         <img src="https://source.unsplash.com/random/300x300" className="profile-image"/>
         </div>

         <h3 className="text-light text-center mt-3">{user.name}</h3>
         <h5 className="text-warning text-center mb-5">{user.department}</h5>

        
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                <h5 className="text-light ">Bio: <span className="text-warning">{user.bio}</span></h5>
         <h5 className="text-light ">City: <span className="text-warning">{user.city}</span></h5>
         <h5 className="text-light ">Email: <span className="text-warning">{user.email}</span> </h5>
                </div>
                <div className="col-md-6  text-warning text-center row">
                    <div className="col-md-3"><h3>213</h3>Followers</div>
                    <div className="col-md-3"><h3>213</h3>Following</div>
                    
                    <button className="btn btn-warning col-md-3 mb-5 " onClick={()=>setdisplay(!display)}>Edit</button>
                    <button className="btn btn-warning  col-md-3 mb-5 " onClick={logout}>
log out
         </button>
                    </div>

            </div>
        </div>
     
        

        
        <div className="container homecontainer">
            
            {display?<UpdateProfile user_id={user._id} setUser={setUser}/>:<></>}
        
        <h3 className="text-warning">Your Posts:</h3>
        {posts.map(post=><Post key={post._id} Name="you" Caption={post.caption} likes={post.like} img={post.imgUrl}/>)}

        </div>
      
        </div>
    )
}

export default Profile
