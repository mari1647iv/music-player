import React from "react";
import "./Components.css";
import Button from "../../components/Button/Button";
import {Play} from "react-feather";
import Input from "../../components/Input/Input";

function Components() {
    return ( 
        <div className="components-page"> 
            <p>Наши компоненты слева направо:</p>
            <div>
                <Button type="colorful" children="Search"/> 
                <Button type="icon" children="Search"/> 
                <Button type="icon" children={<Play size={40}/>}/> 
                <Button type="stuff" children="Search"/>
            </div><div>
            <Button type="colorful" children="Search" isDisabled={true}/>
            <Button type="icon" children="Search" isDisabled={true}/>
            <Button type="icon" children={<Play size={40}/>} isDisabled={true}/>
            <Button type="stuff" children="Search" isDisabled={true}/>
        </div><div>
            <Input type="music"/>
            <Input type="events"/>
            <Input type="date"/>
            <Input type="blablabla"/>
        </div>
        </div>
    );
}

export default Components;