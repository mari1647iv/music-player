import React from "react";
import "./Components.css";
import Button from "../../components/Button/Button";
import {Play} from "react-feather";
import Input from "../../components/Input/Input";
import AudioBlock from "../../components/AudioBlock/AudioBlock";
import WreckedImage from "../../assets/wrecked.jpg";
import LFTGImage from "../../assets/lftg.jpg"

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
            </div>
            <div className="playlist">
                <div>
                    <AudioBlock song="Here's some song" artist="Some strange artist" duration="3:40"/> 
                </div>
                <div>
                    <AudioBlock song="Here's another song" artist="Another strange artist" image={WreckedImage} duration="3:14"/> 
                </div>
                <div>
                    <AudioBlock song="And one more song" artist="One more strange artist" image={LFTGImage} duration="42:42"/> 
                </div>
                <div>
                    <AudioBlock song="And.. Just kidding)" artist="Same old strange artist" duration="4:20"/> 
                </div>
            </div>
            <div>
            <Input type="music"/>
            <Input type="events"/>
            <Input type="date"/>
            <Input type="blablabla"/>
        </div>
        </div>
    );
}

export default Components;