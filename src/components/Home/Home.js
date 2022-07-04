import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/Images/Group.png";
import home2 from "../../Assets/Images/home-2.png";
import Home2 from "./Home2";


function Home() {
  return (
    <section>
      {/* <Container fluid className="home-section" id="home">

        <Container className="home-content">
          <Row className="homeComponents" style={{ justifyContent: "center" }}>
            <Col md={7} sm={12} xs={12} className="home-header">

              <Row className="jhinga-Rs-Row">
                <img src={home2} className="jhinga-Rs img-fluid" />
                <h2 style={{ paddingBottom: 8, color: "black" }} className="heading">
                  Jhinga Token
                </h2>

                <div style={{ paddingLeft: 50, textAlign: "left" }}>
                  <p>Welcome t0 Crypto JHINGA, your currency for the blockchain universe. A reliable Stablecoin which is perpetually pegged to the INR.</p>
                </div>
              </Row>
            </Col>

            <Col md={5} sm={5} xs={2} style={{ paddingBottom: 20 }}>
              <img src={homeLogo} alt="home pic" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </Container> */}
      <Container>
        <Home2 />
      </Container>
    </section>
  );
}

export default Home;
