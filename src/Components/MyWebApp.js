import React from 'react'
import { Divider, Row, Col } from 'antd'
import { Container } from "reactstrap"
import './css/style.css'

const iconResponsive = {
    fontSize: "4.5vw",
    display: "flex",
    justifyContent: "space-around",
    justifyItems: "center"
}
const fontResponsive = {
    fontSize: "1.25vw",
}

class MyWebApp extends React.Component {
    render() {
        return (

            <Container>
                <Divider>
                    <div className="head">My Web Application</div>
                </Divider>
                <Row style={{ textAlign: "center" }}>
                    <Col span={8}>
                        <a href="tempconvert">                      
                        <div>
                            <i class="fas fa-thermometer-half" style={iconResponsive}></i>
                            <p style={fontResponsive}>TempConvert</p>
                        </div></a>
                    </Col>
                    <Col span={8}>
                        <a href="contact-cal">
                            <div>
                                <i class="far fa-credit-card" style={iconResponsive}></i> 
                                <p style={fontResponsive}>Contact-Cal</p>
                            </div>
                        </a>
                    </Col>
                    <Col span={8}>
                        <a href="appgrade">
                            <div>
                                <i class="fas fa-calculator" style={iconResponsive}></i>
                                <p style={fontResponsive}>CalGrade</p>
                            </div>
                        </a>
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default MyWebApp