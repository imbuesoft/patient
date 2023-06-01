import './Benefits.css'
function Benefits() {
return (
    <div className="main-benefits">
        <h4 className="mb-3">MediPract Care Benefits</h4>
        <div className="row pt-1 benefit-content border-bottom">
            <div className="col-2" >
                <img src="https://images.ctfassets.net/a5lr4xmo2i3k/2xufnsZix9uLWmWWkbNaxu/6997aef3a99f8a99b9a45c32cadbcd82/Sergeon.png" height="50px"  />
            </div>
            <div className="col-10 mb-3">
                <h6>Expert Surgeons</h6>
                <span>Qualified & Experienced Specialists</span>
            </div>
        </div>
        <div className="row pt-3 benefit-content border-bottom">
            <div className="col-2">
                <img  style={{alignItems:"center"}} src="https://images.ctfassets.net/a5lr4xmo2i3k/1L36TSH9NMU9denDrc8Yhl/1b5d17a92c2f2ef4fbff63b4f1a17728/Technology.png" height="50px"  />
            </div>
            <div className="col-10 pb-3">
                <h6>Advanced Surgical Procedures</h6>
                <span>Employing Modern & Cutting-edge Medical Technologies</span>
            </div>
        </div>
        <div className="row pt-3 benefit-content border-bottom">
            <div className="col-2">
                <img src="https://images.ctfassets.net/a5lr4xmo2i3k/5nP8zLd8tNn080KeWO39MV/6d63e457cce6fb18f00d11f712ae1aaa/Customer_Support.png" height="50px" />
            </div>
            <div className="col-10 pb-3">
                <h6>Personal Care Assistants</h6>
                <span>Assistance at every step of your journey Post-Operative Care & Support</span>
            </div>
        </div>
        <div className="row pt-3 benefit-content border-bottom">
            <div className="col-2">
                <img src="https://images.ctfassets.net/a5lr4xmo2i3k/gOSjV3UsQYuIM7QGW5esC/97e1b1ca749c3be7c39d90dd64bff4d7/Group_4662.png" height="50px" />
            </div>
            <div className="col-10 pb-3">
                <h6>Financial Aid & Assistance</h6>
                <span>100% transparency in Pricing and No-Cost EMI Options available</span>
            </div>
        </div>
    </div> 
)
}
export default Benefits;