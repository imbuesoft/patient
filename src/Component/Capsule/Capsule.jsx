import React from 'react'

function Capsule() {
    return (
        <div className='col-12 col-md-6 col-lg-4 col-xl-auto py-3 p-lg-0'>
            <div className="card m-auto" style={{ width: "auto", height: "auto", maxWidth:"18em", borderRadius: "1em" }}>
                <div className="card-body">
                    <div className="h-100 w-100 flex-column flex-lg-row d-flex">
                        <div className="d-grid ">
                            <img className=' m-auto  me-md-auto' height={75} width={75} src="https://i.pinimg.com/originals/a5/56/3d/a5563d5eaa1e9076ddddad22496df333.png" alt="Logo" />
                        </div>
                        <div className=" pt-3 pt-lg-0 px-3 d-flex text-center  text-lg-start flex-column justify-content-center" >
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