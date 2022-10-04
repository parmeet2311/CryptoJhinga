import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
// import Particle from "../Particle";
import purchase from "../../Assets/purchase.png";
import stable from "../../Assets/stable.png";
import trade from "../../Assets/trade.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          Your options to BUY/SELL <br /> <strong className="purple">JHINGA </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px", margin:"0px 45px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={purchase}
              button="Purchase Jhinga Now"
              title="Purchase JHINGA with cash"
              description="Purchase 1:1 with USD via wire transfer, or 
              top upvour JHINGA cash wallet with other 
              currencies to exchange to JHINGA."
              link=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={stable}
              button="Convert to Jhinga Now"
              title="Stablecoins to JHINGA"
              description="Zero transaction fee for BUSD/USDT.
              usoc/ruso. Tush/ruso pax/RUSD."
              link=""
            />
          </Col>



          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={trade}
              button="Trade Jhinga Now"
              title="Trade JHINGA with Crypto"
              description="Support multiple trading pairs to trade 
              other coins to BUSD.
              "
              link=""
            />
          </Col>



        </Row>
      </Container>
    </Container>
  );
}

export default Projects;