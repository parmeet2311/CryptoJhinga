
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard2 from "./ProjectCards2";
import investor from "../../Assets/investor.png";
import merchants from "../../Assets/merchants.png";
import exchanges from "../../Assets/exchanges.png";



function Projects() {
  return (
    <Container fluid className="project-section">
      {/* <Particle /> */}
      <Container>
        <h1 className="project-heading">
          Who is it for?
        </h1>

        <Row style={{ justifyContent: "center", paddingBottom: "10px",margin:"0px 45px" }}>
        <Col md={4} className="project-card">
              <ProjectCard2
                imgPath={investor}
                title="JHINGA for Investers"
                description="JHINGA tokens offer exceptional liquidity 
              on tier one exchanges giving traders the 
              ability to take advantage of arbitrage 
              opportunities in the fastest time possible."
                link=""
            

              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard2
                imgPath={merchants}
                title="JHINGA for Merchants"
                description="For merchants, integrating JHINGA tokens 
              opens up an array of opportunities for 
              consumers to purchase products and 
              services."
                link=""
              />
            </Col>



            <Col md={4} className="project-card">
              <ProjectCard2
                imgPath={exchanges}
                title="JHINGA for Exchanges"
                description="JHINGA tokens play a pivotal role in the 
              digital token ecosystem and are the most 
              actively traded in terms of 24-hour 
              volume."
                link=""
              />
            </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

