import React from 'react';
import "./HomeScreen.css";
import Navbar from "../../navbar";
import Banner from "../../banner";

const HomeScreen = () => {
    return (
        <div className="homeScreen">
            <Navbar />
            <Banner />
            {/* rows */}
           
        </div>
    );
}

export default HomeScreen;
