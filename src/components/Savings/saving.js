import "../../css/saving.css"
import React from "react"
import Card from "react-bootstrap/Card";
import Savingpig from "../../Assets/savingpig.png"
import { Container, Row, Col } from "react-bootstrap";
import DefiCards from "./subComponent/DefiCard"
import investor from "../../Assets/investor.png";
import defi1 from "../../Assets/defi1.png";
import defi2 from "../../Assets/defi2.png";
import defi3 from "../../Assets/defi3.png";
import defi4 from "../../Assets/defi4.png";
import card11 from "../../Assets/card1-1.png"
import card12 from "../../Assets/card1-2.png"

import card21 from "../../Assets/card2-1.png"
import card22 from "../../Assets/card2-2.png"

import card31 from "../../Assets/card3-1.png"
import card32 from "../../Assets/card3-2.png"

import card41 from "../../Assets/card4-1.png"
import card42 from "../../Assets/card4-2.png"
import { CgDrive } from "react-icons/cg";



function Savings() {
    return (<section>
        <Container fluid className="saving-section" id="home">
            <Container className="saving-content">
                <Row>
                    <Col md={7} className="home-header">

                        <h1 className="heading-name">
                            <strong > JHINGA Savings</strong>
                        </h1>
                        <h6 style={{ paddingBottom: 15 }} className="heading">
                            Simple and Secure. Search popular coins and start earning.
                        </h6>
                    </Col>

                    <Col md={5} sm={5} xs={5} style={{ paddingBottom: 20 }}>
                        <img
                            src={Savingpig}
                            alt="home pic"
                            className="img-fluid homelogo"
                            style={{ maxHeight: "280px" }}
                        />
                    </Col>
                </Row>
            </Container>

        </Container>
        <Container className="card-list">
            <Card className="defi-card defi1">
                <Row>
                    <Col className="savingLeftPart" style={{textAlign:"left", padding:"30px 50px"}} md={8}>
                    <img style={{height:"5em"}} src={card11}/>
                    <h3 style={{color:"white"}}>UNISWAP <strong>PROTOCOL</strong></h3>
                    <p style={{color:"white"}}>Swap, earn, and build on the leading decentralized crypto tradingnprotocol.</p>
                    <small style={{color:"#FF007A"}}>Visit Now</small>
                    </Col>
                    <Col md={4}>
                    <img className="savingcardLogo" style={{height:"13em"}} src={card12} />
                    </Col>
                </Row>
            </Card>
            <Card className="defi-card defi2">
                <Row>
                    <Col className="savingLeftPart" style={{textAlign:"left", padding:"30px 50px"}} md={8}>
                    <img style={{height:"4em"}} src={card21}/>
                    <h3 style={{color:"#D1884F"}}>PancakeSwap</h3>
                    <p style={{color:"#2C1262"}}>Trade, earn, and win crypto on the most popular decentralized platform in the galaxy.</p>
                    <small style={{color:"#633001"}}>Visit Now</small>
                    </Col>
                    <Col md={4}>
                    <img className="savingcardLogo" style={{height:"13em"}} src={card22} />
                    </Col>
                </Row>
            </Card>
            <Card className="defi-card defi3">
                <Row>
                    <Col className="savingLeftPart" style={{textAlign:"left", padding:"30px 50px"}} md={8}>
                    <img style={{height:"4em"}} src={card31}/>
                    <h3 style={{color:"#FFFFFF"}}>SushiSwap</h3>
                    <p style={{color:"#E8E8E8"}}>Be a DeFi Chef with Sushi.</p>
                    <small style={{color:"#37A1E9"}}>Visit Now</small>
                    </Col>
                    <Col md={4}>
                    <img className="savingcardLogo" style={{height:"13em"}} src={card32} />
                    </Col>
                </Row>
            </Card>
            <Card className="defi-card defi4">
                <Row style={{lineHeight:"4"}}>
                    <Col className="savingLeftPart" style={{textAlign:"left", padding:"30px 50px"}} md={8}>
                    <img style={{height:"3.5em"}} src={card41}/>
                    <h3 style={{color:"#C9DFFF"}}>Defi Swap</h3>
                    <small style={{color:"#C9DFFF"}}>Visit Now</small>
                    </Col>
                    <Col md={4}>
                    <img className="savingcardLogo savingcard4" style={{position:"relative", top:"25%"}} src={card42} />
                    </Col>
                </Row>
            </Card>
        </Container>
    </section>

    )
}
export default Savings;