import React from 'react'

function Capsule() {
    return (
        <div className='col-12   col-md-6 col-lg-4 col-xl-3 col-xxl-3 py-2'>
            <div className="card m-auto" style={{ width: "auto", height: "auto", maxWidth:"18em", borderRadius: "1em" }}>
                <div className="card-body">
                    <div className="h-100 w-100 row">
                        <div className="col-2 col-sm-4 d-grid ">
                            <img className='m-auto m-sm-0 me-sm-auto' height={75} width={75} src="https://i.pinimg.com/originals/a5/56/3d/a5563d5eaa1e9076ddddad22496df333.png" alt="Logo" />
                        </div>
                        <div className="col-10 col-sm-8 ps-4 d-flex text-center  text-sm-start flex-column justify-content-center" >
                            <strong>50 Lakh +</strong>
                            Downloads
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Capsule