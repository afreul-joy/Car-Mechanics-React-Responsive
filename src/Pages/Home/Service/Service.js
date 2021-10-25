import React from 'react';
import './Service.css'

const Service = ({ service }) => {
  const {name,price,description,img} =service
  return (
    <div className="col-lg-4 col-md-6 col-12">
      <div className='service p-3'>
         <img className="img-fluid" src={img} alt="" />
            <h3>{name}</h3> 
            <h5>Price: {price}</h5>
            <p className="px-3">{description}</p>
      </div>    
    </div> 
  );
};

export default Service;