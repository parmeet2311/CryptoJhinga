import React from "react"
// import { Container, Row, Col } from "react-bootstrap";
import { Container, Row, Col, Button } from "react-bootstrap";
import blogcover from "../../Assets/blog-cover.png";
import playbutton from "../../Assets/article1.png"
import AboutCard from "./AboutCard";


function About() {
    return (
        <section>
            <Container fluid className="home-section">
                <Container className="home-content">
                    <Row style={{ justifyContent: "center", textAlign: "center" }}>
                        <h2>About Us</h2>
                        <p>Circle is a global financial technology firm that's at the center of digital currency innovation and open financial infrastructure. We bridge the traditional financial system and the world's leading public blockchains to unlock growth for businesses and investors around the world.</p>
                    </Row>
                </Container>
                <div style={{ textAlign: "center" }}>
                    <div>
                        <h2>Leadership at Crypto JHINGA</h2>
                        <p>Crypto JHINGA is a global financial technology firm that’s at the center of digital
                            currency innovation and open financial infrastructure. We bridge the traditional
                            financial system and the world’s leading public blockchains to unlock growth for
                            businesses and investors around the world.</p>
                    </div>
                    <Row style={{ justifyContent: "space-between", padding: "10px 50px" }}>
                        <Col md={4} className="about-card">
                            <AboutCard
                                imgPath={playbutton}
                                title="Kalash Tirpude"
                                subtitle="Co-Founder and CEO"
                                description="Support multiple trading pairs to trade other coins to BUSD"
                            />
                        </Col>
                        <Col md={4} className="about-card">
                            <AboutCard
                                imgPath={playbutton}
                                title="Musharaf Iqubal"
                                subtitle="COO"
                                description="Support multiple trading pairs to trade other coins to BUSD"
                            />
                        </Col>
                        <Col md={4} className="about-card">
                            <AboutCard
                                imgPath={playbutton}
                                title="Abhishek Verma"
                                subtitle="CMO"
                                description="Support multiple trading pairs to trade other coins to BUSD"
                            />
                        </Col>
                        <Col md={4} className="about-card">
                            <AboutCard
                                imgPath={playbutton}
                                title="Abhayrajsinh Gohil"
                                subtitle="Head of Blockchain Development"
                                description="Support multiple trading pairs to trade other coins to BUSD"
                            />
                        </Col>
                        <Col md={4} className="about-card">
                            <AboutCard
                                imgPath={playbutton}
                                title="Aditi Chouksey"
                                subtitle="Human Resource / HR"
                                description="Support multiple trading pairs to trade other coins to BUSD"
                            />
                        </Col>
                        <Col md={4} className="about-card">
                            <AboutCard
                                imgPath={playbutton}
                                title="Abhinanda Dasgupta"
                                subtitle="Head of UI Design"
                                description="Support multiple trading pairs to trade other coins to BUSD"
                            />
                        </Col>


                    </Row>
                </div>
            </Container>
        </section>
    )
}
export default About





// border-radius: 50%;
//     width: 140px;
//     height: 140px;
//     z-index: 1;
//     border: solid #fff;
//     margin-top: -100px;