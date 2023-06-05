import React, { useState } from 'react'
import './Newsidebar.css';
import Newdashboard from './Newdashboard';
import logo from './favicon.ico';

const sidebarData = [
    {
        id: 1,
        svg: <i className='bx bxs-dashboard logoitems'  ></i>,
        name: 'DashBoard',
        link: '',
    },
    {
        id: 2,
        svg: <i className="fa-solid fa-bell logoitems"></i>,
        name: 'Notifications',
        link: '',
    },
    {
        id: 3,
        svg: <i className="fa-solid fa-store logoitems"></i>,
        name: 'Store',
        link: '',
    },
    {
        id: 4,
        svg: <i className="fa-solid fa-chart-simple logoitems"></i>,
        name: 'Analysis',
        link: '',
    },
    {
        id: 5,
        svg: <i className="fa-solid fa-location-dot logoitems"></i>,
        name: 'Location',
        link: '',
    },
    {
        id: 6,
        svg: <i className="fa-solid fa-gear logoitems"></i>,
        name: 'Settings',
        link: '',
    },
    {
        id: 7,
        svg: <i className="fa-solid fa-right-from-bracket logoitems"></i>,
        name: 'Logout',
        link: '',
    },
]

const Newsidebar = () => {
    const [action, setAction] = useState(false);

    const handelchange = () => {
        setAction(!action)

    }
    return (
        <div className=' conat'>
            <div className={` sidebar sidebar-main ${action ? 'sidebar-collapsed' : ''}`}>
                <div className='top'>
                    <div className='div-logo'>
                        <img src={logo} alt='profile image' className='main-logo' />
                        <span className='maintitle'>ImbueSoft</span>
                    </div>
                    <i className='bx bx-menu menubtn' value={action} onClick={handelchange} ></i>
                </div>
                <div className='user'>

                    <img src="data:image/jpeg;base64,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" alt='profile image' className='user-img' />
                    <div>
                        <p className='bold'>Meet&nbsp;Shingala</p>
                    </div>
                </div>
                {sidebarData.map((detail) => (
                    <ul>
                        <li>
                            <a href={detail.link}>
                                {detail.svg}
                                <span className='nav-item'>{detail.name}</span>
                            </a>
                            <span className='tip'>{detail.name}</span>
                        </li>
                    </ul>
                ))}
            </div>
            <div className='main-compo'>
                <Newdashboard />
            </div>
        </div>
    )
}

export default Newsidebar
