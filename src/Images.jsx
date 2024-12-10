

import { useEffect, useState } from "react";
// import "./styles.css";

export default function Images() {
    const [loading, setLoading] = useState(true);
    const [image, setImage] = useState(
        "https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif"
    );

    useEffect(() => {
        if (loading) {
        setTimeout(() => {
            if (loading) {
                setLoading(false);
                setImage(
                    "https://post.healthline.com/wp-content/uploads/2020/08/3180-Pug_green_grass-732x549-thumbnail-732x549.jpg"
                );
            }
        }, 5000);
        }
    }, [loading, setLoading, setImage]);

    return (
        <div className="App">
            <img src={image} alt="okay" />
        </div>
);
}