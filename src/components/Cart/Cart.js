import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationPin } from '@fortawesome/free-solid-svg-icons'
import './Cart.css'
const Cart = () => {
    const [breaks, setBreak] = useState(0);

    function breakTimeHandler(element){
        console.log(element.innerText);
    }
    

    return (
        <div>
            <div className="row">
                <div className="col-lg-12 col-sm-12">
                    <div className="person-img">
                        <img src={require('./img/ahmed3.jpg')} alt="profile-pic" />
                    </div>
                    <div className="person-info">
                        <h5 className='pt-2'>S. Ahmed</h5>
                        <p><FontAwesomeIcon icon={faLocationPin} className='water-icon'></FontAwesomeIcon> Alberta, Canada</p>
                    </div>
                    <div className="person-physical-info pt-2 pb-4">
                        <ul className='d-flex justify-content-center text-center'>
                            <li className='d-flex flex-column px-4'>60kg <span>Weight</span></li>
                            <li className='d-flex flex-column px-4'>6.5 <span>Height</span></li>
                            <li className='d-flex flex-column px-4'>25yrs <span>Age</span></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* break part*/}
            <div className="row pb-4">
                <div className="col-lg-12">
                    <h5>Add A Break</h5>
                    <div className="breaks">
                        <ul className='d-flex justify-content-center'>
                            {/* <li className='px-2'><button onClick={()=>breakTimeHandler(this)}>10</button>s</li> */}
                            {/* <li className='px-2'><button onClick={breakTimeHandler}>20</button>s</li>
                            <li className='px-2'><button onClick={breakTimeHandler}>30</button>s</li>
                            <li className='px-2'><button onClick={breakTimeHandler}>40</button>s</li>
                            <li className='px-2'><button onClick={breakTimeHandler}>50</button>s</li> */}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-12">
                    <h5>Sports Details</h5>

                    <div className="exercise-time">
                        <p>Exercise time: seconds</p>
                    </div>
                    <div className="break-time">
                        <p>Break time: seconds</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;