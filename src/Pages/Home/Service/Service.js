import React from 'react';

const Service = (props) => {
  const {name,price,description,img} = props?.service||{}
  // console.log(props.service);

  return (
    <div>
      <img src={img} alt="" /> 
      <h3> {name} </h3>
      <h3>  {price} </h3>
      <p>{description}</p>
    </div>
  );
};

export default Service;