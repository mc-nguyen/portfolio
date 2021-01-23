import React from "react";

function BackgroundVideo() {
    return (
        <video autoPlay loop muted
            style={{
                position: "fixed",
                width: "100%",
                left: "50%",
                top: "50%",
                height: "100%",
                objectFit: "cover",
                transform: "translate(-50%, -50%)",
                zIndex: -1,
            }}>
            <source src={process.env.PUBLIC_URL + 'videos/video-1.mp4'} type="video/mp4"/>
        </video>
    )
}

export default BackgroundVideo