import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWater } from '@fortawesome/free-solid-svg-icons'
import './Sports.css'
import React, { useEffect, useState } from 'react';
import Sport from '../Sport/Sport';
import Cart from '../Cart/Cart';

const Sports = () => {
    const [activities, setActivity] = useState([]);
    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setActivity(data))
    },[])
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
                                key = {activity.id}
                                ></Sport>)
                        }
                    </div>
                </div>
                
                <div className="col-lg-3 right">
                    <Cart></Cart>
                </div>
            </div>
        </div>
    );
};

export default Sports;