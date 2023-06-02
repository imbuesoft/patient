import React from 'react'

const ItemCard = (props) => {
    return (
        <div className="col-md-3">
            <div className="card cat-item">
                <span className="position-absolute fw-bold text-white px-2 p-1 rounded-pill" style={{ fontSize: 11, backgroundColor: 'rgb(71, 184, 90)' }}>{props.discount}</span>
                <div style={{ textAlign: "center" }}>
                    <div className="d-flex align-items-center justify-content-center" style={{ height: 140, width: 130, }}>
                        <img src={props.path} alt={props.title} className="rounded" style={{ height: 90, width: 90 }} />
                    </div>
                </div>
                <span className="card-title pt-2" style={{ height: "60px", fontSize: 16, textAlign: 'left', fontWeight: '600' }}>{props.title}</span>
                <span style={{ fontSize: 13, textAlign: 'left' }}>{props.company}</span>
                <span style={{ fontSize: 13, textAlign: 'left' }}><b>MRP : ₹ {props.price}</b><del style={{ color: 'gray', fontSize: 12, textAlign: 'left' }}> ₹ {props.price + (props.price * 0.1)}</del></span>
                <button className="btn btn-success btn-sm mt-2" style={{ width: '100%' }}>Add to Cart</button>
            </div>
        </div>
    )
}

export default ItemCard