import React from "react";
import "./Main.css";
import Button from "../../components/Button/Button";
function Main() {
    return ( 
        <div className="main-page"> 
            <p>Hello, world!</p>
            <div>
                <Button type="colorful" children="Search"/> 
                <Button type="icon" children="Search"/> 
                <Button type="stuff" children="Search"/> 
            </div><div>
                <Button type="colorful" children="Search" isDisabled={true}/> 
                <Button type="icon" children="Search" isDisabled={true}/> 
                <Button type="stuff" children="Search" isDisabled={true}/> 
            </div>
        </div>
    );
}

export default Main;