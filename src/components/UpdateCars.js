import React, {useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";

function UpdateCars() {

    const {id} = useParams()
    const [data, setData] = useState(null)
    console.log(data)

    const handleSubmitOwner = async (e) => {
        e.preventDefault()
        const info = await axios.put("http://localhost:8080/cars/update/owner", {update: [{ id: id, name: e.target[0].value }] })
        setData(info)
        e.target[0].value = ""
    }
    const handleSubmitEmail = async (e) => {
        e.preventDefault()
        const info = await axios.put("http://localhost:8080/cars/update/email", {update: [{ id: id, email: e.target[0].value }] })
        setData(info)
        e.target[0].value = ""
    }

    return (
        <div>
            <div>
                <h2>Update this car's Owner! :</h2>
                <form onSubmit={(event) => handleSubmitOwner(event)}>
                    <input placeholder={"Enter New Owner Name Here"}/>
                </form>
            </div>
            <div>
                <h2>Update this car's associated Email! :</h2>
                <form onSubmit={(event) => handleSubmitEmail(event)}>
                    <input placeholder={"Enter New Owner Email Here"}/>
                </form>
            </div>
            {data &&

            data.status === 200 ?
                <h1>SUCCESS!</h1> : <h1>PRESS ENTER AFTER FILLING EACH BOX</h1>}
        </div>
    )
}

export default UpdateCars;