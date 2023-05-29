

const PathologyFooter = ({data}) => {
    return (
        <>
            <div style={{ height: "1px", width: "100%", margin: "0.5em 0", background: "#ccc" }} ></div>
            <div style={{ display: "flex", fontSize: "11px" }}>
                <div>Thanks For Referance</div>
                <div style={{ margin: "0 0 0 14em" }}>*****End of Report*****</div>
            </div>
            <div style={{ display: "flex", fontSize: "0.8em", marginTop: "1em" }}>
                {
                    data?.doctors?.map((doctor, index) => {
                        return (
                            <div style={{ flexGrow: "1", display: "flex", flexDirection: "column", alignItems: "center" }} key={index}>
                                <img style={{ width: "10em" }} alt="signature" src={doctor.signature} />
                                <div>{doctor.name}</div>
                                <div>{doctor.qualification}</div>
                            </div>
                        )
                    })
                }
                {/* <div style={{ flexGrow: "1", display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <img style={{ width: "10em" }} alt="signature" src='https://i.fonts2u.com/bs/bs-signature-demo_4.png' />
                    <div>{data.DoctorName}</div>
                    <div>MD (Pathology)</div>
                </div> */}
                {/* <div style={{ flexGrow: "1", display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <img style={{ width: "10em" }} alt="signature" src='https://i.fonts2u.com/bs/bs-signature-demo_4.png' />
                    <div>Dr.Sachin Patil</div>
                    <div>Pathologist</div>
                </div>
                <div style={{ flexGrow: "1", display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <img style={{ width: "10em" }} alt="signature" src='https://i.fonts2u.com/bs/bs-signature-demo_4.png' />
                    <div>Priynka Patel</div>
                    <div>Lab Technician</div>
                </div> */}
                {/* <div className='pic'><img style={{width:"auto"}} alt="signature" src='https://i.fonts2u.com/bs/bs-signature-demo_4.png' /></div>
                <div className='pic'><img style={{width:"auto"}} alt="signature" src='https://i.fonts2u.com/bs/bs-signature-demo_4.png' /></div> */}
            </div>
            <div style={{fontSize:"0.8em" , textAlign:"center", marginTop:"1em"}}>Ganerated on : {data?.generateDate ? data?.generateDate : new Date().toLocaleString('en-US', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true })}</div>
        </>
    )
}

export default PathologyFooter