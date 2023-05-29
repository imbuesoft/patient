import { Divider, Row, Col, Typography, QRCode } from "antd"
const { Title, Text } = Typography

const Strong = ({ children }) => <Text style={{ fontWeight: "700" }}>{children}</Text>
const StrongDiv = ({ children }) => <div style={{ fontWeight: "700" }}>{children}</div>


const PathologyHeader = ({data}) => {
    return (
        <>
            <Row>
                <Col span={8}>
                    <Title level={4} style={{ margin: "0", fontWeight: "700" }} >{data.name}</Title>
                    <div style={{ display: "inline-flex", flexDirection: "column" }}>
                        <Text>Age : {data.age} Years</Text>
                        <Text>Sex : {data.sex}</Text>
                        <Text>PID : {data.pid}</Text>
                    </div>
                    <QRCode value="https://jaysparmar303.000webhostapp.com/" style={{ display: "inline", float: "right" }} bordered={false} size={70} />

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
                        <StrongDiv style={{ margin: "1em" }}>Registered on:</StrongDiv>
                        <div>{data.regDate}</div>
                        <space style={{ height: "0.4em" }}></space>
                        <StrongDiv>Collected on:</StrongDiv>
                        <div>{data.collectedDate}</div>
                        <space style={{ height: "0.4em" }}></space>
                        <StrongDiv>Reported on:</StrongDiv>
                        <div>{data.reportedDate}</div>
                    </div>
                </Col>
            </Row>
            <div style={{ height: "1px", width: "100%", margin: "0.5em 0", background: "#ccc" }} ></div>
        </>
    )
}

export default PathologyHeader