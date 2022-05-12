import React from 'react';
import './App.css';
import {Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import ViewCars from "./components/ViewCars";
import Navigation from "./components/Navigation";
import AddCars from "./components/AddCars";
import UpdateCars from "./components/UpdateCars";

function App() {
    return (
        <div>
            <Navigation />
            <Routes>

                    <Route index element={<Home/>}/>
                <Route path="cars">
                    <Route index element={<ViewCars/>} />
                    <Route path="add" element={<AddCars />} />
                    <Route path="update" >
                        <Route path=":id" element={<UpdateCars />} />
                    </Route>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
