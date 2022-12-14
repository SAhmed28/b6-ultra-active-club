import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationPin } from '@fortawesome/free-solid-svg-icons'
import './Cart.css'
import { addToDb, getStoredCart } from '../utilites/managedb';
// import { toast } from 'react-toastify';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = (props) => {
    const activityTime = props.activityTime;
    const [breaks, setBreak] = useState(0);

    useEffect(() => {
        const storedCart = getStoredCart();
        setBreak(storedCart.mins);
    },[breaks])
    

    function breakTimeHandler(value){
        setBreak(value);
        addToDb(value);
    }

    const notify = () => toast("Congratulations on your activity completion!");
    
    return (
        <div className='cart'>
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
                            <li className='d-flex flex-column px-3'>60kg <span>Weight</span></li>
                            <li className='d-flex flex-column px-3'>6.5 <span>Height</span></li>
                            <li className='d-flex flex-column px-3'>25yrs <span>Age</span></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* break part*/}
            <div className="row breaks">
                <div className="col-lg-12">
                    <h5>Add A Break</h5>
                    <div>
                        <ul className='d-flex'>
                            <li><button onClick={()=>breakTimeHandler(10)}>10</button>mins</li>
                            <li><button onClick={()=>breakTimeHandler(20)}>20</button>mins</li>
                            <li><button onClick={()=>breakTimeHandler(30)}>30</button>mins</li>
                            <li><button onClick={()=>breakTimeHandler(40)}>40</button>mins</li>
                            <li><button onClick={()=>breakTimeHandler(50)}>50</button>mins</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="row details">
                <div className="col-lg-12">
                    <h5>Sports Details</h5>

                    <div className="exercise-time">
                        <p>Activity time: <span>{activityTime}</span> mins</p>
                    </div>
                    <div className="break-time">
                        <p>Break time: <span>{breaks}</span> mins</p>
                    </div>

                    <div className="complete py-4">
                        <button onClick={notify}>Activity Completed</button>
                        <ToastContainer />
                    </div>
                </div>
            </div>

            
        </div>
    );
};

export default Cart;