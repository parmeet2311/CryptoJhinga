import React from "react";
import Card from "react-bootstrap/Card";
import { Container, Row, Col, Button } from "react-bootstrap";

function ProjectCard2(props) {
  return (
    <Card className="project-card-view-3">
      <Row>
        <Col md={6}>
          <Card.Body>
            <Card.Title style={{ color: "rgb(255, 116, 2)" }}><strong>{props.title}</strong></Card.Title>
            <Card.Text style={{ textAlign: "justify", }}>
              {props.description}
            </Card.Text>
            <Card.Text style={{ textAlign: "justify" }}>
              <Card.Link className="card-anchor"><strong>Learn More</strong></Card.Link>
            </Card.Text>
          </Card.Body>
        </Col>
        {/* <Col>
        <Card.Img variant="top" className="card-top" src={props.imgPath} alt="card-img" />
        </Col> */}
      </Row>
    </Card>
  );
}
export default ProjectCard2;
