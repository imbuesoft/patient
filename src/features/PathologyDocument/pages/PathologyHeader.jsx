import { Divider, Row, Col, Typography, QRCode } from "antd"
const { Title, Text } = Typography

const Strong = ({ children }) => <Text style={{ fontWeight: "700" }}>{children}</Text>
const StrongDiv = ({ children }) => <div style={{ fontWeight: "700" }}>{children}</div>


const PathologyHeader = ({ data = { name: "Yash M. Patel", age: "21", sex: "Male", pid: "555", address: "125, Shivam Bungalow, S G Road, Ahmedabad", refName: "Dr. Hiren Shah", regDate: "02:31 PM 02 Dec, 21", collectedDate: "03:01 PM 02 Dec, 21", reportedDate: "04:49 PM 02 Dec, 21" } }) => {
    return (
        <>
            <Row>
                <Col span={8}>
                    <div style={{display:"flex"}}>
                        <div style={{flexGrow:1}}>
                            <Title level={5} style={{ margin: "0", fontSize:"1.3em" }} >{data.name}</Title>
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <Text>Age : {data.age} Years</Text>
                                <Text>Sex : {data.sex}</Text>
                                <Text>PID : {data.pid}</Text>
                            </div>
                        </div>
                        <QRCode value="https://jaysparmar303.000webhostapp.com/" style={{margin:"auto"}} bordered={false} size={70} />
                    </div>
                </Col>

                <Col span={10}>
                    <div style={{ display: "flex", height: "100%" }}>
                        <div style={{ flexShrink: 0, height: "100%", width: "0.6px", background: "#ccc" }}></div>
                        <div style={{ flexGrow: "1", margin: "0 1em" }}>
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <Strong>Sample Collected At:</Strong>
                                <Text>{data.address}</Text>
                                <Text>Ref. By: <Strong>{data.refName}</Strong></Text>
                            </div>
                        </div>
                        <div style={{ flexShrink: 0, height: "100%", width: "0.6px", background: "#ccc" }}></div>
                    </div>
                </Col>

                <Col span={6} style={{ textAlign: "right", fontSize: "0.8rem", lineHeight: "1.1em" }} >
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <StrongDiv>Registered on:</StrongDiv>
                        <div>{data.regDate}</div>
                        <StrongDiv>Collected on:</StrongDiv>
                        <div>{data.collectedDate}</div>
                        <StrongDiv>Reported on:</StrongDiv>
                        <div>{data.reportedDate}</div>
                    </div>
                </Col>
            </Row>
            <div style={{ height:"1px", width:"100%", margin: "0.5em 0", background:"#ccc" }} ></div>
        </>
    )
}

export default PathologyHeader