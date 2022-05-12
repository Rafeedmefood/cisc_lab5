import React, {useState} from "react";
import useGetOp from "./hooks/useGetOp";
import {Link} from "react-router-dom";

function ViewCars() {
    const [url, setURL] = useState("http://localhost:8080/cars/")
    const [isSingle, setIsSingle] = useState(false)
    const cars = useGetOp(url)

    const handleSubmitMake = (e) => {
        e.preventDefault()
        setURL(`http://localhost:8080/cars/make/${e.target[0].value}`)
        e.target[0].value = ""
        setIsSingle(false)
    }
    const handleSubmitID = (e) => {
        e.preventDefault()
        setURL(`http://localhost:8080/cars/${e.target[0].value}`)
        e.target[0].value = ""
        setIsSingle(true)
    }

    const handleClick = (ID) => {
        if (!ID) setIsSingle(false)
        else setIsSingle(true)
        setURL(`http://localhost:8080/cars/${ID}`)
    }

    return (
        <div>
            <div>
                <h2>Choose a make! :</h2>
                <form onSubmit={(event) => handleSubmitMake(event)}>
                    <input placeholder={"Enter Car Make Here"}/>
                </form>
            </div>
            <div>
                <h2>Choose a car based on ID! :</h2>
                <form onSubmit={(event) => handleSubmitID(event)}>
                    <input placeholder={"Enter Car ID Here"}/>
                </form>
            </div>
            <div>
                <h3>Car(s) :</h3>
                <div className="car-container">
                    {cars && cars.data.map(car => {
                        return (
                            <button className="cars" key={car.car_id} onClick={() => handleClick(car.car_id)}>
                                <h3>{car.make} {car.model} {car.year}</h3>
                                {isSingle &&
                                    <div>
                                        <p><strong>Owner : </strong>{car.owner} <br/><strong> Email : </strong>{car.email}</p>
                                        <p><strong>Score : </strong>{car.score}</p>
                                        <Link to={`/cars/update/${car.car_id}`}><strong>UPDATE</strong></Link>
                                    </div>
                                }
                            </button>
                        )
                    })}
                </div>
                <button onClick={() => handleClick('')}>All Cars</button>
            </div>
        </div>
    )
}

export default ViewCars;