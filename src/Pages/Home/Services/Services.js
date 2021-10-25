import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
  const [services, setServices] = useState([])
  useEffect(() => {
    fetch('services.json')
      .then(res => res.json())
      .then(data => setServices(data));
  }, [])
  
  return (
        <div className="container">
            <h2 className="text-primary my-3">Our services</h2>
            <div className="row g-3">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
  );
};

export default Services;