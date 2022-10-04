import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.png";
import home from "../../Assets/home-2.png";
import Home2 from "./Home2";
import gif from "../../Assets/gif2.gif";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row style={{ paddingTop: "133px" }}>
            <Col md={7} className="home-header">
              {/* <img
                src={home}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "150px", paddingLeft:"45px" }}
              /> */}
              <img style={{width:"10em", marginLeft:"25px"}} src={gif} />
              <h3 className="heading-name">
                Jhinga Token
              </h3>
              <h6 style={{ paddingBottom: 15, fontWeight: "350" }} className="heading">
                Welcome to Crypto JHINGA, your currency for the blockchain universe. A reliable Stablecoin which is perpetually pegged to the INR.
              </h6>

              <p style={{ color: "#FFA000", paddingLeft: "45px", lineHeight: "inherit", fontSize: "large" }}>Learn More ></p>

              <div style={{paddingLeft: "45px", marginTop:"2em"}}>
                
                  <button style={{marginRight:"2.5em"}} className="warning-btn">Primary Market</button>
                
                
                  <button style={{margin:"5px"}} className="warning-btn">Swap Exchange</button>
                
              </div>

            </Col>

            <Col md={5} sm={5} xs={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid homelogo"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
