import React from 'react'




const Headers = () => {
  return (
    <div className='website'>
        <nav className="navbar bg-body-tertiary" style={{padding:'15px'}} >
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <img
                        width={150}
                        height={50}
                        src="https://ciferon.com/wp-content/uploads/2022/05/Ciferon-Logo-.png"
                        className="attachment-large size-large wp-image-279"
                        alt='logo'/>
                    </div>
                    <div className="col" style={{marginTop:'11px',marginRight:'15px'}}>
                    <button type="button" style={{color:'black',backgroundColor:'white',fontWeight:'600'}} class="btn btn-secondary btn-sm">Ciferon Hill Top</button>
                    </div>
                    <div className="col" style={{ display: 'flex', alignItems: 'center', }}>
                        <b style={{ fontSize: '15px', whiteSpace: 'nowrap',marginLeft:'50px',borderBottom: '1px dashed' }}>Share Your Feed Back</b>
                    </div>
                    <div className="col" style={{ display: 'flex', alignItems: 'center' }}>
                    <button type="button" style={{color:'black',backgroundColor:'white',fontWeight:'600',width:'150px',height:'48px'}} class="btn btn-secondary btn-sm">Call for Support 1234567890</button>
                    </div>
                    <div className="col" style={{ display: 'flex', alignItems: 'center', }}>
                    <button type="button" style={{color:'black',backgroundColor:'white',width:'35px'}} class="btn btn-secondary btn-sm"><b>0</b></button>
                    <button type="button" style={{color:'black',backgroundColor:'white',width:'150px',marginLeft:'10px'}} class="btn btn-secondary btn-sm">
                        <i className="fas fa-sync-alt" style={{ marginRight: '5px' }}></i> <b> Refresh POS</b>
                    </button>                    
                    </div>
                </div>
            </div>
        </nav>
    {/*Navbar */}
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
    <div className="container-fluid">
  <a className="navbar-brand" href="/">
    Dashboard
  </a>
  <button
    className="navbar-toggler"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#navbarNavDropdown"
    aria-controls="navbarNavDropdown"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item" style={{ marginLeft: '30px' }}>
        <a className="nav-link active" aria-current="page" href="/">
          POS
        </a>
      </li>
      <li className="nav-item dropdown" style={{ marginLeft: '30px' }}>
        <a
          className="nav-link dropdown-toggle active"
          href="/"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Menu
        </a>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item" href="/">
              Option 1
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="/">
              Option 2
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="/">
              Option 3
            </a>
          </li>
        </ul>
      </li>
      <li className="nav-item dropdown" style={{ marginLeft: '30px' }}>
        <a
          className="nav-link dropdown-toggle active"
          href="/"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Settings
        </a>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item" href="/">
              Option 1
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="/">
              Option 2
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="/">
              Option 3
            </a>
          </li>
        </ul>
      </li>
      <li className="nav-item" style={{ marginLeft: '30px' }}>
        <a className="nav-link active" href="/">
          Reports
        </a>
      </li>
      <li className="nav-item" style={{ marginLeft: '30px' }}>
        <a className="nav-link active" href="/">
          Learning
        </a>
      </li>
    </ul>
  </div>
</div>

    </nav>


</div>
  )
}

export default Headers
