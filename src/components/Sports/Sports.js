import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWater } from '@fortawesome/free-solid-svg-icons'
import './Sports.css'
import React, { useEffect, useState } from 'react';
import Sport from '../Sport/Sport';
import Cart from '../Cart/Cart';

const Sports = () => {
    const [activities, setActivity] = useState([]);
    const [activityTime, setActivityTime] = useState(0);

    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setActivity(data))
    },[])

    function handleAddToList(receivedTime){
        const newTime = parseInt(activityTime)+ parseInt(receivedTime);
        setActivityTime(newTime);
        // console.log(activityTime)
    }

    

    return (
        <div className='container-fluid'>
            <div className="row">
                <div className="col-lg-9 left-part">
                    <div className="logo">  
                        <h1><FontAwesomeIcon icon={faWater} className='water-icon'></FontAwesomeIcon>Marinio <span>Water Sports</span></h1>
                    </div>
                    <h3>Select today's sports</h3>

                    <div className="card-column row">
                        {
                            activities.map(activity => <Sport 
                                activity={activity}
                                handleAddToList = {handleAddToList}
                                key = {activity.id}
                                ></Sport>)
                        }
                    </div>

                    <div className="qa row">
                        <div class="card">
                            <div class="card-body">
                                <div className="card-title">Q1: How does React work?</div>
                                <div className="card-text">Ans. React goes through its virtual DOM ,creates a list of those changes that need to be made to the actual DOM and then does it all in one single process. It uses Babel compiler to compile JSX to pure JS code.</div>
                            </div>
                            <div class="card-body">
                                <div className="card-title">Q2: Difference between props and state?</div>
                                <div className="card-text">Ans. Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. Props are readable but we can't modify it from anywhere other than the place it was sent.</div>
                            </div>
                            <div class="card-body">
                                <div className="card-title">Q1: Use of useEffect</div>
                                <div className="card-text">Ans. By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we'll refer to it as our “effect”), and call it later after performing the DOM updates.</div>
                            </div>
                        </div>

                        
                    </div>
                </div>
                
                <div className="col-lg-3 right">
                    <Cart activityTime = {activityTime}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Sports;