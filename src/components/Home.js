import React from "react";
import {Link} from "react-router-dom";

function Home() {
    return (
        <div>
            <h1>CISC 3140 : THE SITE FOR CARS</h1>
            <ul>
                <li><Link to="/cars">Car Viewer</Link></li>
                <li><Link to="/cars/add">Add a Car</Link></li>
            </ul>
        </div>
    )
}

export default Home;