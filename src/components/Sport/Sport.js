import React from 'react';
import './Sport.css'

const Sport = (props) => {
    const {title, image, desc, time} = props.activity;
    
    return (
        <div className="col-lg-4">
            <div className='card mb-3'>
                <img class="card-img-top" src= {image} alt="Card image cap"/>
                <div class="card-body">
                    <h5 class="card-title">{title}</h5>
                    <p class="card-text">{desc}</p>
                    <p class="card-text">For Age: 20-25</p>
                    <p class="card-text time">Time Required: {time}min</p>
                    <button onClick={() => props.handleAddToList(time)} className="btn btn-primary">Add to list</button>
                </div>
            </div>
        </div>
    );
};

export default Sport;