import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCards3 from "./ProjectCards3" ;
import investor from "../../Assets/investor.png";

function Projects3(){
    return (<Container className="Project3">
        <h2 className="project-heading">
          Who is it for ?
        </h2>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="project-card-1 project3-1">
            <ProjectCards3
              md={6}
              isBlog={false}
              title="100% backed and fully transparent"
              description="All JHINGA tokens (USD₮) are pegged 
              at 1-to-1 with a matching fiat 
              currency and are backed 100% by 
              JHINGA’s reserves. We publish a daily 
              record of the current total assets and 
              reserves."
              link=""
              imgPath={investor}
            />
            {/* <Row>
              <Col md={6}>
                <button>hello</button>
              </Col>
              <Col md={6}>
                <button>world</button>
              </Col>
            </Row> */}
          </Col>


          <Col md={6} className="project-card-2 project3-2">
            <ProjectCards3
              isBlog={false}
              md={6}
              title="100% backed and fully transparent"
              description="All JHINGA tokens (USD₮) are pegged 
              at 1-to-1 with a matching fiat 
              currency and are backed 100% by 
              JHINGA’s reserves. We publish a daily 
              record of the current total assets and 
              reserves."
              link=""
            />
          </Col>
        </Row>
      </Container>

    )
}

export default Projects3


