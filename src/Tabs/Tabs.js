import React, { useState } from 'react';
import InfoContain from './InfoContain';
import './Tabs.css'
import Stories from './Stories';
import Consult_QA from './Consult_QA';
import Healthfeed from './Healthfeed';

const TabsComponent = () => {
  const tabs = [
    { id: 1, title: 'Info', content: <InfoContain/> },
    { id: 2, title: 'Stories', content: <Stories/> },
    { id: 3, title: 'Consult Q&A', content: <Consult_QA/> },
    { id: 4, title: 'Healthfeed', content: <Healthfeed/> },
  ]
  const [activeTab, setActiveTab] = useState(1);
  const handleClose =() =>{
    setActiveTab('')
  }
  return (
    <div className='containerForTabs mt-5'>
      <ul className="nav nav-tabs border-0">
        {
          tabs.map((tab) => (
          <li key={tab.id} className="nav-item text-dark">
            <button 
              className={`nav-link ${tab.id === activeTab ? 'fw-bold text-white bg-primary' : ''}`} 
              onClick={() => setActiveTab(tab.id)}>
              {tab.title}
            </button>
          </li>
          ))
        }<i class="bi bi-x-circle close fs-5" onClick={handleClose}></i>
      </ul>
      <div>
        {
          tabs.filter((tab) => tab.id === activeTab).map((tab) => (
            <div key={tab.id}>
              {tab.content}
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default TabsComponent;
