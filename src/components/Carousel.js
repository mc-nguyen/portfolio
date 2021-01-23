import React, {Component} from "react";
import Card from "./Card";
import {Container, Row} from "react-bootstrap";

class Projects extends Component {
    constructor() {
        super();
        this.state = {
            items: [
                {
                    id: 0,
                    title: "Loventure",
                    description: "A Flutter project",
                    image: process.env.PUBLIC_URL + "/images/loventure.jpg",
                    github: 'https://github.com/mc-nguyen/loventure',
                    selected: false,
                },
                {
                    id: 1,
                    title: "Munch Delivery",
                    description: "A Software Engineering project",
                    image: process.env.PUBLIC_URL + "/images/munch.jpg",
                    github: 'https://github.com/gaquangvy/munch-project',
                    selected: false,
                },
            ]
        }
    }

    handleCardClick = (id, card) => {
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if (item.id !== id) item.selected = false;
        })

        this.setState({
            items
        })
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id}/>
        })
    }

    render() {
        return (
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }
}

export default Projects