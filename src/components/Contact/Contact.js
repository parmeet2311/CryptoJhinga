import React from "react"
import contactCover from "../../Assets/contact-cover.png";
import call from "../../Assets/call.png";
import email from "../../Assets/email.png";
import address from "../../Assets/address.png";
import satellite from "../../Assets/satellite.png";
import { Container, Row, Col } from "react-bootstrap";

function Contact() {
    return (
        <section>
            <Container className="Blog-content">
                <Row>
                    <Col md={5} className="Blog-header">
                        <h6 className="heading-name">
                            <strong > Contact Us</strong>
                        </h6>
                        <h6 style={{ paddingBottom: 15 }} className="heading">
                            Simple and Secure. Search popular coins and start earning.
                        </h6>

                    </Col>

                    <Col md={7} sm={7} xs={7} style={{ paddingBottom: 20 }}>
                        <img
                            src={contactCover}
                            alt="home pic"
                            className="img-fluid homelogo"
                            style={{ maxHeight: "450px" }}
                        />
                    </Col>
                </Row>
                <section id="form-box" class="animated jackInTheBox">
                    <div class="container">
                        <div class="form-box form-box-grid">
                            <div>
                                <div class="form-info">

                                    <ul>
                                        <Row style={{ display: "flex" }}>
                                            <Col md={3} sm={3} xs={3}>
                                                <img className="contact-img" src={call} />
                                            </Col>
                                            <Col md={8} sm={8} xs={8}>
                                                <li>+91 9175998424</li>
                                                <li>+91 9175998527</li>
                                            </Col>

                                        </Row>
                                        <Row>
                                            <Col md={3} sm={3} xs={3}>
                                                <img className="contact-img" src={email} />
                                            </Col>
                                            <Col md={8} sm={8} xs={8}>
                                                <li>hr@sabertoothtech.in</li>
                                            </Col>

                                        </Row>
                                        <Row>
                                            <Col md={3} sm={3} xs={3}>
                                                <img className="contact-img" src={address} />
                                            </Col>
                                            <Col md={8} sm={8} xs={8}>
                                                <li>H No: 336, B/701,<br />
                                                    Rajakothi Apartments,<br />
                                                    Civil Lines, Nagpur,<br />
                                                    Maharashtra - 440001</li>
                                            </Col>

                                        </Row>
                                    </ul>

                                </div>
                                <Row>
                                    <img style={{height:"100%"}} src={satellite} />
                                </Row>
                            </div>

                            <div class="form-input">
                                <h3><strong>Get in touch</strong></h3>
                                <form>
                                    <p class="full">
                                        {/* <label for="first_name">First name</label> */}
                                        <input type="text "name="first_name" placeholder="Name" required />
                                    </p>

                                    <p class="full">
                                        {/* <label for="email">Email address</label> */}
                                        <input type="email" name="email" placeholder="Email" required />
                                    </p>
                                    <p class="full">
                                        {/* <label for="email">Email address</label> */}
                                        <input type="subject" name="subject" placeholder="Subject" required />
                                    </p>
                                    <p class="full">
                                        {/* <label for="message">Your message</label> */}
                                        <textarea name="message" placeholder="Type your message here" required></textarea>
                                    </p>
                                    <p class="full">
                                        <button type="submit">Submit</button>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

            </Container>
        </section>
    )
}
export default Contact