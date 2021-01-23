import React from "react";
import CardInfo from "./CardInfo";

function Card(props) {
    return (
        <div className="d-inline-block g-card" onClick={(e) => props.click(props.item)}>
            <img className="g-card-image" src={props.item.image} alt={props.item.image} />
            {props.item.selected && <CardInfo title={props.item.title}
                                                description={props.item.description}
                                                github={props.item.github}/>}
        </div>
    );
}

export default Card