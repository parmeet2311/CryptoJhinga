import React, { useEffect, useState, Component } from "react";
import { useLocation } from "react-router-dom";
import Accordion from 'react-bootstrap/Accordion';

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

// import Dropdown from 'react-bootstrap/Dropdown';
import Modal from 'react-bootstrap/Modal';
import DropdownImg from "../../Assets/line-angle-right.png";
import DropdownButton from 'react-bootstrap/DropdownButton';
import IndImg from "../../Assets1/India.png";
import UsdImg from "../../Assets1/USA.png";
import EurImg from "../../Assets1/Europe.png";
import UkImg from "../../Assets1/UK.png";
import CoinBase from "../../Assets1/coinbase.png";
import Coin98 from "../../Assets1/98.png";
import tokenPocket from "../../Assets1/token.png";
import mathWallet from "../../Assets1/math.png";
import Metamask from "../../Assets1/metamask.png";
import clover from "../../Assets1/clover.png";
import fortmatic from "../../Assets1/Fortmatic.png";
import binance from "../../Assets1/Path.png"
import jhinga from "../../Assets1/jhinga.png";
import Payment from "../../Assets1/payment.png";
import { BsChevronLeft } from "react-icons/bs";
import dotL from '../../Assets1/Ellipse.png';
import dot from '../../Assets1/Ellipse_s.png';

import {
    Container,
    Row,
    Col,
    Dropdown,
    Button,
    ButtonGroup,
    SplitButton
} from "react-bootstrap";


// import ButtonPrimary from "../../../components/button/ButtonPrimary";  



