export default function Thumbnail(props) {
    return (
        <>
            <div className="card border-light mt-3">
                <span className="position-absolute fw-bold text-white px-2 p-1 rounded-pill" style={{fontSize:"11px",backgroundColor:"#47b85a"}}>-10%</span>
                <div className="d-flex align-items-center justify-content-center" style={{height:"140px",width:"130px"}}>
                <img src={props.path} style={{height:props.height ,width:props.width}} className="rounded" />
                </div>
                <span className="card-title pt-2" style={{fontSize:"13px",textAlign:"left"}}>{props.title}</span>
                <span style={{fontSize:"13px",textAlign:"left"}}><b>MRP : ₹ {props.dp}</b> <del style={{color:"gray", fontSize:"12px",textAlign:"left"}}>₹ {props.price}</del></span>
            </div>
        </>
    )
}