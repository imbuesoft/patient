import React, { useState } from 'react'
import './Dashboard.css';
const servicesData = [
  {
    id: 1, 
    title: 'Instant Video Consultation',
    description: 'Connect within 60 secs',
    icon:"Manage",
  },
  {
    id: 2,
    title: 'Find Doctors Near You',
    description: 'Confirmed appointments',
    icon:"Manage",
  },
  {
    id: 3,
    title: 'Medicines',
    description: 'Essentials at your doorstep',
    icon:"Manage",
  },
  {
    id: 4,
    title: 'Lab Tests',
    description: 'Sample pickup at your home',
    icon:"Manage",
  },
  {
    id: 5,
    title: 'Surgeries',
    description: 'Sample pickup at your home',
    icon:"Manage",
  },
  {
    id: 6,
    title: 'Surgeries',
    description: 'Sample pickup at your home',
    icon:"Manage",
  },
  {
    id: 7,
    title: 'Surgeries',
    description: 'Sample pickup at your home',
    icon:"Manage",
  },
];

const Dashboard = () => { 
  
  const [action, setAction] = useState(false);
  const handelchange = () => {
    setAction(!action);
  }
  return (
    <div className='main-side'>
    <div className={`sidebar-items ${action ? '' : 'sidebar-collapsed'}`}>
      <div className="title">

        <div className='side-listicon' title='List'>
          <svg xmlns="http://www.w3.org/2000/svg" value={action} onClick={handelchange} height="1em" viewBox="0 0 448 512" style={{ fill: "#f0f2f4" }}><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>
        </div>
      </div>
      <ul className='sidebar-button'>
        <li>
          <a href='/'>
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" style={{ fill: '#f5f5f5' }}><path d="M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z" /></svg>
            <span className='item'>Home</span>
          </a></li>
        <li><a href='/'>
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512" style={{ fill: "#dcdfe5" }}><path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" /></svg>
          <span className='item'>Share</span>
        </a></li>
        <li><a href='/'>
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" style={{ fill: "#f2f4f7" }}><path d="M288 448H64V224h64V160H64c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H288c35.3 0 64-28.7 64-64V384H288v64zm-64-96H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H224c-35.3 0-64 28.7-64 64V288c0 35.3 28.7 64 64 64z" /></svg>
          <span className='item'>Home</span>
        </a></li>
        <li><a href='/'>
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512" style={{ fill: "#ffffff" }}><path d="M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z" /></svg>
          <span className='item'>Home</span>
        </a></li>
        <li><a href='/'>
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" style={{ fill: "#ffffff" }}><path d="M160 80c0-26.5 21.5-48 48-48h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V80zM0 272c0-26.5 21.5-48 48-48H80c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V272zM368 96h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H368c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48z" /></svg>
          <span className='item'>Home</span>
        </a></li>
        <li><a href='/'>
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512" style={{ fill: "#fcfcfd" }}><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" /></svg>
          <span className='item'>Home</span>
        </a></li>
        <li><a href='/'>
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" style={{ fill: "#ecedee" }}><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" /></svg>
          <span className='item'>Home</span>
        </a></li>
        <li><a href='/'>
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" style={{ fill: "#e9eaed" }}><path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z" /></svg>
          <span className='item'>Home</span>
        </a></li>
      </ul>
    <div className='main-component'>
      <div>
      <div className='navbar nav-mainbar'>
        Ciferon
        <div className='icon-hp'>
            Support &nbsp;
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M256 80C149.9 80 62.4 159.4 49.6 262c9.4-3.8 19.6-6 30.4-6c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48c-44.2 0-80-35.8-80-80V384 336 288C0 146.6 114.6 32 256 32s256 114.6 256 256v48 48 16c0 44.2-35.8 80-80 80c-26.5 0-48-21.5-48-48V304c0-26.5 21.5-48 48-48c10.8 0 21 2.1 30.4 6C449.6 159.4 362.1 80 256 80z"/></svg>
        </div>
        </div>
        <div className='heading'>
            Menu Management
        </div>
      {servicesData.map((service) => (
    
        <div className="card servicecard mt-4">
        <div className="info">
          <div className='row-1'><h3>{service.title}</h3></div>
          <div className='row-2'><p>{service.description}</p></div>
        </div>
          <div className='row-3'><p className='pxx'>{service.icon}<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-telegram" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" /> </svg></p></div>
          
      </div>
      ))}
      </div>
    </div>
    </div>
    </div>
  )
}

export default Dashboard
