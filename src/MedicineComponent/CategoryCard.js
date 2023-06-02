import React from 'react'

const CategoryCard = () => {
    return (
        <div className="col-md-2">
            <div className="card">
                <div style={{ textAlign: "center" }}>
                    <img src="https://www.netmeds.com/images/category/l2/thumb/iv_infusion.jpg?v=1684228921" alt="Category" className="rounded" style={{ height: 90, width: 90 }} />
                </div>
                <p style={{ fontSize: "12px", fontWeight: "500", textAlign: "center" }}>Category</p>
            </div>
        </div>
    )
}

export default CategoryCard;