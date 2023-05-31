  import React from 'react';
import './Card.css';
import videoconsult from './videoconsult.png';

const servicesData = [
  {
    id: 1, 
    image: videoconsult,
    title: 'Instant Video Consultation',
    description: 'Connect within 60 secs'
  },
  {
    id: 2,
    image: 'https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_find_doctors.png',
    title: 'Find Doctors Near You',
    description: 'Confirmed appointments'
  },
  {
    id: 3,
    image: 'https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_medicines.png',
    title: 'Medicines',
    description: 'Essentials at your doorstep'
  },
  {
    id: 4,
    image: 'https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_lab_tests.png',
    title: 'Lab Tests',
    description: 'Sample pickup at your home'
  },
  {
    id: 5,
    image: 'https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_surgeries.png',
    title: 'Surgeries',
    description: 'Sample pickup at your home'
  },
];

const Service = () => {
  const service = servicesData[0];

  return (
       
    <div className='container mt-4'>
      {servicesData.map((service) => (
    
        <div className="card servicecard">
        <img src={service.image} alt="Card Image" className='card-img servicecardimg' />
        <div className="info">
          <div className='row-1'><h3>{service.title}</h3></div>
          <div className='row-2'><p>{service.description}</p></div>
        </div>
      </div>
      ))}
    </div>

  );
};
export default Service;