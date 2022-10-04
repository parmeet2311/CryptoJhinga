import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";

function BlogCard2(props) {
  return (
    <Card className="blog-card-view-2">
      <Card.Img className="blog-card-top-2" src={props.imgPath} alt="blog-card-img" />
      <Card.Body>
        <Card.Title><strong>{props.title}</strong></Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Card.Link className="card-anchor-2">
        <a className="blog-link-2" variant="primary" href={props.ghLink} target="_blank">
          Learn more
        </a>
        </Card.Link>
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
  );
}
export default BlogCard2;
