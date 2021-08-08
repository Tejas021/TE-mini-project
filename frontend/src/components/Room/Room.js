import React from 'react'
import Navbar from '../utilities/Navbar'
import ChatBox from './ChatBox'
import "./Room.css"
const Room = () => {
    const participants=[{id:1,name:"Tejas"},{id:2,name:"Yogesh"},{id:3,name:"Akshay"},{id:4,name:"Asim"},{id:4,name:"Naman"},{id:5,name:"Shivam"}]
    return (
        <div>
            <Navbar/>
               <div class="container mt-5">
      <div class="row">
        <div class="col-md-3 p-2">
          <div class="bg-warning my-5 px-5 py-3">
            <h3>Room name</h3>
          </div>
          <div class="px-5 m-5 btn btn-danger">Leave Room</div>
        </div>
        <div class="col-md-6 p-2">
          <div class="my-5 bg-warning p-1">
            <ChatBox/>
          </div>
        </div>
        <div class="col-md-3 p-2">
          <div class="my-5 p-3 bg-warning">
            <h3>Room Participants</h3>
           
           {participants.map(participant=><div key={participant.id} class="bg-dark text-center text-light p-1 m-1">
              <h5>{participant.name}</h5>
            </div>)}
           
         
           
          </div>
        </div>
      </div>
    </div>
        </div>
     
    )
}

export default Room