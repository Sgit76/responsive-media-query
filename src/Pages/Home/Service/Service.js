import React from 'react';
import './Service.css';
const Service = (props) => {
    const {name , price, time , img , discription} = props.service;
    return (
        <div className="service">
            <img src={img} alt="" />
            <h3>{name}</h3> 
            <h5>Price: {price} Time: {time} hrs</h5> 
            <p className="px-3">{discription}</p>
        </div>
    );
};

export default Service;