import React from 'react'
import './Newdashboard.css';

const servicesData = [
  {
    id: 1,
    title: 'Categories',
    description: 'First level grouping of items into categories to be done here.',
    icon: "Manage",
  },
  {
    id: 2,
    title: 'Sub-Categoris',
    description: 'Second level grouping of items under a single category here.',
    icon: "Manage",
  },
  {
    id: 3,
    title: 'Items',
    description: 'All items to be manged here.Assigning of modifiers variants...',
    icon: "Manage",
  },
  {
    id: 4,
    title: 'Modifiers',
    description: 'Create combos/options here.Eg choose extra toppings.',
    icon: "Manage",
  },
  {
    id: 5,
    title: 'Variants',
    description: 'Master to be manage small,medium.large etc variants here.',
    icon: "Manage",
  },
  {
    id: 6,
    title: 'Units',
    description: 'Configure units for sales and purchase transactions using...',
    icon: "Manage",
  },
  {
    id: 7,
    title: 'Pricebooks',
    description: 'Lets you define a spacific set of proces and make it exclusive for...',
    icon: "Manage",
  },
];
const Newdashboard = () => {
  return (
    <div>
      <div className='navbar nav-mainbar col-6 col-md-4 col-lg-3 col-xxl-2 py-3 px-2 '>
        <img className='headerimg' src='https://ciferon.com/wp-content/uploads/2022/05/cropped-Ciferon-Logo-.png ' alt='Ciferon' />
        <div className='headericon'>
          Support &nbsp;
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M256 80C149.9 80 62.4 159.4 49.6 262c9.4-3.8 19.6-6 30.4-6c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48c-44.2 0-80-35.8-80-80V384 336 288C0 146.6 114.6 32 256 32s256 114.6 256 256v48 48 16c0 44.2-35.8 80-80 80c-26.5 0-48-21.5-48-48V304c0-26.5 21.5-48 48-48c10.8 0 21 2.1 30.4 6C449.6 159.4 362.1 80 256 80z" /></svg>
        </div>
      </div>
      <div className='dashboardtitle'>
        Menu Management
      </div>
      {servicesData.map((service) => (

        <div className="container servicecard mt-3">
          <div className="info">
            <div className='row-1'><h4>{service.title}</h4></div>
            <div className='row-2'><p>{service.description}</p></div>
          </div>
          <div className='row-3'><p className='pxx'>{service.icon}<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-telegram" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none" /> <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" /> </svg></p></div>

        </div>
      ))}
    </div>
  )
}

export default Newdashboard
