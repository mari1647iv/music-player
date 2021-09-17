import React from "react";
import "./Input.css";
import {Search, Calendar} from "react-feather";

function Input(props) {
    const {type} = props;

    return (
        <div className="input-container">
            <i className="input-icon">{(type==="music"||type==="events")?<Search size={36}/>:(type==="date"?<Calendar size={36}/>:"")}</i>
            <input type={type==="date"?"date":"text"} className="input-box" placeholder={type==="music"?"Search Music":(type==="events"?"Search Events":"Type Some Text")}/>
        </div>

    );
}

export default Input;