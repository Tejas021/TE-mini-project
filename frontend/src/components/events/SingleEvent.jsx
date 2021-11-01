import React from 'react'

const SingleEvent = ({event}) => {
    return (
        <div>

            <div class="card bg-dark border border-warning my-2 text-light" style={{"width": "100%"}}>
            <div class="row no-gutters">
                <div class="col-sm-5">
                    <img class="card-img" alt="new image1" src="img/carousel-1.jpg" style={{width:"100%",height:"100%"}}/>
                </div>
                <div class="col-sm-7">
                    <div class="card-body">
                        <h3 class="card-title text-warning">{event.name}</h3>
                        <p class="card-text"><span className="text-warning">Event Description: </span> {event.description}</p>
                        <a href={event.link} class="btn btn-warning">Know More</a>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default SingleEvent
