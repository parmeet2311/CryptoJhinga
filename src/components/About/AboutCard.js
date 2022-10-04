import React from "react"
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";


function AboutCard(props) {
    return (
        <Card className="About-card-view">
            <Card.Img className="About-card-top" src={props.imgPath} alt="About-card-img" />
            <Card.Body>
                <Card.Title style={{fontSize:"1.2rem",color:"white"}}><strong>{props.title}</strong></Card.Title>
                <Card.Title style={{fontSize:"1rem"}}><small>{props.subtitle}</small></Card.Title>
                <Card.Text style={{ textAlign: "center", fontSize:"0.9rem",color:"white" }}>
                    {props.description}
                </Card.Text>
        
                {"\n"}
                {"\n"}

                {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

                {!props.isBlog && props.demoLink && (
                    <Button
                        variant="primary"
                        href={props.demoLink}
                        target="_blank"
                        style={{ marginLeft: "10px" }}
                    >
                        <CgWebsite /> &nbsp;
                        {"Demo"}
                    </Button>
                )}
            </Card.Body>
        </Card>
    )
}
export default AboutCard
