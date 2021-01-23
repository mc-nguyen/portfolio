import React from "react";
import {Container, Jumbotron, Row, Col} from "react-bootstrap";

function Hero(props) {
    return (
        <Jumbotron className="bg-transparent jumbotron-fluid text-white">
            <Container fluid={true}>
                <Row className="justify-content-center">
                    <Col md={8} sm={10}>
                        { props.title && <h1 className="display-4 font-weight-bold">
                            {props.title}
                        </h1> }
                        { props.subtitle && <h2 className="font-italic font-weight-bold">
                            {props.subtitle}
                        </h2> }
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}

export default Hero