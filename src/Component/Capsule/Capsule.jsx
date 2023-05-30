import React from 'react'

function Capsule() {
    return (
        <div className='col-6 col-md-4 col-lg-3 col-xxl-3 py-2'>
            <div className="card m-auto" style={{ width: "auto", height: "auto", maxWidth:"15em", borderRadius: "1em" }}>
                <div className="card-body p-0">
                    <div className="d-flex flex-wrap flex-sm-nowrap h-100 w-100">
                        <div className="d-grid m-3 w-100">
                            <img style={{ margin: "auto" }} height={75} width={75} src="https://i.pinimg.com/originals/a5/56/3d/a5563d5eaa1e9076ddddad22496df333.png" alt="Logo" />
                        </div>
                        <div className="d-flex my-1 w-100 text-center  text-sm-start flex-column justify-content-center" >
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