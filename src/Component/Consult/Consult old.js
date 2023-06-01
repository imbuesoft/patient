import './Consult.css';

const Consult = () => {
    return (
        <>
            <div className="mt-5 container-fluid mainDiv">
                <div>
                    <div className="title">
                        <h1 className='title-text'>Skip the travel!</h1>
                        <h1 className='title-text mt-0'>Take Online Doctor Consultation</h1>
                    </div>
                    <div>
                        Private consultation + Audio call · Starts at just ₹199
                    </div>
                    <div className='imgs'>
                        <img src="https://images1-fabric.practo.com/dr-bhavik-saglani-1488189287-58b3f76740540.jpg/thumbnail" alt="profile" height="42px" width="42px" className='profile-img' />
                        <img src="https://images1-fabric.practo.com/dr-milind-kulkarni-1484306142-5878b6de533af.jpg/thumbnail" alt="profile" height="42px" width="42px" className='profile-img' />
                        <img src="https://s3-ap-southeast-1.amazonaws.com/practo-fabric/dr-sidharth-verma-1482421214-585bf3deb1bf3.jpg/thumbnail" alt="profile" height="42px" width="42px" className='profile-img' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Consult;