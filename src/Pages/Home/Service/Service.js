import React from 'react';
import './Service.css'

const Service = ({ service }) => {
  console.log(service);
  const {name,price,description,img} =service
  // console.log(props.service);

  return (
    <div className="service">
            <img src={img} alt="" />
            <h3>{name}</h3> 
            <h5>Price: {price}</h5>
            <p className="px-3">{description}</p>
    </div> 
  );
};

export default Service;