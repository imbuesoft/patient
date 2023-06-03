import React from 'react'

const Check = () => {
  return (
    <div className="container" style={{ marginTop: '20px' }}>
      <div className="row card-deck">
        <div className="col-md-6 mb-2">
          <div className="card">
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between align-items-center" style={{ borderBottom: '0.5px solid #f1f1f1', fontSize: '20px' }}>
                  <span style={{fontSize:'15px'}}><b>Print "Kot comments" on bills</b></span>
                  <input type="checkbox" className="ais-RefinementList-checkbox float-end" style={{ width: '20px', height: '20px' }} />
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center" style={{ borderBottom: '0.5px solid #f1f1f1', fontSize: '20px' }}>
                     <span style={{fontSize:'15px'}}><b>Print "amount" on KOT</b></span>
                  <input type="checkbox" className="ais-RefinementList-checkbox float-end" style={{ width: '20px', height: '20px'}}  />
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center" style={{ borderBottom: '0.5px solid #f1f1f1', fontSize: '20px' }}>
                     <span style={{fontSize:'15px'}}><b>Print "change table" on KOT</b><br/>Whenever you'll switch the table after taking the order,<br/>'Change Table' will get printed on KOT</span>
                  <input type="checkbox" className="ais-RefinementList-checkbox float-end" style={{ width: '20px', height: '20px'}}  />
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center" style={{ borderBottom: '0.5px solid #f1f1f1', fontSize: '20px' }}>
                     <span style={{fontSize:'15px'}}><b>Disable itmes grouping on cart</b></span>
                  <input type="checkbox" className="ais-RefinementList-checkbox float-end" style={{ width: '20px', height: '20px'}}  />
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center" style={{ borderBottom: '0.5px solid #f1f1f1', fontSize: '20px' }}>
                     <span style={{fontSize:'15px'}}><b>Group items by category on KOT</b><br/>This will print the items on KOT category wise</span>
                  <input type="checkbox" className="ais-RefinementList-checkbox float-end" style={{ width: '20px', height: '20px'}}  />
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center" style={{ borderBottom: '0.5px solid #f1f1f1', fontSize: '20px' }}>
                     <span style={{fontSize:'15px'}}><b>Redirect to table screen after KOT print</b></span>
                  <input type="checkbox" className="ais-RefinementList-checkbox float-end" style={{ width: '20px', height: '20px'}}  />
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center" style={{ borderBottom: '0.5px solid #f1f1f1', fontSize: '20px' }}>
                     <span style={{fontSize:'15px'}}><b>Print guest name on KOT</b></span>
                  <input type="checkbox" className="ais-RefinementList-checkbox float-end" style={{ width: '20px', height: '20px'}}  />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-2">
          <div className="card">
            <div className="card-body">
            <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between align-items-center" style={{ borderBottom: '0.5px solid #f1f1f1', fontSize: '20px' }}>
                     <span style={{fontSize:'15px'}}><b>Disable KOT cancel after bill print</b><br/>Once the bill is printed user will not allowed to cancel the KOT</span>
                  <input type="checkbox" className="ais-RefinementList-checkbox float-end" style={{ width: '20px', height: '20px'}}  />
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center" style={{ borderBottom: '0.5px solid #f1f1f1', fontSize: '20px' }}>
                     <span style={{fontSize:'15px'}}><b>Disable KOT after for online orders</b><br/>For all online orders,KOT will not print</span>
                  <input type="checkbox" className="ais-RefinementList-checkbox float-end" style={{ width: '20px', height: '20px'}}  />
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center" style={{ borderBottom: '0.5px solid #f1f1f1', fontSize: '20px' }}>
                     <span style={{fontSize:'15px'}}><b>Should not ask reason while KOT cancel</b><br/>Whenever you cancel the KOT,it will not ask for reason,<br/>(We suggested not to active this setting)</span>
                  <input type="checkbox" className="ais-RefinementList-checkbox float-end" style={{ width: '20px', height: '20px'}}  />
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center" style={{ borderBottom: '0.5px solid #f1f1f1', fontSize: '20px' }}>
                     <span style={{fontSize:'15px'}}><b>Print Kot & Bill for delivery orders</b><br/>With this setting KOT & Bill get printed at place</span>
                  <input type="checkbox" className="ais-RefinementList-checkbox float-end" style={{ width: '20px', height: '20px'}}  />
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center" style={{ borderBottom: '0.5px solid #f1f1f1', fontSize: '20px' }}>
                     <span style={{fontSize:'15px'}}><b>Remove guest number validation</b><br/>Number validation form length where minilength will be 7<br/>and maxlangth will be 15</span>
                  <input type="checkbox" className="ais-RefinementList-checkbox float-end" style={{ width: '20px', height: '20px'}}  />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-2">
          <div className="card">
            <div className="card-body">
            <ul className="list-group list-group-flush">
              <li className="list-group-item d-flex justify-content-between align-items-center" style={{ borderBottom: '0.5px solid #f1f1f1', fontSize: '20px' }}>
                     <span style={{fontSize:'15px'}}><b>Print Kot & Bill for dining orders</b><br/>With this setting KOT & Bill get printed at once</span>
                  <input type="checkbox" className="ais-RefinementList-checkbox float-end" style={{ width: '20px', height: '20px'}}  />
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center" style={{ borderBottom: '0.5px solid #f1f1f1', fontSize: '20px' }}>
                     <span style={{fontSize:'15px'}}><b>Print Kot & Bill for pickup orders</b><br/>With this setting KOT & Bill get printed at once</span>
                  <input type="checkbox" className="ais-RefinementList-checkbox float-end" style={{ width: '20px', height: '20px'}}  />
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center" style={{ borderBottom: '0.5px solid #f1f1f1', fontSize: '20px' }}>
                     <span style={{fontSize:'15px'}}><b>Disable bill print for online orders</b></span>
                  <input type="checkbox" className="ais-RefinementList-checkbox float-end" style={{ width: '20px', height: '20px'}}  />
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center" style={{ borderBottom: '0.5px solid #f1f1f1', fontSize: '20px' }}>
                     <span style={{fontSize:'15px'}}>Customer selection is mandatory for all orders<b></b></span>
                  <input type="checkbox" className="ais-RefinementList-checkbox float-end" style={{ width: '20px', height: '20px'}}  />
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center" style={{ borderBottom: '0.5px solid #f1f1f1', fontSize: '20px' }}>
                     <span style={{fontSize:'15px'}}><b>Ask guest details before starting the table</b></span>
                  <input type="checkbox" className="ais-RefinementList-checkbox float-end" style={{ width: '20px', height: '20px'}}  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Check;
