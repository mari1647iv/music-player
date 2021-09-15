import React from "react";
import "./Main.css";
import Header from "../../components/Header/Header";

function Main() {
    return ( 
        <div className="main-page"> 
            <Header location="main"/>
            <p>Hello, world!</p>
        </div>
    );
}

export default Main;