import React from 'react'

function Capsule() {
    return (
        <div className='col-3'>
            <div className="card" style={{ width: "300px", height: "120px" }}>
                <div className="card-body">
                    <div className="d-flex h-100 w-100">
                        <div className="d-grid">
                            <img style={{ margin: "auto" }} height={75} width={75} src="https://i.pinimg.com/originals/a5/56/3d/a5563d5eaa1e9076ddddad22496df333.png" alt="Logo" />
                        </div>
                        <div className="d-flex flex-column justify-content-center ps-3" >
                            <strong>30 Lakh +</strong>
                            Downloads
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Capsule