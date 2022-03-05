import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';
const Service = (props) => {
    const {_id , name , price, time , img , description} = props.service;
    return (
        <div className="service pb-3">
            <img src={img} alt="" />
            <h3>{name}</h3> 
            <h5>Price: {price} Time: {time} hrs</h5> 
            <p className="px-3">{description}</p>
            {/* Details info button for service */}
            <Link to={`/booking/${_id}`}>
                <button className="btn btn-warning">Booking {name}</button> 
            </Link>
        </div>
    );
};

export default Service;