const Launch = () => {

    const { pathname } = useLocation();

    const [tradeType, settradeType] = useState("buy");
    const [showtab, setShowTab] = useState(1);
    const [currentVal, setCurrentVal] = useState("");
    const [accordion, setAccordion] = useState(false);
    const [accordion1, setAccordion1] = useState(false);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [value, setValue] = useState('');
    const [onSearchTerm, setOnsearchTerm] = useState()
    const [token, setToken] = useState('select a token')
    const [show1, setShow1] = useState(false);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    function handleAccordion() {
        if (accordion === true) {
            setAccordion(false);
        } else {
            setAccordion(true);
        }
    }

    function handleAccordion1() {
        if (accordion1 === true) {
            setAccordion1(false);
        } else {
            setAccordion1(true);
        }
    }

    const onChange = (event) => {
        setValue(event.target.value);
    }
    const onSearch = (event) => {
        console.log(event.target.value)
    }


    return (
        <section className="launchPage" style={{ paddingTop: "150px" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
                <h1 style={{ left: "40%", position: "relative" }}>Primary Market</h1>
                <div style={{ left: "60%", position: "relative" }}>
                    <Dropdown as={ButtonGroup}>
                        {/* <DropdownToggle menuAlign="left" split /> */}
                        {/* <Dropdown.Menu> */}
                        <SplitButton
                            menuAlign={{ lg: "left" }}
                            title={currentVal === "" ? "Select a Network" : currentVal}
                        >
                            <strong><p>Select a Network</p></strong>
                            <Dropdown.Divider />
                            <Dropdown.Item onClick={() => setCurrentVal("Ethereum")} eventKey={1}>
                                Ethereum
                            </Dropdown.Item>
                            <Dropdown.Item onClick={() => setCurrentVal("BSC Network")} eventKey={2}>
                                BSC Network
                            </Dropdown.Item>
                        </SplitButton>
                        {/* </Dropdown.Menu> */}
                    </Dropdown>
                </div>
            </div>
            <Container className="launch-card">


                <div className="header">

                    {/* <Row>
                        <Col className={`launch-nav-item nv1 ${tradeType === "buy" ? "Mint-btn" : ""}`} onClick={() => settradeType("buy")}>
                            <p >MINT</p>
                        </Col>
                        <Col className={`launch-nav-item ${tradeType === "sell" ? "Burn-btn" : ""}`} onClick={() => settradeType("sell")}>
                            <p>BURN</p>
                        </Col>
                    </Row> */}
                    <nav className="launch-nav btn" style={{ color: "grey", display: "flex", justifyContent: "space-around", margin: "auto" }}>
                        <div> <p style={{ margin: "10px 0px" }} className={`launch-nav-item ${tradeType === "buy" ? "Mint-btn" : ""}`} onClick={() => settradeType("buy")}>MINT</p></div>
                        <div className="partition" />
                        <div> <p style={{ margin: "10px 0px" }} className={`launch-nav-item ${tradeType === "sell" ? "Burn-btn" : ""}`} onClick={() => settradeType("sell")}>BURN</p></div>
                    </nav>





                    {/* Mint tab start */}
                    <div>
                        <div className="cashItem" >
                            <p style={{ fontSize: "1.3em", color: "rgb(211, 206, 206)" }}>Cash</p>
                        </div>
                        <Row class="form-input" style={{ display: "flex", width: "100%", marginBottom: "10px" }}>
                            <Col md={9}>
                                <input type="number" className="input-launch" style={{ height: "3.5em", color: '#e9ecef' }} placeholder="Spend" />
                            </Col>
                            <Col style={{ backgroundColor: "#f7f7f7", maxHeight: "4.5em", borderTopRightRadius: "10px", borderBottomRightRadius: "10px" }} md={3}>
                                <p style={{ margin: "8px 0px" }}>{tradeType === "buy" ? <button className="selectToken" style={{ display: "contents" }} variant="primary" onClick={handleShow} ><div>{token === null ? '' : token}<img style={{ padding: "0 5px", height: "0.5em" }} src={DropdownImg} /></div></button> : <div style={{ display: "flex", maxHeight: "2.5em" }}><img style={{ height: "1.5em" }} src={jhinga} /><p>JHINGA</p> </div>}</p>
                            </Col>
                        </Row>
                        <Row class="form-input" style={{ textAlign: "left", width: "100%" }}>

                            <Col md={9}>

                            <Accordion style={{ paddingBottom: "10px" }} defaultActiveKey={['0']} alwaysOpen id="1" >
                                <Accordion.Item eventKey="0" style={{borderLeft: '1px solid gray'}}>
                                    {/* <Accordion.Header>1 JHINGA ≈ 1 Rs + Gas Fees</Accordion.Header> */}
                                    <Accordion.Header onClick={handleAccordion} ><strong><img style={{ margin: "5px",height:"20px" }} src={dotL} />{accordion === true ? "1 JHINGA ≈ 1 Rs + Gas Fees" : "Use Payment Method"}</strong></Accordion.Header>
                                    <Accordion.Body>
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header style={{marginLeft:"-18px"}} onClick={handleAccordion1}><strong><img style={{ margin: "5px",height:"20px" }} src={dotL} />{accordion1 === false ? "See Calculation" : "Hide Calculation"}</strong></Accordion.Header>
                                            <Accordion.Body>
                                                <p style={{ Color: "#C4C4C4", marginLeft:"-14px" }}><img style={{ margin: "5px" }} src={dot} />0.3% Blockchain Fee</p>
                                                <p style={{ Color: "#C4C4C4", marginLeft:"-14px" }}><img style={{ margin: "5px" }} src={dot} />0.2% Convenience Fee</p>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <li className="tree-item"><img style={{ margin: "5px",height:"20px" }}src={dotL} />1.05 Rs <p style={{ Color: "#C4C4C4", marginLeft:"30px" }}>Total Fees</p></li>
                                        <li className="tree-item"><img style={{ margin: "5px",height:"20px" }}src={dotL} /><strong>1 JHINGA ≈ 1 Rs + Gas Fees</strong> <p style={{ Color: "#C4C4C4",marginLeft:"30px" }}>Rate</p></li>

                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                            </Col>
                            <Col md={3}>
                            <div className="payment-item">
                                <p><BsChevronLeft/> Payments <img style={{marginLeft:"1.7px"}}src={Payment} /></p>
                            </div>
                            </Col>
                        </Row>

                        <Row class="form-input" style={{ display: "flex", paddingBottom: "10px", width: "100%" }}>
                            <Col md={9}>
                                <input type="number" className="input-launch" style={{ width: "100%", height: "3.5em", color: '#e9ecef' }} placeholder="Recieve" />
                            </Col>
                            <Col style={{ backgroundColor: "#f7f7f7", maxHeight: "4.5em", borderTopRightRadius: "10px", borderBottomRightRadius: "10px" }} md={3}>
                                <p style={{ margin: "8px 0px", paddingTop: '17px' }}>{tradeType === "buy" ? <div style={{ display: "flex", maxHeight: "2.5em" }}><img style={{ height: "1.5em" }} src={jhinga} /> <strong><p>JHINGA</p> </strong> </div> : <button className="selectToken" style={{ display: "contents" }} variant="primary" onClick={handleShow} ><div>{token === null ? '' : token}<img style={{ padding: "0 5px", height: "0.5em" }} src={DropdownImg} /></div></button>}</p>
                            </Col>

                        </Row>
                    </div>
                    {/* Mint tab close */}





                    <div>

                        <Button className="selectToken" variant="primary" style={{ width: "100%", height: "70px", borderRadius: "10px", fontSize: "18px" }} onClick={handleShow1} >Connect Wallet</Button>
                        <Modal show={show1} onHide={handleClose1}>
                            <Modal.Header closeButton >
                                <Modal.Title style={{ fontSize: "20px", fontWeight: "bold", fontFamily: "revert" }}> Connect a Wallet</Modal.Title>
                            </Modal.Header>
                            <Modal.Body >
                                <div style={{ backgroundColor: "rgb(222 222 222 / 36%)", borderRadius: "10px", padding: "10px 20px" }}>
                                    <p>By connecting a wallet, you agree to Uniswap Labs' <a style={{ color: "#FFA000" }} href="">Terms of Services</a> and acknowledge that you read and understand the <a style={{ color: "#FFA000" }} href="">ZINGA ProtoCol Disclaimer</a></p>
                                </div>
                                <hr />
                                <Container>
                                    <Row style={{ margin: "2px 8px" }} >
                                        <Col><p style={{ margin: "10px 0" }}><strong>Coinbase Wallet</strong></p></Col>
                                        <Col style={{ textAlign: "right" }}><img style={{ height: "2.5em" }} src={CoinBase} /></Col>
                                    </Row>
                                    <hr />
                                    <Row style={{ margin: "2px 8px" }}>
                                        <Col><p style={{ margin: "10px 0" }}><strong>Wallet Connect</strong></p></Col>
                                        <Col style={{ textAlign: "right" }}></Col>
                                    </Row>
                                    <hr />
                                    <Row style={{ margin: "2px 8px" }}>
                                        <Col><p style={{ margin: "10px 0" }}><strong>Coin 98</strong></p></Col>
                                        <Col style={{ textAlign: "right" }}><img style={{ height: "2.5em" }} src={Coin98} /></Col>
                                    </Row>
                                    <hr />
                                    <Row style={{ margin: "2px 8px" }}>
                                        <Col><p style={{ margin: "10px 0" }}><strong>Token Pocket</strong></p></Col>
                                        <Col style={{ textAlign: "right" }}><img style={{ height: "2.5em" }} src={tokenPocket} /></Col>
                                    </Row>
                                    <hr />
                                    <Row style={{ margin: "2px 8px" }}>
                                        <Col><p style={{ margin: "10px 0" }}><strong>Math Wallet</strong></p></Col>
                                        <Col style={{ textAlign: "right" }}><img style={{ height: "1em" }} src={mathWallet} /></Col>
                                    </Row>
                                    <hr />
                                    <Row style={{ margin: "2px 8px" }}>
                                        <Col><p style={{ margin: "10px 0" }}><strong>Blockto Wallet</strong></p></Col>
                                        <Col style={{ textAlign: "right" }}></Col>
                                    </Row>
                                    <hr />
                                    <Row style={{ margin: "2px 8px" }}>
                                        <Col><p style={{ margin: "10px 0" }}><strong>Install Metamask</strong></p></Col>
                                        <Col style={{ textAlign: "right" }}><img style={{ height: "2.5em" }} src={Metamask} /></Col>
                                    </Row>
                                    <hr />
                                    <Row style={{ margin: "2px 8px" }}>
                                        <Col><p style={{ margin: "10px 0" }}><strong>Portis</strong></p></Col>
                                        <Col style={{ textAlign: "right" }}></Col>
                                    </Row>
                                    <hr />
                                    <Row style={{ margin: "2px 8px" }}>
                                        <Col><p style={{ margin: "10px 0" }}><strong>Clover</strong></p></Col>
                                        <Col style={{ textAlign: "right" }}><img style={{ height: "1.5em" }} src={clover} /></Col>
                                    </Row>
                                    <hr />
                                    <Row style={{ margin: "2px 8px" }}>
                                        <Col><p style={{ margin: "10px 0" }}><strong>Fortmatic</strong></p></Col>
                                        <Col style={{ textAlign: "right" }}><img style={{ height: "1em" }} src={fortmatic} /></Col>
                                    </Row>
                                    <hr />
                                    <Row style={{ margin: "2px 8px" }}>
                                        <Col><p style={{ margin: "10px 0" }}><strong>Binance</strong></p></Col>
                                        <Col style={{ textAlign: "right" }}><img style={{ height: "2.5em" }} src={binance} /></Col>
                                    </Row>
                                </Container>
                            </Modal.Body>
                            <Modal.Footer className="footer1">

                            </Modal.Footer>
                        </Modal>
                    </div>


                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title className=''>Select Fiat</Modal.Title>
                        </Modal.Header>
                        <Modal.Body >
                            <div classme="searchWrapper" >
                                <div className="Search"  >
                                    <input closeButton className="input" type="text" placeholder="Search" />
                                </div>
                            </div>
                            <div className="wrapper">
                                <div className="wrapperItem">
                                    <div style={{ display: "flex" }}>
                                        <img style={{ height: "1.5em", margin: "0px 7px" }} src={IndImg} /> <p onClick={() => setToken("INR")} style={{ margin: "2px" }}> INR</p>
                                    </div>
                                </div>
                                <div className="wrapperItem1" >
                                    <div style={{ display: "flex" }}>
                                        <img style={{ height: "1.5em", margin: "0px 7px" }} src={UsdImg} />  <p onClick={() => setToken('USD')} style={{ margin: "2px" }}>USD</p>
                                    </div>
                                </div>
                                <div className="wrapperItem2">
                                    <div style={{ display: "flex" }}>
                                        <img style={{ height: "1.5em", margin: "0px 7px" }} src={EurImg} /> <p onClick={() => setToken('EUR')} style={{ margin: "2px" }}>EUR</p>
                                    </div>
                                </div>


                            </div>
                            <hr />

                            <Container>
                                <Row style={{ display: "flex" }} onClick={() => setToken('INR')} >
                                    <Col className="icon"><img style={{ height: "1.5em", margin: "1px 7px" }} src={IndImg} />INR</Col>
                                    <Col className="text1">Indian Rupee</Col>
                                </Row>
                                <hr />
                                <Row style={{ display: "flex" }} onClick={() => setToken('USD')}>
                                    <Col className="icon1"><img style={{ height: "1.5em", margin: "0px 7px" }} src={UsdImg} /> USD</Col>
                                    <Col className="text1">Dollar </Col>
                                </Row>
                                <hr />
                                <Row style={{ display: "flex" }} onClick={() => setToken('EUR')}>
                                    <Col className="icon2"><img style={{ height: "1.5em", margin: "0px 7px" }} src={EurImg} />EUR</Col>
                                    <Col className="text1">Euros</Col>
                                </Row>
                                <hr />
                                <Row onClick={() => setToken('GBP')}>
                                    <Col className="icon3"><img style={{ height: "1.5em", margin: "0px 7px" }} src={UkImg} /> GBP </Col>
                                    <Col className="text1">Pound </Col>
                                </Row>
                            </Container>
                        </Modal.Body>
                        <Modal.Footer className="footer1">

                        </Modal.Footer>
                    </Modal>


                </div>

            </Container>


        </section>
    );
};

export default Launch;










{/* <div className="menu-wrapper">
    <i className="fa-solid fa-caret-down" onClick={() => setmenuOpen("buy")}></i>
    <Button onClick={() => setmenuOpen("buy")}>expand</Button>
    {menuOpen === "buy" && (
        <div className="menu">
            <p className="menu-title">Order Type</p>
            {menuData.map((item) => (
                <div
                    key={item.name}
                    className="menu-item"
                    onClick={() => {
                        setactiveMenu(item.name);
                        setmenuOpen(null);
                    }}
                > style={{textAlign:"right"}}
                    <p>{item.name}</p>
                </div>

            ))}
        </div>
    )}
</div> */}
